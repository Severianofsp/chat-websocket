import app from "./app";
import { WebSocketServer } from 'ws'

const app_port:string = process.env.PORT || '';

const server = app.listen(app_port,()=>{
    console.log(`Server Running port: ${app_port} `)
})

const wss = new WebSocketServer({ server})

wss.on('connection', ws => {
  console.log('User connected')
  ws.on('message', msg => {
    wss.clients.forEach(client => {
      client.send(JSON.stringify({ message: msg.toString() }))
    })
  })
  ws.on('close', () => {
    console.log('User disconnected')
  })
})
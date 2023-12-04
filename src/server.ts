import app from "./app";
import { WebSocketServer } from 'ws'

const server = app.listen(3000,()=>{
    console.log(`Server Running port: 3000 `)
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
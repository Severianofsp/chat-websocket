import app from "./app";
import { WebSocketServer } from 'ws'

const APP_PORT:number = parseInt(process.env.PORT || '3000') ;

const server = app.listen(APP_PORT,()=>{
    console.log(`Server Running port: ${APP_PORT} `)
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
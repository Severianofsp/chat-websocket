import { WebSocketServer } from 'ws'

const websocketPort = process.env.WEBSOCKET_PORT || ''

const wss = new WebSocketServer({ port: parseInt(websocketPort) })

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

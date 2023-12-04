const socket = new WebSocket('ws://localhost:3000')
const messages = document.getElementById('messages')
const form = document.getElementById('form')
const input = document.getElementById('input')

form.addEventListener('submit', e => {
  e.preventDefault()
  if (input.value) {
    socket.send(input.value)
    input.value = ''
  }
})

function handleServerMessage(event) {
  console.log('mensagem recebida', JSON.parse(event.data))
  const item = document.createElement('li')
  item.textContent = JSON.parse(event.data).message
  messages.appendChild(item)
  window.scrollTo(0, document.body.scrollHeight)
}

socket.addEventListener('message', handleServerMessage)

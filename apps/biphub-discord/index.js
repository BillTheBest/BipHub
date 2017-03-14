import client from 'socket.io-client'
import config from './config'

function init() {
  const socket = client('http://localhost:8080/', { query: `bipName=${config.name}` })
  socket.on('connect', () => {
  })
  socket.on('testEvent', () => {
  })
  socket.on('disconnect', () => {
  })
  socket.on('discord:issueCreated', (payload) => {
    console.log('creating issue! ', payload)
  })
  socket.emit('REGISTER_APP', config)
}

export default {
  init,
}
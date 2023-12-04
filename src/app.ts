import express, { Application } from 'express'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

class App {
  app: Application
  constructor() {
    this.app = express()
    this.middleware()
    this.routes()
  }
  middleware() {
    this.app.use('/public', express.static('public'))
  }
  routes() {
    this.app.use('/', (req, res) => {
      const filePath = path.join(__dirname, '..', '/public/index.html')
      res.sendFile(filePath)
    })
  }
}

export default new App().app

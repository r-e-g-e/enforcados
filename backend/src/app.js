import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"
import cors from "cors"

import { initEvents } from "./events.js"

const app = express()

app.use(cors({
  origin:"*"
}))

const server = createServer(app)
const ioServer = new Server(server, {
  cors:{
    origin:"*"
  }
})

initEvents(ioServer)

export { server }
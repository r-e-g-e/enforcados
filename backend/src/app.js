import express from "express"
import { createServer } from "http"
import socketio from "socket.io"
import cors from "cors"

const app = express()

app.use(cors({
  origin:"*"
}))

const server = createServer(app)
const ioServer = socketio(server, {
  cors:{
    origin:["*"]
  }
})


export { ioServer }
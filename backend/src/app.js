import { createServer } from "http"
import { Server } from "socket.io"

import { initEvents } from "./events.js"


const server = createServer( (req, res) => {
  return res.end("Hello world! FROM enforcados")
})

const ioServer = new Server(server, {
  cors:{
    origin:"*"
  }
})

initEvents(ioServer)

export { server }
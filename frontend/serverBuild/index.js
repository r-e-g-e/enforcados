import express from "express"

const port = process.env.PORT || 3000
const app = express()


app.use(express.static("./build"))

app.get("/", (req, res) => {
  return res.send("/index.js")
})


app.listen(port, () => console.log("Running at " + port))
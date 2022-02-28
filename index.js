require("dotenv").config()
const express = require("express")
const cors = require("cors")
const todos = require("./data")

const app = express()
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  }),
)
app.use(express.json())

app.get("/", (req, res) => {
  return res.status(200).send({
    msg: "Hello World",
  })
})

app.get("/api/", (req, res) => {
  return res.status(200).send({
    msg: "Welcome to api server",
  })
})

app.get("/api/todos", (req, res) => {
  return res.status(200).send(todos)
})

app.post("/api/todos/create", (req, res) => {
  return res.status(201).send({
    msg: "Todo Created",
  })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

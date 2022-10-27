const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send({
    "slackUsername": "shemigam1",
    "backend": true,
    "age": 18,
    "bio": "I am a web developer"
    })
})
const port = process.env.PORT || 3000

app.listen(port, ()=> console.log(`listening on port ${port}`))
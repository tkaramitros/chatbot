const express = require('express')

const port = 4000

const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

app.post("/hello", (req, res) => {
  console.log("Hello");
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
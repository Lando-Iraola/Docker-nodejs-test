const express = require("express");
const app = express();

const messageRouter = require("./routers/messages");

app.use(express.json())
app.use(messageRouter)

const port = process.env.PORT || 8080;

app.listen(port, () => {console.log(`app listening on http://localhost:${port}`)});
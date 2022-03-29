const express = require("express");
const app = express();
const cors = require("cors");

const messageRouter = require("./routers/messages");

app.use(cors({origin: "*"}));
app.use(express.json())
app.use(messageRouter)

app.get("/", (req, res) => res.redirect("/message"));

const port = process.env.PORT || 8080;

app.listen(port, () => {console.log(`app listening on http://localhost:${port}`)});
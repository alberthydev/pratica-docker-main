const express = require("express");
const path = require("path");
const http = require("http");
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

const router = express.Router();

router.get("/", (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.use(router);

server.listen(PORT, () => {
    console.log(`\n Servidor rodando na porta ${PORT}`);
});
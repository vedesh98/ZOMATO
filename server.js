const http = require('http');
const app = require('./app.js');
// require('dotenv').config();
const port = process.env.PORT || 4000;

// app.get("/hi", (request, response) => {
//     response.send("HI")
// })

const server = http.createServer(app);
server.listen(port);
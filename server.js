const net = require('net');
const PORT = 3000;
const server = net.createServer();

// server.on('connection', (conn) => {
  
// });

server.listen(PORT, (error) => {
  if (error) {
    console.log('server count not start');
  } else {
    console.log(`server is listening on port: ${PORT}.`)
  }
});
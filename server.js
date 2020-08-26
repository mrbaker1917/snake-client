const net = require('net');
const PORT = 3000;
const server = net.createServer();

const connections = [];
server.on('connection', (conn) => {
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('->', data);
  });
});

connections.push(conn);

conn.on('data', (data) => {
  console.log('->', data);
  for (let connection of connections) {
    try {
      connection.write(data);
    } catch (err) {
      console.log('someone disconnected');
    }
  }
});

server.listen(PORT, (error) => {
  if (error) {
    console.log('server can not start');
  } else {
    console.log(`server is listening on port: ${PORT}.`);
  }
});
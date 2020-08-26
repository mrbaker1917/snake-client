const net = require('net');
const { IP, PORT } = require('./constants');
const stdin = process.stdin;
stdin.resume();
stdin.setEncoding('utf8');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('You are connected to the snake server!');
    conn.write("Name: mrb");
  });

  conn.on('data', (data) => {
    console.log(`-> ${data}`);
  });

  return conn;
};

module.exports = { connect };
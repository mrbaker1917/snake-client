const net = require('net');
const stdin = process.stdin;
stdin.resume();
stdin.setEncoding('utf8');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: '50542'
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('You are connected to the snake server!');
    conn.write("Name: mrb");
  //   setInterval(() => {
  //     conn.write("Move: left");
  //   }, 50);
  // });

  conn.on('data', (data) => {
    console.log(`-> ${data}`)
  });

  return conn;
};

module.exports = { connect };
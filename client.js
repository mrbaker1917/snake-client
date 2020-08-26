const net = require('net');
const stdin = process.stdin;
stdin.resume();
stdin.setEncoding('utf8');



const client = net.createConnection({
  host: '0.tcp.ngrok.io',
  port: 11890,
});

client.setEncoding('utf8');

client.on('connect', () => {
  console.log('You are connected to Travis server!');
  client.write("Hello, this is mark.")
});

stdin.on('data', (data) => {
  client.write(data);
});

client.on('data', (data) => {
  console.log(`-> ${data}`)
})
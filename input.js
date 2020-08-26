const { KEYOBJECT } = require('./constants');
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('Hope you enjoyed the game! Ciao!');
    process.exit();
  }
  if (key) {
    connection.write(KEYOBJECT[key]);
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = { setupInput };
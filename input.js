let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('Hope you enjoyed the game! Ciao!');
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'm') {
    connection.write("Say: move aside!");
  }
  if (key === 'e') {
    connection.write("Say: eat");
  };
  if (key === 'p') {
    connection.write("Say: play");
  }
  if (key === 'f') {
    connection.write("Say: fruit!");
  }
  if (key === 'b') {
    connection.write("Say: back");
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
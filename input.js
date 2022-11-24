let connection;

const handleUserInput = function(key) {
  
  //controls
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }

  //exit
  if (key === '\u0003') {
    process.exit();
  }

  //comms
  if (key === '1') {
    connection.write('Say: rawr');
  }
  if (key === '2') {
    connection.write('Say: sssss');
  }
  if (key === '3') {
    connection.write('Say: hell,world');
  }
  if (key === '4') {
    connection.write('Say: console log');
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };
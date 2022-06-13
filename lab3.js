const EventEmitter = require('events');
const logger = new EventEmitter();

const users = [];
const msgs = [];

logger.on('message', (msg) => {
  console.log(`New message: ${msg}`);
  msgs.push(msg);
});

logger.on('login', (name) => {
  console.log(`New user: ${name}`);
  users.push(name);
});

logger.on('getUsers', () => {
  console.log(`Logged users: ${users.join(' /|\\ ')}`)
});

logger.on('getMsgs', () => {
  console.log(`Messages: ${msgs.join(' ')}`)
});

logger.emit('message', 'Welcome');
logger.emit('message', 'to');
logger.emit('message', 'the');
logger.emit('message', 'hell');

logger.emit('login', 'Ivan');
logger.emit('login', 'Kesha');
logger.emit('login', 'Evkakiy');
logger.emit('login', 'Vesemir');

logger.emit('getUsers');
logger.emit('getMsgs');
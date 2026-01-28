const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
  console.log('The start event has been triggered!');
});

console.log("before emitting 'start' event");
eventEmitter.emit('start');
console.log("after emitting 'start' event");
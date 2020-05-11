const EventEmitter = require('events');
const { fromEvent } = require('rxjs');

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter();

fromEvent(myEmitter, 'event').subscribe(
  () => console.log('event'),
  err => console.error(err),
  () => console.log('completed!'),
);

myEmitter.emit('event');
myEmitter.emit('event');


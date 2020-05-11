const { from } = require('rxjs');

console.log('[Array]');

from([1, 2, 3, 4]).subscribe(
  x => console.log(`next: ${x}`),
  err => console.error(err.message),
  () => console.log('completed'),
);

console.log('\r\n[Generator]');

function* forLoopGen(start, end, increment) {
  for (let x = start; x <= end; x += increment) {
    yield x;
  }
}

from(forLoopGen(1, 15, 2)).subscribe(
  x => console.log(`next: ${x}`),
  err => console.error(err.message),
  () => console.log('completed'),
);

console.log('\r\n[String]');

from('Hello').subscribe(
  x => console.log(`next: ${x}`),
  err => console.error(err.message),
  () => console.log('completed'),
);

console.log('\r\n[Promise]');

from(new Promise((resolve) => {
  console.log('Promise 1 function begin');
  setTimeout(() => resolve('Promise 1 resolve'), 700);
  console.log('Promise 1 function end');
})).subscribe(
  x => console.log(`Promise 1 next: ${x}`),
  err => console.error(`Promise 1 err: ${err.message}`),
  () => console.log('Promise 1 completed'),
);

from(new Promise((_, reject) => {
  console.log('Promise 2 function begin');
  setTimeout(() => reject(new Error('Promise 2 resolve')), 1400);
  console.log('Promise 2 function end');
})).subscribe(
  x => console.log(`Promise 2 next: ${x}`),
  err => console.error(`Promise 2 err: ${err.message}`),
  () => console.log('Promise 2 completed'),
);
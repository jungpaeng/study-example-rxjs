const { of, asapScheduler } = require('rxjs');

console.log('BEFORE call subscribe()');

of(1, 2, 'a', 'b', 3, 4, ['arr1', 'arr2']).subscribe(
  x => console.log(`next ${x}`),
  err => console.error(err.message),
  () => console.log('completed'),
);

console.log('AFTER call subscribe()');

console.log('BEFORE call async subscribe()');

of(1, 2, 'a', 'b', 3, 4, ['arr1', 'arr2'], asapScheduler).subscribe(
  x => console.log(`next ${x}`),
  err => console.error(err.message),
  () => console.log('completed'),
);

console.log('AFTER call async subscribe()');
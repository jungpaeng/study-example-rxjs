const { Observable } = require('rxjs');

const observable1to10WithError$ = new Observable(observer => {
  try {
    console.log('[observable1to10WithError] BEGIN subscribe function');
    for (let value = 1; value <= 10; value++) {
      // eslint-disable-next-line no-undef
      observer.next(valeu);
    }
  } catch (e) {
    observer.error(e);
  }

  observer.complete();
  console.log('[observable1to10WithError] END subscribe function');

  return () => {
    console.log('[observable1to10WithError] unsubscribed');
  };
});

observable1to10WithError$.subscribe(
  value => console.log(`next value: ${value}`),
  error => console.error('error', error.message),
  () => console.log('complete!'),
);
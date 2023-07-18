const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
  console.log('started');
});

eventEmitter.on('start', number => {
  console.log(`started ${number}`);
});

eventEmitter.emit('start', 23);

eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('start', 1, 100);





function final(someInput, callback) {
  callback(`${someInput} and terminated by executing callback `);
}

function middleware(someInput, callback) {
  return final(`${someInput} touched by middleware `, callback);
}

function initiate() {
  const someInput = 'hello this is a function ';
  middleware(someInput, function (result) {
    console.log(result);
    // requires callback to `return` result
  });
}

initiate();





//emitter.on(event:'anything', listener:data => {console.log('ON: anything', data)});
//emitter.emit(event:'anything', args{a: 1});
//emitter.emit(event:'anything', args{b: 2});

//setTimeout(handler: ()=>
	//emitter.emit(event:'anything', args{c: 3});
	//), timeout: 1500
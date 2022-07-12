//1----------------------

let coffeeMachine = {
  message: 'Your coffee is ready!',

  start: function funcStart() {
    setTimeout(console.log(this.message), 3000);
  },
}

coffeeMachine.start();

let coffeeMachine2 = {
  message: 'Your coffee is ready!',

  start: function funcStart() {
    setTimeout(console.log(teaPlease.message), 3000);
  },
}

let teaPlease = {
  message: 'Wanna some tea instead of coffee?',
}

coffeeMachine2.start();


//2----------------------

function concatStr(arg1, arg2, arg3){
  console.log(`${arg1} ${arg2} ${arg3}`);
}

let checkConcat = concatStr('Hello', ' ', 'Matt');

let hello = concatStr.bind(null,'Hello', ' ');

let finalResult = hello('Matt');
let finalResult2 = hello('John');


// //3----------------------

function showNumbers(start, end, time) {
  let num = start;
  let timer = setInterval(function() {
    console.log(num);
    if (num == end) {
      clearInterval(timer);
    }
    num++;
  }, time);
}

showNumbers(5, 10, 500);


function showNumbersTwo(start, end, time) {
  let num = start;

  setTimeout(function count() {
    console.log(num);
    if (num < end) {
      setTimeout(count, time);
    }
    num++;
  }, time);
}

showNumbersTwo(5, 10, 500);

//4-----------------------

function addBase(base) {
  return function (num) {
    return base + num;
  };
}
let addOne = addBase(1);
alert(addOne(5) + addOne(3));

//результат 10
// (base) = 1
// (num) = 5 и 3
// в соответсвии с функцией получается  (1 + 5) + (1 + 3) = 10
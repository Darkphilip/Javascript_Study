// Generator : 함수 실행을 중간에 멈췄다가 재개할 수 있는 기능

// function* fn() {
//   try {
//     console.log(1);
//     yield 1;
//     console.log(2);
//     yield 2;
//     console.log(3);
//     console.log(4);
//     yield 3;
//     return 'finish';
//   } catch (e) {
//     console.log(e);
//   }
// }

// const a = fn();

// console.log((a.next()));
// // console.log(a.return('END'));
// console.log(a.throw(new Error('err')));
// a.next();

// Generator
// iterable
// - Symbol.iterator 메서드가 있다. 
// - Symbol.iterator는 iterator를 반환해야 한다.

// iterator
// - next 메서드를 가진다.
// - next 메서드는 value와 done 속성을 가진 객체를 반환한다.
// - 작업이 끝나면 done은 true가 된다.

function* fn2() {
  const num1 = yield "첫번째 숫자를 입력하세요";
  console.log(num1);

  const num2 = yield "두번째 숫자를 입력하세요";
  console.log(num2);

  return num1 + num2;
}

const a = fn2();

console.log(a.next(1));
console.log(a.next(2));
console.log(a.next(4));

// 값을 미리 만들어 두지 않음

function* fn3() {
  let index = 0;
  while (true) {
    yield index++;
  };
}

const b = fn3();
console.log(b.next());

// yield*
function* gen1() {
  yield "w";
  yield "o";
  yield "r";
  yield "l";
  yield "d";
}

function* gen2() {
  yield "hello";
  yield* gen1();
  yield "!";
}

console.log(...gen2());
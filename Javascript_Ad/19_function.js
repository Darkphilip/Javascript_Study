// String.replaceAll

const str1 = "I'm [Mike]. This is Tom's [Car].";
console.log(str1.replaceAll("[", "~").replaceAll("]","~")); 

// Promise.race : 프로미스 중에 가장 먼저 완료된 결과값으로 이행/거부
// Promise.any : 프로미스 중에 가장 먼저 이행된 객체 반환

const rejPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("fail...");
  }, 1000);
})

const resPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("success");
  }, 2000);
});

Promise.race([rejPromise, resPromise])
  .then(() => console.log('성공'))
  .catch(e => console.log(e));

Promise.any([rejPromise, resPromise])
  .then(() => console.log('성공'))
  .catch(e => console.log(e));

function add(num1, num2) { // 앞의 값이 false이면 뒤의 값이 적용
  num1 ||= 0;
  num2 ||= 0;
  console.log(num1 + num2);
}

name = name && `Hello ${name}`;
name &&= `Hello ${name}`;

name = name ?? "Mike";
name ??= "Mike"; // 앞의 값이 null이나 undefined이면 뒤의 값이 적용


let billion = 1_000_000_000 // 10억

// WeakRef

let user = {name: 'Mike', age:30}

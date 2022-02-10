/* 
  배열 구조 분해
*/

let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;

console.log(user1);
console.log(user2);
console.log(user3);

let str = 'Mike-Tom-Jane';
let [user4,user5,user6] = str.split('-');
console.log(user4);
console.log(user5);
console.log(user6);

// 기본값
// let [a,b,c] = [1,2]; // c = undefined
// let [a=3, b=4, c=5] = [1,2];

// 일부 반환값 무시
let [user_1, , user_2] = ['Mike', 'Tom', 'Jane', 'Tony'];
console.log(user_1); // Mike
console.log(user_2); // Jane

// 바꿔치기
// let a = 1;
// let b = 2;
// [a,b] = [b,a];

// 객체 구조 분해
let userOb = {name: 'Mike', age: 30};
// let {name, age} = userOb;
/*
  let name = user.name;
  let age = user.age;
*/
// 새로운 변수 이름으로 할당
let {name: userName, age: userAge} = userOb;
console.log(userName); // Mike
console.log(userAge); // 30

// 기본값 객체로부터 전달받은 값이 undefined이면 할당 가능
let { name, age, gender = 'male'} = userOb;
console.log(gender);
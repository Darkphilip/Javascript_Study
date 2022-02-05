// 계산된 프로퍼티(Computed property)

let a = 'age';

const user = {
  name : 'Mike',
  [a] : 30 // age: 30
}

const user1 = {
  [1 + 5] : 6,
  ["안녕" + "하세요"] : 'hello'
}
console.log(user1)

function makeObj(key, val) {
  return {
    [key] : val
  }
}
const obj = makeObj("나이", 33);
console.log(obj);

// Object.assign() : 객체 복제

const newUser = Object.assign({}, user);
newUser.name = 'John'
console.log(newUser);

const newUser1 = Object.assign({gender: 'male'}, user);
console.log(newUser1);

const newUser2 = Object.assign({name: 'Philip'}, user);
console.log(newUser2); // 덮어 쓰기

const user2 = {
  name : 'Mike'
}
const info1 = {
  age : 30,
} 
const info2 = {
  gender : 'male'
}

const userInfo = Object.assign(user2, info1, info2);
console.log(userInfo); 

const user3 = {
  name: 'Mike',
  age: 30,
  gender: 'male',
}
// Object.keys() : 키 배열 반환 
console.log(Object.keys(user3));
// Object.values() : 값 배열 반환
console.log(Object.values(user3));
// Object.entries() : 키/값 배열 반환
console.log(Object.entries(user3));
// Object.fromEntries() : 키/값 배열을 객체로
const arr = [
  ["name", "mike"],
  ["age", 30],
  ["gender", "male"]
];
console.log(Object.fromEntries(arr));
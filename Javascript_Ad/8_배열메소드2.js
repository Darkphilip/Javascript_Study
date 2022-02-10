// sort(): 배열 재정렬
// 주의! 배열 자체가 변경됨
// 인수로 정렬 로직을 담은 함수를 받음
// LoDash
let arr = [27, 8, 5, 13];

arr.sort((a,b) => {
  return a - b;
});

console.log(arr);

/*
  arr.reduce()
  인수로 함수를 받음
  ((누적 계산값, 현재값) => {return 계산값}, 초기값)
*/
// 배열의 모든 수 합치기
let arr2 = [1,2,3,4,5];

// for, for of, forEach
const result = arr2.reduce((prev, cur) => {
  return prev + cur;
}, 10);

console.log(result);

let userList = [
  {name: 'Mike', age: 30},
  {name: 'Tom', age: 10},
  {name: 'Jane', age: 27},
  {name: 'Sue', age: 26},
  {name: 'Harry', age: 12},
  {name: 'Steve', age: 60},
]

let resultList = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, [] );

console.log(resultList);


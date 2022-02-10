// splice(n, m, x) : 특정 요소 지우고 추가
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 3, 100, 200);
console.log(arr);

// splice(): 삭제된 요소 반환

let result = arr.splice(1, 2);
console.log(result); // [2, 3]

// slice(n, m): n부터 m까지 반환
arr.slice(1, 4); // [2,3,4] 

// concat(arr2, arr3, ...) : 합쳐서 새배열 반환
arr.concat([3,4]) // [1,2,3,4]
arr.concat([3,4], [5,6]) // [1,2,3,4,5,6]
arr.concat([3,4], 5, 6) // [1,2,3,4,5,6]

// forEach(fn): 배열 반복
let users = ['mike', 'tom', 'jane'];
users.forEach((item, index, arr) => {
  console.log(`${index + 1}. ${item}`);
});

// indexOf / lastIndexOf
let arr1 = [1,2,3,4,5,6,1,2,3];
arr.indexOf(3); // 2
arr.indexOf(3, 3) // 7
arr.lastIndexOf(3); // 7

// includes(): 포함하는지 확인
let arr2 = [1,2,3];
arr.includes(2); // true
arr.includes(8); // false

// find(fn) / findIndex(fn) 
// 첫번째 true 값만 반환하고 끝
// 만약 없으면 undefined 반환

let arr3 = [1,2,3,4,5];
const result1 = arr3.find((item) => {
  return item % 2 === 0;
})
console.log(arr3); // 2

let userList = [
  {name: 'Mike', age: 30},
  {name: 'Jane', age: 20},
  {name: 'Tom', age: 10},
]

const result2 = userList.find((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});
console.log(result2);

// filter(fn) 만족하는 모든 요소를 배열로 반환

const arr4 = [1,2,3,4,5,6];

const result3 = arr4.filter((item) => {
  return item % 2 === 0;
});
console.log(result3);

// reverse(): 역순으로 재정렬 
let arr5 = [1,2,3,4,5];
arr5.reverse(); // [5,4,3,2,1]

// map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환

let newUserList = userList.map((user, index) => {
  return Object.assign({}, user, {
    id: index + 1,
    isAdult: user.age > 19,
  });
});
console.log(newUserList);

let arr6 = ["안녕", "나는", "철수야"];
let result6 = arr6.join(" ");
console.log(result6);

const users2 = "Mike,Jane,Tom,Tony";
const result_2 = users2.split(","
)
console.log(result_2);

// Array.isArray()
let user_3 = {
  name: 'mike',
  age: 30,
};
let userList_3 = ['mike', 'tom', 'jane'];
console.log(typeof user_3);
console.log(typeof userList_3);

console.log(Array.isArray(user_3));
console.log(Array.isArray(userList_3));
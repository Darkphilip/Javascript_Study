// 인수 전달
// 매개변수 개수 제한 없음

/* arguments
  - 함수로 넘어온 모든 인수에 접근
  - 함수 내에서 이용 가능한 지역 변수
  - length/index
  - Array 형태의 객체
  - 배열의 내장 메서드 없음(forEach, map)
*/

// 나머지 매개변수
function add(...numbers) {
  let result = 0;
  numbers.forEach((num) => (result += num));
  console.log(result);
}

add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);

// 생성자 함수
function User(name, age, ...skills) { // 나머지 매개변수는 항상 맨 뒤에 위치
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 30, 'react', 'java');
const user3 = new User('Jane', 30, 'python', 'english');

console.log(user1);
console.log(user2);
console.log(user3);

// 전개 구문: 배열
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [0, ...arr1, ...arr2, 7, 8, 9]; //[0,1,2,3,4,5,6,7,8,9];

// 전개 구문: 복제
let arr3 = [1,2,3];
let arr4 = [...arr3]; // [1,2,3]

let user_1 = {name: 'Mike', age:30};
let user_2 = {...user_1};
user_2.name = 'Tom';
console.log(user_1.name); // Mike
console.log(user_2.name); // Tom

let user_3 = {name: 'mike'};
let info = {age:30};
let fe = ["js", "React"];
let lang = ["Korean", "English"];

user_3 = {
  ...user3,
  ...info,
  skills : [
    ...fe,
    ...lang,
  ]
};

console.log(user_3);
// var는 선언하기 전에 사용할 수 있다.

// var name;
// console.log(name);
// name = 'mike';

// console.log(name); // ReferenceError
// let name = 'Mike';

// 호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동
let age = 30;
function showAge() {
  console.log(age);
  let age = 20;
}
showAge(); // age가 호이스팅이 되어 에러 발생 
// TDZ: Temporal Dead Zone
// 코드를 예측 가능하게 하고 잠재적인 버그를 줄일 수 있음.

// 변수의 생성과정
// 1. 선언 단계
// 2. 초기화 단계
// 3. 할당 단계
// var: 1. 선언 및 초기화 단계 2. 할당 단계
// let: 1. 선언 단계 2. 초기화 단계 3. 할당 단계
// const: 1. 선언 + 초기화 + 할당

// var: 함수 스코프 (함수에서는 벗어날 수 없는 스코프)

// let, const: 블록 스코프 (함수, if문, for문, while문, try/catch문 등)

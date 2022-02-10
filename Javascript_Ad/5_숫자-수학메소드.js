// toString()
// 10진수 -> 2진수 / 16진수
let num = 10;
num.toString(); // "10"
num.toString(2); // "1010"
let num2 = 255;
num2.toString(16); // "ff"

// Math
Math.PI;

let num3 = 5.1;
let num4 = 5.7;
// 올림
Math.ceil(num3) // 6
Math.ceil(num4) // 6
// 내림
Math.floor(num3) // 5
Math.floor(num3) // 5
// 반올림
Math.round(num3) // 5
Math.round(num4) // 6

// 소수점 자릿수
let userRate = 30.1234;
Math.round(userRate * 100) / 100 // 30.12
userRate.toFixed(2); // "30.12"
userRate.toFixed(0); // "30"
userRate.toFixed(6); // "30.123400"

Number(userRate.toFixed(2)); // 30.12

// isNaN()
let x = Number('x') // NaN
x == NaN // false
x === NaN // false
NaN == NaN // false
isNaN(x) // true
isNaN(3) // false

// parseInt()
let margin = '10px';
parseInt(margin); // 10
Number(margin); // NaN

let redColor = 'f3';
parseInt(redColor); // NaN
parseInt(redColor, 16); // 243

parseInt('11', 2) // 3

// parseFloat()
let padding = '18.5%';
parseInt(padding); // 18
parseFloat(padding); // 18.5

// Math.random(): 0과 1사이 무작위 숫자 생성
// 1 ~ 100 사이 숫자를 뽑고 싶다면?
Math.floor(Math.random() * 100) + 1

// Math.abs(): 절대값
Math.abs(-1); // 1
// Math.pow(n, m) : 제곱
Math.pow(2, 10); // 1024
// Math.sqrt(): 제곱근
Math.sqrt(16) // 4
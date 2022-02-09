// length: 문자열 길이
let desc = "안녕하세요";
desc.length() // 6
// 특정 위치에 접근
desc[2] // 하

// toUpperCase() / toLowerCase()
let desc2 = "Hi guys. Nice to meet you.";
desc2.toUpperCase();
desc2.toLowerCase();

// indexOf(text)
desc2.indexOf('to') // 14
desc2.indexOf('man') // -1

if (desc2.indexOf('Hi') > -1) {
  console.log('Hi가 포함된 문장입니다.');
}

// slice(n, m) n: 시작점 m: 없으면 문자열 끝까지 / 양수면 그 숫자 전까지 / 음수면 끝에서부터 셈
// substring(n, m) n과 m 사이 문자열 반환 n과 m을 바꿔도 동작함 음수는 0으로 인식
// substr(n, m) n부터 시작 m개를 가져옴
// trim() 앞 뒤 공백 제거

// includes 문자가 있으면 true 없으면 false 반환 
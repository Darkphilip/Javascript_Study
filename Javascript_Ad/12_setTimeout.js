// setTimeout, clearTimeout

setTimeout(function() {
  console.log(1);
}, 3000);

// setInterval, clearInterval

let num = 0;

function showTime() {
  console.log(`접속하신지 ${num++}초가 지났습니다.`);
  if (num > 5) {
    clearInterval(tId);
  }
}

const tId = setInterval(showTime, 1000);
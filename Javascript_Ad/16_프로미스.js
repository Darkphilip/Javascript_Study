const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK');
  }, 1000);
});

console.log("Start");
pr.then((result) => {
  console.log(result);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("End");
  });

const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000); 
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      // res('2번 주문 완료')
      rej(new Error('xxx'));
    }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('3번 주문 완료');
    }, 2000);
  });
};

// Promise All 하나라도 err면 에러 발생
// console.time('x');
// Promise.All([f1(), f2(), f3()]).then((res) => {
//   console.log(res);
//   console.timeEnd('x');
// });

// Promise Race
console.time('x');
Promise.race([f1(), f2(), f3()]).then((res) => {
  console.log(res);
  console.timeEnd('x');
});

// console.log('시작');
// f1()
//   .then((res) => f2(res))
//   .then((res) => f3(res))
//   .then((res) => console.log(res))
//   .catch(console.log)
//   .finally(() => {
//     console.log('끝');
//   });


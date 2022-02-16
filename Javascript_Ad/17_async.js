// async
// async function getName() {
//   // return Promise.resolve("tom");
//   throw new Error("err...");
// }

// getName().then((name) => {
//   console.log(name);
// })
// getName().catch((name) => {
//   console.log(name);
// })

// await

function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}

async function showName() {
  const result = await getName('Mike');
  console.log(result);
}

console.log('시작');
showName();
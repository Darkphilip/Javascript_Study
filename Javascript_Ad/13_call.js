// call 모든 함수에서 사용할 수 있으며 this를 특정값으로 지정할 수 있다
const mike = {
  name: 'mike',
};

const tom = {
  name: "Tom",
};

function showThisName() {
  console.log(this.name);
}

function update(birthYear, job) {
  this.birthYear = birthYear;
  this.job = job;
}

update.call(mike, 1999, 'singer');
console.log(mike);
update.call(tom, 2002, 'student');
console.log(tom);

// apply 함수 매개변수를 처리하는 방법을 제외하고 call과 같다
// 매개변수를 배열로 받음
const nums = [3, 10, 1, 6, 4];
// const minNum = Math.min(...nums);
// const minNum = Math.max(...nums);

const minNum = Math.min.apply(null, nums);
// = Math.min.apply(null, [3, 10, 1, 6, 4])
const maxNum = Math.max.call(null, ...nums);
// = Math.min.apply(null, 3, 10, 1, 6, 4)
console.log(minNum);
console.log(maxNum);

// bind 함수의 this 값을 영구히 바꿀 수 있다
const user = {
  name: 'mike',
  showName : function() {
    console.log(`hello, ${this.name}`);
  },
};

user.showName();

let fn = user.showName;

fn.call(user);
fn.apply(user);

let boundFn = fn.bind(tom);
boundFn();
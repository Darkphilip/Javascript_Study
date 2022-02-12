const car = {
  wheels: 4,
  drive() {
    console.log("drive");
  },
};

const bmw = {
  color: 'red',
  navigation: 1,
};

bmw.__proto__= car;

const x5 = {
  color:'white',
  name: 'x5',
};

x5.__proto__ = bmw;

for(p in x5) {
  if (x5.hasOwnProperty(p)) {
    console.log('o', p);
  } else {
    console.log('x', p);
  }
}

const Bmw = function(color) {
  this.color = color;
}

// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function() {
//   console.log('drive');
// };
// Bmw.prototype.stop = function() {
//   console.log('STOP!');
// }

Bmw.prototype = {
  constructor: Bmw,
  wheels: 4,
  drive() {
    console.log('drive');
  },
  navigation : 1,
  stop() {
    console.log('drive');
  },
};

const m3 = new Bmw('green');
const z4 = new Bmw('blue');

console.log(m3.wheels);
console.log(z4.drive());
console.log(z4.constructor === Bmw);
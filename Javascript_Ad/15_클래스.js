class Car {
  constructor(color) { // {}
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log('drive');
  }
  stop() {
    console.log('STOP!');
  }
}

class Bmw extends Car {
  constructor(color) {
    super(color); // 오버라이딩
    this.navigation = 1;
  }
  park() {
    console.log('PARK');
  }
  stop() {
    super.stop(); // 메소드 오버라이딩
    console.log('OFF');
  }
}

const z4 = new Bmw('blue');

console.log(z4);
z4.drive();
z4.stop();
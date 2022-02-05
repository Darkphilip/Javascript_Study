function Item(title, price) {
  // this = {};
  this.title = title;
  this.price = price;
  this.showPrice = function() {
    console.log(`가격은 ${price}원 입니다.`);
  }

  // return this;
}

const item1 = new Item('apple', 3000);
const item2 = new Item('banana', 3000);
const item3 = new Item('kiwi', 3000);

console.log(item1);
console.log(item2);
console.log(item3);

item3.showPrice();


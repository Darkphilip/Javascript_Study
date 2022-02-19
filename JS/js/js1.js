let money = 60000;
let next_money = 0;

if ( money < 50000) {
  next_money = money * 1.15 * 1.15;
} else if (money >= 50000) {
  next_money =  money * 1.2 * 1.2;
}

console.log(next_money);

let first_coffee = 360;
let drink_coffee = 0;

let second_coffee = (first_coffee * (2/3));

drink_coffee = first_coffee + second_coffee + (second_coffee * (2/3));

console.log(drink_coffee);
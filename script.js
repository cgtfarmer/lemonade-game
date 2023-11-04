let money = 100.00;

let lemonCount = 0;
let lemonadeCount = 0;

let lemonPrice = 1.00;
let lemonadePrice = 7.50;

let lemonadeLemonCost = 5;

function main() {
  renderMoney();

  renderLemonCount();
  renderLemonadeCount();

  renderLemonPrice();
  renderLemonadePrice();

  renderLemonadeLemonCost();
}

function buyLemon() {
  money = (money - lemonPrice);
  renderMoney();

  lemonCount = (lemonCount + 1);
  renderLemonCount();
}

function makeLemonade() {
  lemonCount = (lemonCount - lemonadeLemonCost);
  renderLemonCount();

  lemonadeCount = (lemonadeCount + 1);
  renderLemonadeCount();
}

function sellLemonade() {
  lemonadeCount = (lemonadeCount - 1);
  renderLemonadeCount();

  money = (money + lemonadePrice);
  renderMoney();
}

function renderMoney() {
  document.querySelector('#money').innerHTML = money;
}

function renderLemonCount() {
  document.querySelector('#lemon-count').innerHTML = lemonCount;
}

function renderLemonadeCount() {
  document.querySelector('#lemonade-count').innerHTML = lemonadeCount;
}

function renderLemonPrice() {
  document.querySelector('#lemon-price').innerHTML = lemonPrice;
}

function renderLemonadePrice() {
  document.querySelector('#lemonade-price').innerHTML = lemonadePrice;
}

function renderLemonadeLemonCost() {
  document.querySelector('#lemonade-lemon-cost').innerHTML = lemonadeLemonCost;
}

main();


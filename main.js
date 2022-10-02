const $ = (par) => document.querySelector(par);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function sum() {
  let sum = 0;

  numbers.forEach((element) => {
    sum += element;
  });

  $("#result").innerHTML = "Result: " +  sum;
}

function totalelement() {
  $("#result").innerHTML = "Result: " +  numbers.length;
}

function odd() {
  let odd = numbers.filter((n) => n % 2 == 1);
  $("#result").innerHTML =  "Result: " + odd;
}

function even() {
  let even = numbers.filter((n) => n % 2 == 0);
  $("#result").innerHTML = "Result: " + even;
}

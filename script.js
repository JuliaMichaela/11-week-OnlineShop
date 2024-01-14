const priceJacket = document.querySelector('#priceJacket')
console.log (priceJacket.textContent);

const priceSneakers = document.querySelector('#priceSneakers');
const priceJeans = document.querySelector('#priceJeans');
const priceBent = document.querySelector('#priceBent');
console.log (priceSneakers.textContent)
console.log (priceJeans.textContent )
console.log (priceBent.textContent)

const result = +priceJeans + +priceSneakers + +priceJeans + +priceBent;

console.log (result);


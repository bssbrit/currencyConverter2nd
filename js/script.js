/*
ok acho que usar uma função nos eventListener que vai pegar o valor do input selecionado 
e passar numa função q vai simplesmente multiplicar pelo valor de conversão
o desafio é em pegar o valor e pensar em como sempre pegar o valor certo dependendo da moeda
tb temos um botão simples que vai só inverter os valores de lugar, bem simples, 
e q tb vai ja realizar a função de conversão(talvez não na real)
*/

const getCurrency = function (moeda) {
  fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_cu2VzPLWkpEvRvCCPZg58eXTWuwIrCNuEk5ZUHUu`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.data[moeda];
    });
};

//logica de conversão

function convertCurrency(valor1, rate, rate2) {
  let resultado = valor1 / rate;
  return (resultado = resultado * rate2);
}

//passo 1 um input field muda o outro assim que tu clicar nele
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let rateOption1 = document.getElementById("select1");
let rateOption2 = document.getElementById("select2");
/* let rate1 = getCurrency(rateOption1.value);
let rate2 = getCurrency(rateOption2.value); */
let rate1;
let rate2;
fetch(
  `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_cu2VzPLWkpEvRvCCPZg58eXTWuwIrCNuEk5ZUHUu`
)
  .then((response) => response.json())
  .then((data) => {
    rate1 = data.data[rateOption1.value];
  });

fetch(
  `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_cu2VzPLWkpEvRvCCPZg58eXTWuwIrCNuEk5ZUHUu`
)
  .then((response) => response.json())
  .then((data) => {
    rate2 = data.data[rateOption2.value];
    console.log(rate2);
  });

input1.addEventListener("input", function () {
  console.log(rate1);
  input2.value = convertCurrency(input1.value, rate1, rate2).toFixed(2);
});

input2.addEventListener("input", function () {
  console.log(rate2);
  input1.value = convertCurrency(input2.value, rate2, rate1).toFixed(2);
});

let selection = document.getElementById("select1");
selection.addEventListener("click", function () {
  fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_cu2VzPLWkpEvRvCCPZg58eXTWuwIrCNuEk5ZUHUu`
  )
    .then((response) => response.json())
    .then((data) => {
      rate1 = data.data[rateOption1.value];
    });
});

let selection2 = document.getElementById("select2");
selection2.addEventListener("click", function () {
  fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_cu2VzPLWkpEvRvCCPZg58eXTWuwIrCNuEk5ZUHUu`
  )
    .then((response) => response.json())
    .then((data) => {
      rate2 = data.data[rateOption2.value];
      console.log(rate2);
    });
});

const swap = document.getElementById("swapBtn");
swap.addEventListener("click", function () {
  valor1 = input1.value;
  input1.value = input2.value;
  input2.value = valor1;
});

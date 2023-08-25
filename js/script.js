//passo 1 um input field muda o outro assim que tu clicar nele
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let rateOption1 = document.getElementById("select1");
let rateOption2 = "";

input1.addEventListener("click", function () {
  input1.addEventListener("input", function () {
    input2.value = input1.value;
  });
});

input2.addEventListener("click", function () {
  console.log("hi");
  input2.addEventListener("input", function () {
    console.log(input1);

    input1.value = input2.value;
  });
});

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
      console.log(data.data[moeda]);
      return data.data[moeda];
    });
};
getCurrency("USD");

//logica de conversão
/*
  pega o valor 1
  divide pela cotação da sua moeda
  multiplica pela cotação da outra moeda
  retorna 
  valor dois sera igual ao resultado dessa função
  */

function convertCurrency(valor1, rate, rate2) {
  let resultado = valor1 / rate;
  return (resultado = resultado * rate2);
}

import React from "react";

const perguntas = [
  "Quem foi o vencedor do bbb19?",
  "Qual foi o primeiro animal a ir para a lua?",
  "Qual a raiz quadrada de 576?",
  "Quantos elementos há na tabela periódica?"
];

const q1 = [
  ["(A) Paula", "(B) Gleici", "(C) Kaysar", "(D) Hariany"],
  ["(A) Gato", "(B) Cachorro", "(C) Macaco", "(D) Coelho"],
  ["(A) 13", "(B) 23", "(C) 34", "(D) 24"],
  ["(A) 113", "(B) 109", "(C) 118", "(D) 108"]
];

const corretas = ["A", "B", "D", "C"];

function iniciar() {
  var calculo = 0;

  const nome = window.prompt("Digite aqui seu nome: ");
  window.alert("Seja bem vindo(a), " + nome + ". Vamos iniciar o jogo!");
  
  for (let p = 0; p < perguntas.length; p++) {
    var q = perguntas[p] + "\n";
    for (let cont = 0; cont < q1[p].length; cont++) {
      q += q1[p][cont] + "\n";
    }
    var resposta = window.prompt(q);
    if (corretas[p].includes(resposta.toUpperCase())) {
      calculo += 1;
    };
  };
  if(calculo === 4){
    window.alert('Você acertou todas as perguntas!');
  }
  else if(calculo === 1){
    window.alert('Você fez 1 ponto!\n');
  }
  else if(calculo < 4 || calculo > 1){
    window.alert('Você fez '+calculo+' pontos!\n');
  }
  else if(calculo === 0){
    window.alert('Você fez 0 pontos!');
  }

};

export default iniciar;

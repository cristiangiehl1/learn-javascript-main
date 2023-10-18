// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

let firstCard = 6
let secondCard = 9

function gerarNumeroAleatorio(limiteInferior, limiteSuperior) {
	// Use Math.floor() para arredondar o número para um inteiro
	const numeroAleatorio = Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
	
	return numeroAleatorio;
  }
  
  // Exemplo: gerar um número aleatório entre 1 e 100
  const numeroAleatorio = gerarNumeroAleatorio(2, 11);
  console.log(numeroAleatorio);
  


// 2. Create a variable, sum, and set it to the sum of the two cards


let sum = firstCard + secondCard
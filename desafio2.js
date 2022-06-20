// Cálculo Aposentadoria

const nome = 'Silvana';
const sexo = 'F';
const idade = 48;
const contribuicao = 23;

let message = ''
const somaContribuicaoIdade = idade + contribuicao;

const aposentarHomem = sexo === 'M' && contribuicao >= 35 && somaContribuicaoIdade >= 95;
const aposentarMulher = sexo === 'F' && contribuicao >= 30 && somaContribuicaoIdade >= 85;

if(aposentarHomem || aposentarMulher) {
    message = `${nome}, você pode se aposentar!`;
} else {
    message = `${nome}, você ainda não pode se aposentar!`;
}

console.log(message);
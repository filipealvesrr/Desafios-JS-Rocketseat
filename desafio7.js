// Soma de despesas e receitas

function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas);
    const somaDespesas = somaNumeros(despesas);

    const saldo = somaReceitas - somaDespesas;

    return saldo.toFixed(2);
}

function somaNumeros(numeros) {
    let soma = 0;

    for(let numero of numeros) {
        soma += numero;
    }

    return soma;
}

function retornaMensagemDeSaldo(usuario, saldo) {
    let message = '';

    if(saldo >= 0) {
        message = `${usuario} possui saldo POSITIVO de ${saldo}`;
    } else {
        message = `${usuario} possui saldo NEGATIVO de ${saldo}`;
    }

    return message;
}

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
];

for(let usuario of usuarios) {
    console.log(retornaMensagemDeSaldo(usuario.nome, calculaSaldo(usuario.receitas, usuario.despesas)));
}

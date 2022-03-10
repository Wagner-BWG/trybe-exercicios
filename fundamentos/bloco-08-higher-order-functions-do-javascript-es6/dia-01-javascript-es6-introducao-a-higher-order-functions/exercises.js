// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const employee = (fullName) => {
  let email = fullName;
  email = email.toLowerCase();
  email = email.replace(' ', '_');
  const person = {
    'Nome Completo': fullName,
    'email': `${email}@trybe.com`
  }
  return person
}

const newEmployees = (employee) => {
  const employees = {
    id1: employee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(employee));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const winTest = (bet, drawnNumber) => {
  console.log(`O número apostado foi ${bet}`);
  console.log(`O número sorteado foi ${drawnNumber}`);
  if (bet === drawnNumber) {
    return 'Parabéns, você ganhou!';
  } else return 'Que pena, tente novamente.';
};

const prizeDraw = (bet, winTest) => {
  let drawnNumber = Math.round(Math.random() * 5);
  return winTest(bet, drawnNumber)
};

console.log(prizeDraw(4, winTest));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const checker = (answers, test) => {
  let points = 0;
  for (let i = 0; i < answers.length; i += 1) {
    if (answers[i] === test[i]) {
      points += 1;
    }
    else if (test[i] === 'N.A') {
      points = points;
    }
    else {
      points += -0.5;
    }
  }
  return points;
}

const evaluator = (answers, test, checker) => {
  if (answers.length === test.length) {
    return `A pessoa estudante fez ${checker(answers, test)} pontos.`;
  }
  else return 'A pessoa estudante não respondeu todas as perguntas ainda.'
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(evaluator(RIGHT_ANSWERS, STUDENT_ANSWERS, checker));
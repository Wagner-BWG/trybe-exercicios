// 1 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

  const testingArrowScope = escopo => {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }

  }

  testingArrowScope(true);


  // 2 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const crescentOrder = (array) => {
    let crescentArray = array.sort(function(a,b){return a-b});
    return `Os números ${crescentArray} se encontram ordenados de forma crescente!`;
  } 

  console.log(crescentOrder(oddsAndEvens)); // será necessário alterar essa linha 😉
  
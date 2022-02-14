let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log("Exercício 1: percorra o array imprimindo todos os valores nele contidos com a função console.log()");
console.log(" ");
for (let i = 0; i < numbers.length; i = i+1)
{
    console.log(numbers[i]);
}

console.log(" ");
console.log("Exercício 2: some todos os valores contidos no array e imprima o resultado");
console.log(" ");

let sum = 0;
for (let i = 0; i < numbers.length; i = i+1)
{
    sum = sum + numbers[i];
}
console.log(sum);

console.log(" ");
console.log("Exercício 3: calcule e imprima a média aritmética dos valores contidos no array");
console.log(" ");

let arithmeticMean = sum/(numbers.length);
console.log(arithmeticMean);

console.log(" ");
console.log('Exercício 4: caso o valor do exercício anterior seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"');
console.log(" ");

if(arithmeticMean > 20)
    console.log("valor maior que 20");
else console.log("valor menor ou igual a 20");

console.log(" ");
console.log("Exercício 5: Utilizando for , descubra qual o maior valor contido no array e imprima-o");
console.log(" ");

let highestNumber = 0;
for (let i = 0; i < numbers.length; i = i+1)
{
    if (numbers[i] > highestNumber)
        highestNumber = numbers[i];
}

console.log(highestNumber);

console.log(" ");
console.log("Exercício 6: Descubra quantos valores ímpares existem no array e imprima o resultado.");
console.log(" ");

let oddNumbers = 0;
for (let i = 0; i < numbers.length; i = i+1)
{
    if ((numbers[i]%2 != 0))
        oddNumbers = oddNumbers + 1;
}

if (oddNumbers !=0)
    console.log(oddNumbers + " números ímpares.");
else console.log("nenhum valor ímpar encontrado");

console.log(" ");
console.log("Exercício 7: Utilizando for , descubra qual o menor valor contido no array e imprima-o.");
console.log(" ");

let lowestNumber = numbers[0];
for (let i = 0; i < numbers.length; i = i+1)
{
    if (numbers[i] < lowestNumber)
        lowestNumber = numbers[i];
}

console.log(lowestNumber);

console.log(" ");
console.log("Exercício 8: Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado");
console.log(" ");

let newArray = [];

for(let i = 1; i <= 25; i = i+1)
{
    newArray.push(i);
}

console.log(newArray);

console.log(" ");
console.log("Exercício 9: Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2");
console.log(" ");

for(let i = 0; i < newArray.length; i = i+1)
{
    console.log(newArray[i]/2);
}
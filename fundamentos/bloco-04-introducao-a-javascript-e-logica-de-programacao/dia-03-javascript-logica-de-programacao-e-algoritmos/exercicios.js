console.log("Exercicio 1");
console.log(" ");

let numeroAFatorar = 10;
let expressao = [];

for (let i = 0; i < numeroAFatorar; i += 1)
{
    expressao.push(numeroAFatorar - i);
}

for (let i = 1; i < expressao.length; i += 1)
{
    numeroAFatorar = numeroAFatorar * expressao[i];
    console.log(numeroAFatorar);
}
console.log(expressao);
console.log(numeroAFatorar);

// REVISAR! Tentar fazer em apenas 1 "for loop".

console.log(" ");
console.log("Exercicio 2");
console.log(" ");

let word = 'tryber';
let letters = word.split("");
let reversedLetters = [];
let reversedWord;

for (i = 0; i < letters.length; i += 1)
{
    reversedLetters.unshift(letters[i]);
}

reversedWord = reversedLetters.join("");
console.log(typeof reversedWord);
console.log(reversedWord);

console.log(" ");
console.log("Exercicio 3");
console.log(" ");

let array = ['java', 'javascript', 'python', 'html', 'css'];

let numberOfLetters = [];
let biggestWord = "";
let smallestWord = "";

for(let i = 0; i < array.length; i += 1)
{
    let word = array[i];
    numberOfLetters.push(word.length);
}

for(let i = 0; i < numberOfLetters.length; i+= 1)
{
    if(numberOfLetters[i] > biggestWord.length)
        biggestWord = array[i];
    
    if(smallestWord === "")
        smallestWord = array[i];
    if(numberOfLetters[i] < smallestWord.length)
        smallestWord = array[i];
}

console.log("A maior palavra é " + biggestWord);
console.log("A menor palavra é " + smallestWord);

console.log(" ");
console.log("Exercicio 4");
console.log(" ");

let numeroPrimo;

for(let i = 2; i <= 50; i += 1 )
{
    let divisores = 0;

    for(let i2 = 1; i2 <= i; i2 += 1)
    {
        if(i%i2 === 0)
            divisores += 1;
    }

    if(divisores === 2)
        numeroPrimo = i;
}

console.log(numeroPrimo);
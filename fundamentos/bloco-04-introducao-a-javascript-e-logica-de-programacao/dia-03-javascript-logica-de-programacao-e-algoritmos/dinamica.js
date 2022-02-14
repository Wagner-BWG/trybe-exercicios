console.log("Exercicio 1")
console.log(" ")

let soma = 0;

for (let i = 0; i <= 50; i += 1)
{
    soma = soma + i;
}

console.log(`A soma total de 1 a 50 é ${soma}`);

console.log(" ")
console.log("Exercicio 2")
console.log(" ")

let contador = 0;

for (let i = 2; i <= 150; i += 1)
{
    if(i % 3 === 0)
        contador = contador + 1;
}

if (contador === 50)
    console.log(`MENSAGEM secreta`);
else
    console.log(`Exitem ${contador} números que são divisiveis por 3.`);

console.log(" ")
console.log("Exercicio 3")
console.log(" ")
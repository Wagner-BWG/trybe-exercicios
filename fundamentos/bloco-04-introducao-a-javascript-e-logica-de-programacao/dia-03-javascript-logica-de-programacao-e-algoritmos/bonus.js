console.log("Exercicio Bônus 1");
console.log(" ");

let n = 15;
let asterisk = "*";
let line;

if (n > 1) {
    line = asterisk.repeat(n)
    for (let i = 1; i <= n; i += 1) {
        console.log(line);
    }
}

console.log(" ");
console.log("Exercicio Bônus 2");
console.log(" ");

line = "";

if (n > 1) {
    for (let i = 1; i <= n; i += 1) {
        line = asterisk.repeat(i);
        console.log(line);
    }
}

console.log(" ");
console.log("Exercicio Bônus 3");
console.log(" ");

line = "";
let space = " ";

if (n > 1) {
    for (let i = 1; i <= n; i += 1) {
        line = space.repeat(n - i) + asterisk.repeat(i);
        console.log(line);
    }
}

console.log(" ");
console.log("Exercicio Bônus 4");
console.log(" ");

line = "";

if (n > 1) {
    for (let i = 1; i <= n; i += 1) {
        if (i % 2 != 0) {
            line = space.repeat((n - i) / 2) + asterisk.repeat(i);
            console.log(line);
        }
    }
}

console.log(" ");
console.log("Exercicio Bônus 5");
console.log(" ");

line = "";

if (n > 1 && (n % 2 != 0)) {
    for (let i = 1; i < n; i += 1) {
        if (i === 1) {
            line = space.repeat((n - i) / 2) + asterisk;
            console.log(line);
        }

        else if (i % 2 != 0) {
            line = space.repeat((n - i) / 2) + asterisk + space.repeat(i - 2) + asterisk;
            console.log(line);
        }
    }
    console.log(asterisk.repeat(n));
}
else
    console.log("Número inválido. Use um número impar maior que 1.");

console.log(" ");
console.log("Exercicio Bônus 6");
console.log(" ");

let numero = 17493;
let numeroPrimo;
let divisores = 0;

for (let i = 1; i <= numero; i += 1) {
    if (numero % i === 0)
        divisores += 1;
}

if (divisores === 2)
    numeroPrimo = true;

if (numeroPrimo)
    console.log("O número " + numero + " é primo.");
else
    console.log("O número " + numero + " não é primo.");
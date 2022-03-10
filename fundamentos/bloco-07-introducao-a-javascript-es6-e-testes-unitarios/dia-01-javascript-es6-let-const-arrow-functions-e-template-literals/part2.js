// 1- Crie uma função que receba um número e retorne seu fatorial.

const fatorial = number => number > 1 ? number * fatorial(number-1) : number;

console.log(fatorial(4));

// 2- Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = phrase => {
    words = phrase.split(' ');
    let word = '';
    for (i = 0; i < words.length; i += 1) {
        words[i].length > word.length ? word = words[i] : word;
    }
    return word
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
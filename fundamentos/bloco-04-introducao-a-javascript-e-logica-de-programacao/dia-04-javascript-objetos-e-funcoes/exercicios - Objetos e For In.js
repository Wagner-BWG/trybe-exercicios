let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Exercício 1:");
console.log("");

console.log("Bem vinda, " + info.personagem);

console.log("");
console.log("Exercício 2:");
console.log("");

info.recorrente = 'Sim';

console.log(info);

console.log("");
console.log("Exercício 3:");
console.log("");

for (let dado in info){
    console.log(dado);
}

console.log("");
console.log("Exercício 4:");
console.log("");

for (let dado in info){
    console.log(info[dado]);
}

console.log("");
console.log("Exercício 5:");
console.log("");

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: "Sim",
};

for (let dado in info){
    
    if (dado != 'recorrente'){
        console.log(info[dado] + " e " + info2[dado]);
    }
    if (dado === 'recorrente'){
        if (info['recorrente'] === info2['recorrente'])
            console.log("Ambos recorrentes");
        else
            console.log(info[dado] + " e " + info2[dado]);
    }

}

console.log("-----------------------------------------------------------");

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log("Exercício 6:");
console.log("");

console.log("O livro favorito de Julia Pessoa se chama '" + leitor.livrosFavoritos[0].titulo + "'.");

console.log("");
console.log("Exercício 7:");
console.log("");

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });

console.log(leitor.livrosFavoritos);

console.log("");
console.log("Exercício 8:");
console.log("");

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.");

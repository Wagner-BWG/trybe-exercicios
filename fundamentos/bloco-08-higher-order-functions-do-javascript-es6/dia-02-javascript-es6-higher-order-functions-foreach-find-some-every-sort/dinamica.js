 estudantes = [
    {
        nome: 'Joel',
        projeto: 'Trybewarts',
        status: 98,
    },
    {
        nome: 'Mica',
        projeto: 'Unit test',
        status: 100,
    },
    {
        nome: 'Hugonardo',
        projeto: 'Trybewarts',
        status: 97,
    },
    {
        nome: 'Aninha',
        projeto: 'Trybewarts',
        status: 100,
    },
    {
        nome: 'Joicy',
        projeto: 'To do list',
        status: 100,
    },
    {
        nome: 'Ronald',
        projeto: 'Trybewarts',
        status: 75,
    },
];

const verifyStatus = (tribo) => {
    tribo.forEach((aluno) => {
        if (aluno.status === 100) {
            console.log(
                `Olá ${aluno.nome}, parabéns por ter finalizado 100% do ${aluno.projeto}!`
            );
        };
        
    });
}

verifyStatus(estudantes);

const lateAchievers = (tribo) => {
    tribo.forEach((aluno, numero) => {
        if (aluno.status < 80) {
            tribo[numero].status = 80;
        };
    });
}

lateAchievers(estudantes);
console.log(estudantes);

const studants = ['João', 'Ju', 'Caio', 'Ana'];
const averages = [10, 8, 7.5, 9];

const list = [studants, averages];


function showNameAndNote(studant) {
    if (list[0].includes(studant)) {
        const [studants, averages] = list;
        const index = studants.indexOf(studant);
        const studantAverage = averages[index];     
        console.log(`A média do aluno ${studant} é: ${studantAverage}`);
    } else {
        console.log(`${studant} não está na lista de alunos`);
        
    }
}
showNameAndNote('Ana');

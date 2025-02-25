const notes = [10, 6.5, 8, 7.5];

let sumNotes = 0;

for (let note of notes) {
    sumNotes += note;
}


const average = sumNotes / notes.length;

console.log(`A média das notas é: ${average}`);

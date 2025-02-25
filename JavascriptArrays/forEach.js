
const notes = [10, 6.5, 8, 7.5];
let sumNotes = 0;

notes.forEach (function (note) {
    sumNotes += note;
});

const avg = sumNotes/notes.length;

console.log(avg);




const notes = [10, 6.5, 8, 7.5];
let agregadeNote = 0;

for (let i = 0; i < notes.length; i++) {
    agregadeNote += notes[i];
}

const average = agregadeNote/notes.length;

console.log(`A média foi: ${average}`);

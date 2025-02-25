const notes = [10, 9.5, 8, 6];

/*const updatedNotes = notes.map(function(nota) {
   return nota + 1;
})*/

const updatedNotes = notes.map( nota => nota + 1 >= 10 ? 10 : nota + 1);

console.log(updatedNotes);

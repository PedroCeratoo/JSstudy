const roomJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const roomJava = [6, 5, 8, 9, 6];
const roomPython = [7, 3.5, 8, 9.5];


function calcAverage(noteList) { 
    const sumNotes = noteList.reduce((acumulator, note) => acumulator + note, 0);
    const average = sumNotes / noteList.length;
    return average;
}

console.log(calcAverage(roomJs));
console.log(calcAverage(roomJava));
console.log(calcAverage(roomPython));




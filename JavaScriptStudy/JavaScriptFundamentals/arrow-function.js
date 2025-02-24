

const reprovedStudant = (finalNote, absences) => {
    if (finalNote < 7 && absences > 4) {
        return true;
    } else {
        return false;
    }
}

const showName = (name) => name

console.log(reprovedStudant(6, 5));
console.log(reprovedStudant(10, 1));

console.log(showName('Pedro'));


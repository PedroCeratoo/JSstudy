const reprovedStudant = function(finalNote, absences){
    if (finalNote < 7 && absences > 4) {
        return true;
    } else {
        return false;
    }
}


console.log(reprovedStudant(6, 5));
console.log(reprovedStudant(10, 1));

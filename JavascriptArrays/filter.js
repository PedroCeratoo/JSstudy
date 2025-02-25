
const studants = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const average = [7, 4.5, 8, 7.5];

const reproved = studants.filter((_, index) => {
    return average[index] < 7;
})

console.log(reproved);

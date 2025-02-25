const studentsList = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo'
    , 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];


const room1 = studentsList.slice(0, studentsList.length/2);

const room2 = studentsList.slice(studentsList.length/2);

console.log(room1);
console.log(room2);

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});



const numStudent = () => {
  let total = 0;
  for (i = 0; i < Object.values(allLessons).length; i += 1) {
    let object =  Object.values(allLessons);
    let numStudent = object[i]['numeroEstudantes'];
      total += numStudent;
  }
  return total

}
console.log(numStudent());

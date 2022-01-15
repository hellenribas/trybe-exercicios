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



const numStudent = (obj, value) => {
  let total = 0;
  for (i = 0; i < Object.values(obj).length; i += 1) {
    let object =  Object.values(obj);
    let valueRequired = object[i][value];
      total += valueRequired;
  }
  return total

}
// console.log(numStudent(allLessons, 'numeroEstudantes'));

  const keyPosition = (obj, position) => Object.values(obj)[position];

  console.log(keyPosition(lesson1, 0));

  const verifyExist = (obj, key, value) => {
    let object;
    for (i = 0; i < Object.entries(obj).length; i += 1) {
      object = Object.entries(obj)[i].includes(key, value);
    }
    return object;    
}
  console.log(verifyExist(lesson3, 'verificação', 'noite'));

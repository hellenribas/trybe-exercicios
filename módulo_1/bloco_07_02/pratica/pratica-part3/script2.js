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

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3})
console.log(allLessons);

const modify = (obj, key, value) => obj[key] = value;
console.log(modify(lesson2, 'turno', 'noite'), lesson2);

const listKey = obj => Object.keys(obj);
console.log(listKey(lesson1));

const sizeObjc = obj => Object.keys(obj).length;
console.log(sizeObjc(lesson3));

const valueObj = obj => Object.values(obj);
console.log(valueObj(lesson1));



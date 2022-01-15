// const sum = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     return 'Os valores devem ser numéricos';
//   }
//   return value1 + value2;
// };

// console.log(sum(2, '3'));
// const sum = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new Error('Os valores devem ser numéricos');
//   }
//   return value1 + value2;
// };

// console.log(sum(2, '3'));
// const verifyIsNumber = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new Error('Os valores devem ser numéricos');
//   }
// };

// const sum = (value1, value2) => {
//   try {
//     verifyIsNumber(value1, value2);
//     return value1 + value2;
//   } catch (error) {
//     throw error.message;
//   }
// };

// console.log(sum(2, 3));
// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };
// console.log(customer);
// // customer['lastName'] = 'Silva';
// // customer.lastName = 'Silva';
// let newKey = 'lastName';
// const lastName = 'Silva';
// customer[newKey] = lastName;
// console.log(customer);

// console.log(Object.keys(customer));
// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };
// const habStudent = (student) => {
//   const arrayChave = Object.keys(student);
//   for (index in arrayChave) {
//     console.log(`${arrayChave[index]}, Nível: ${student[arrayChave[index]]}`);
//   }
// }
// console.log(habStudent(student2));

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// const coolestTv = (tvShow) => {
//   const arrayKey = Object.keys(tvShow);
//   const arrayValue = Object.values(tvShow);
//   for (index in arrayValue) {
//     console.log(`Informações: ${arrayKey[index]}: ${arrayValue[index]}`);
//   } 
// }
// console.log(coolestTv(coolestTvShow));
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);
for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};
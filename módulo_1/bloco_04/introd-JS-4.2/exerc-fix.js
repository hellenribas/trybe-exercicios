// // // para adicionar um item ao final de um array 
// let tasksList1 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

//  tasksList1.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
//  console.log(tasksList1);

// // ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// //Para adicionar um item no inicio de um array 
//  let tasksList2 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

//  tasksList2.unshift('Fazer exercícios da Trybe');  // adiciona mais uma tarefa

//  console.log(tasksList2);

// // //Verificar o tamanho de um array

//  let tasksList3 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

//  console.log(tasksList3.length);
// // // 3

// // O método .pop() nos permite remover o último item do array. Agora, se precisarmos remover o primeiro item da lista, podemos usar o .shift()
// let tasksList4 = ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer Exercícios Trybe'];

// tasksList4.pop();  // remove a última tarefa
// console.log(tasksList4);

// // [ 'Tomar café', 'Reunião', 'Brincar com o cachorro'] 

// tasksList4.shift(); // remove a primeira tarefa
// console.log(tasksList4);
// // [ 'Reunião', 'Brincar com o cachorro' ]

// //Consultar um índice dentro de um array 
// let tasksList5 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let indexOfTask = tasksList5.indexOf('Reunião');
// console.log(indexOfTask);

// // 1

//EXERCICIO ARRAY

//primeiro exercício

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//segundo exercicio
let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf('Portfólio');

console.log(indexOfPortfolio);

//terceiro exercicio
let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push('Contato');
console.log(menu3);

//EXERCICIO DE FOR
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (var index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

//EXERCICIO DE FOR/OF
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {
    console.log(name);
}


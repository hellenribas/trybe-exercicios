const check = (numAp, num) => numAp === num ? 'Parabéns, você ganhou!' : 'Tente Novamente';
const resultSort = (numAp, check) => {
 let num =  parseInt(Math.random() * 5);
 console.log(num);
 return check(numAp, num);
}

console.log(resultSort(1, check));


function modificandoParagrafo () {
let texto = document.getElementsByTagName('p');
texto[0].innerText = 'Daqui dois anos quero estar estabilizada e feliz com a minha vida e carreira.';
return texto;
}
modificandoParagrafo();

function modificarCorLateral () {
let cor = document.getElementsByClassName('main-content');
let mudanca = cor[0].style.backgroundColor = "rgb(76,164,109)";
return mudanca;
}
modificarCorLateral();

function modificaCorCentral () {
let corCenter = document.getElementsByClassName('center-content');
let corCentral = corCenter[0].style.backgroundColor = "white";
return corCentral;
}
modificaCorCentral(); 

function correcaoTitulo () {
let title = document.getElementsByTagName('h1');
title[0].innerText = 'Exercício 5.1 - JavaScript';

for (i = 0; i < texto.length; i += 1) {
    texto[i].style.textTransform = 'capitalize' //transforma o texto em maiuscula
}
}
correcaoTitulo();

function exibirTagP () {
    let tagP = document.getElementsByTagName('p')
    let exibir = console.log(tagP);
    return exibir;
}
exibirTagP();



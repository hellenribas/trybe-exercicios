// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function checkletter(event){
    if (event.charCode !== 'a') {
        event.preventDefault();
        INPUT_TEXT.value = 'a'
    } 
}

HREF_LINK.addEventListener('click', function (event){
    event.preventDefault();
})
INPUT_CHECKBOX.addEventListener('click', function (event) {
    event.preventDefault();
})
INPUT_TEXT.addEventListener('keypress', checkletter, false);

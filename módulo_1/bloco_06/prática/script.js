const states = document.getElementById('state');
const date = document.getElementById('myInputId').DatePickerX.init();
const buttonSub = document.getElementById('button');
let arrayDate = [];
const arrayState = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];
function statesCreate () {
   for (let i = 0; i < arrayState.length; i += 1) {
       let options  = document.createElement('option');
       options.value = arrayState[i];
       options.innerText = arrayState[i];
       states.appendChild(options);
   }
} 
function stopButton (event) {
    event.preventDefault();
}
function dates () {
    date.format(ddmmyyyy);
}
function valid () {
    const validation = new JustValidate('#form');

    validation
      .addField('#name', [
        {
          rule: 'minLength',
          value: 3,
        },
        {
          rule: 'maxLength',
          value: 30,
        },
      ])
      .addField('#email', [
        {
          rule: 'required',
          errorMessage: 'Email is required',
        },
        {
          rule: 'email',
          errorMessage: 'Email is invalid!',
        },
      ]);
}
statesCreate();
dates();
buttonSub.addEventListener('click', stopButton);
buttonSub.addEventListener('click', valid());



function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function criarDias() {
  let tagUl = document.getElementById('days');
  let dezDaysLis = [29, 30];
  for (let index = 1; index <= 31; index += 1) {
    dezDaysLis.push(index);
  }
  // let NumberString = dezDaysLis.join(` `);
  // console.log(NumberString);
  for (let index = 0; index < dezDaysLis.length; index += 1) {
    let elem = dezDaysLis[index];
    let tagLi = document.createElement('li');
    tagLi.innerText = elem;
    tagLi.className = 'day';
    tagUl.appendChild(tagLi);
  }
  tagUl.lastChild.className = 'day holiday';
  tagUl.children[25].className = 'day holiday';
  tagUl.children[26].className = 'day holiday';
  console.log(dezDaysLis.length);
   
  for (let index = 5; index <= 26; index += 7) {
    tagUl.children[index].className = 'day friday';
  }

}
console.log(criarDias());

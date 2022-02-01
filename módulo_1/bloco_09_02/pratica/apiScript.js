// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const joker = document.getElementById('jokeContainer')
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  try {
  const response = await fetch(API_URL, myObject)
    const data =  await response.json();
     joker.innerHTML = data.joke
  } catch {
    alert('Erro 404');
  }
};

window.onload = () => fetchJoke();
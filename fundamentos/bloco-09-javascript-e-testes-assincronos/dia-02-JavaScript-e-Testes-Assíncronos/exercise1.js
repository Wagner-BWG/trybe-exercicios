
function appendJoke(jokeData) {
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.innerText = jokeData.joke;
}

// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const request = {
      method: 'GET',
      headers: { 'Accept': 'application/json'}
  };

  fetch(API_URL, request)
    .then(response => response.json())
    .then(data => appendJoke(data));
};

window.onload = () => fetchJoke();
const btn = document.querySelector(".card__button");
let number = document.querySelector(".card__title__number");
let quote = document.querySelector(".card__advice__quote");
const url = "https://api.adviceslip.com/advice";
const defaultURL = "https://api.adviceslip.com/advice/71";

function newQuote() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            number.innerHTML = data.slip.id;
            quote.innerHTML = data.slip.advice;
        })
        .catch(error => console.log(error));
}

function defaultQuote() {
    fetch(defaultURL)
        .then(response => response.json())
        .then(data => {
            number.innerHTML = data.slip.id;
            quote.innerHTML = data.slip.advice;
        })
        .catch(error => console.log(error));
}

window.onload = defaultQuote;
btn.addEventListener("click", newQuote);
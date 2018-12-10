let root = document.querySelector('.root');
let btnStart = document.querySelector(".start");
let section = document.querySelector(".game");
let track = document.querySelector('track');
let card = document.querySelector('.card');
let front = document.querySelector('.front');
let back = document.querySelector('.back');
let click = false;




let hiddenBtn = () => {
    btnStart.classList.add('hiddenStart');
    section.classList.add('showgame');
    let track = document.querySelector('.track').play();
    cardsRandom(cards);
    setInterval(countDown, 1000);


};
btnStart.addEventListener('click', hiddenBtn);


let cards = [... document.querySelectorAll('.card')];
console.log(cards);


let addClass = (event) => {
    event.target.parentElement.classList.add('flip')
    let track2 = document.querySelector('.flipSound').play();
    document.querySelector('.flipSound').currentTime = 0;
    hasClick(event);
};

for (let el of cards) {
    el.addEventListener('click', addClass)
};



let firstClick;
let secondClick;

let hasClick = (event) => {
    if (!click) {
        firstCard = event.target.parentElement;
        console.log(firstCard)
        click = true;
    } else {
        secondCard = event.target.parentElement;
        console.log(secondCard);
        click = false;
        compCards();
    }
};


let compCards = () => {
    if (firstCard.dataset.name === secondCard.dataset.name) {
        setTimeout(function () {
            firstCard.classList.add('opacity');
            secondCard.classList.add('opacity');
            finalAlert(cards)? alert("ВИ ВИГРАЛИ"): null;
        }, 500);

        let track3 = document.querySelector('.correct').play();
    } else {
        setTimeout(function () {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip')
        },500)
    }
};


let cardsRandom = () =>{
    cards.forEach( el => el.style.order = Math.floor(Math.random()*cards.length));
};

let finalAlert = (arr) => {
    return arr.every(el => el.classList.contains('opacity'))
};





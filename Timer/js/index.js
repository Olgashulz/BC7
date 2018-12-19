///// icons

let items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let root = document.querySelector('#root');
let box = document.createElement('div');
let boxImage =document.createElement('img');


function showIcon() {
    let id = items[Math.floor(Math.random()*items.length)];
    console.log(id);

    boxImage.setAttribute('src', `img/icon${id}.png`);
/*    boxImage.setAttribute('src', `img/icon21.png`);*/
    boxImage.setAttribute('alt', 'image');

    box.classList.add('box');
    boxImage.classList.add('boxImage');

    root.prepend(box);
    box.prepend(boxImage);

}

///////////// Listener
let id;
let isActive = false;
let start = document.querySelector('.start');

function interval() {
    isActive = true;
    id = setInterval(showIcon, 170);
}

function timerListener() {
    if (!isActive) {
        interval();

    } else {
        pauseInterval();

    }
}

function pauseInterval() {
    clearInterval(id);
    isActive = false;
}
start.addEventListener('click', timerListener );

//// counter
let deadline = new Date(2018, 11, 21, 19, 0, 0,);
console.log(deadline);


function countDown() {
    let today = Date.now();
    console.log(today);

    let timer = deadline - today;
    console.log(Math.floor(timer/1000));
    let seconds = (Math.floor(timer/1000 % 60));
    console.log(seconds);
    let  minutes = (Math.floor(timer/1000 / 60 % 60));
    console.log(minutes);
    let hours = (Math.floor(timer/1000 / 60 / 24 % 24));
    console.log(hours);
    let days = (Math.floor(timer/1000 / 60 / 60/ 24));
    console.log(days);

    let secondsText = document.querySelector('.seconds');
    let minutesText = document.querySelector('.minutes');
    let hoursText = document.querySelector('.hours');
    let deysText = document.querySelector('.days');

    seconds < 10 ? secondsText.textContent = `0${seconds}`: secondsText.textContent  = seconds;
    minutes < 10 ? minutesText.textContent = `0${minutes}`: minutesText.textContent  = minutes;
    hours < 10 ? hoursText.textContent = `0${hours}`: hoursText.textContent  = hours;
    days < 10 ? deysText.textContent = `0${days}`: deysText.textContent  = days;
}

setInterval(countDown, 1000);

let countdown = document.createElement('div');

let box_days = document.createElement('div');
let days = document.createElement('p');
let timeRefDays = document.createElement('p');

///music
let musicActive = false;

function musicListener() {
    if (!musicActive) {
        document.getElementById('myTune').play();
        start.textContent = `Stop`;
        musicActive = true;

    } else {
        document.getElementById('myTune').pause();
        musicActive = false;
        start.textContent = `Start`;
    }
}
start.addEventListener('click', musicListener );
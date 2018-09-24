/*
  Создайте скрипт секундомера.
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/

  Изначально в HTML есть разметка:

  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>

  Добавьте следующий функционал:

  - При нажатии на кнопку button.js-start, запускается таймер, который считает время
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).

    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.

  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause',
    а функционал при клике превращается в оставновку секундомера без сброса
    значений времени.

    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.

  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени,
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени
    с 6 секунд, а не с 16.

    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.

  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.

  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

const addBtn = document.querySelector('button[data-action="add"]');
const removeBtn = document.querySelector('button[data-action="remove"]');
const btn = document.querySelector("#btn");
let ul = document.querySelector('ul');

let id;
let isActive = false;
let consolTime;
const timer = {
    startTime: null,
    deltaTime: null,
    id: null

};

function startTimer() {
    isActive = true;
    if (timer.startTime === null) {
        timer.startTime = Date.now();
    } else {
        timer.startTime = Date.now() - timer.deltaTime;
    }
    //return timer.startTime;
//startTimer();
//console.log(startTime);

    id = setInterval(delta, 100);

    function delta() {
        let currentTime = Date.now();
        //console.log(currentTime);
        timer.deltaTime = currentTime - timer.startTime;
        //console.log(timer.deltaTime);
        let consolTime = document.querySelector('.js-time').textContent = getFormatTime(timer.deltaTime);
    }
};

function getFormatTime(time) {
    let milliseconds = Math.floor(time / 100 % 10);
    let seconds = Math.floor(time / 1000 % 60);
    let minutes = Math.floor(time / 1000 / 60 % 60);
    consolTime = document.querySelector('.js-time');
    return consolTime.textContent = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}:${milliseconds}`;

}


function timerListener() {
    if (!isActive) {
        startTimer();
        document.querySelector('.js-start').textContent = `Pause`
    } else {
        pauseTimer();

    }
}

function pauseTimer() {
    clearInterval(id);
    isActive = false;
    document.querySelector('.js-start').textContent='Continue';



}


function reset() {
    pauseTimer();
    timer.startTime = 0;
    timer.deltaTime = 0;
    //console.log(timer)
    document.querySelector('.js-start').textContent = 'Start';
    consolTime = document.querySelector('.js-time');
    consolTime.textContent = `00:00:0`;
    ul.innerHTML= "";

}

//- Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера
//в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x

function save() {
    let ul = document.querySelector('ul');
    const lap = document.createElement('li');
    lap.textContent = consolTime.textContent;
    ul.append(lap);
      }





const startBtn = document.querySelector(".js-start").addEventListener('click', timerListener);
const resetBtn = document.querySelector(".js-reset").addEventListener('click', reset);
const lapBtn = document.querySelector(".js-take-lap").addEventListener('click', save);


//console.log(getFormatTime(34534785348));

//const startBtn = document.querySelector(".js-start").addEventListener('click', startTimer);
/*const lapBtn = document.querySelector(".js-take-lap").addEventListener('click', save);



/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

  Выполните домашнее задание используя класс с полями и методами.

  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет
  динамически создана вся разметка для секундомера.

  Должна быть возможность создать сколько угодно экземпляров секундоментов
  на странице и все они будут работать независимо.

  К примеру:

  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);

  Где parent* это существующий DOM-узел.
*/
/*
  Напишите скрипт, для авторизации администратора в панели управления.

  При загрузке страницы у посетителя запрашивается логин через prompt:

    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin,
       показывать alert с текстом 'Доступ запрещен!'
    - Если был введен логин совпадающий со значением константы adminLogin, спрашивать пароль через prompt.

  При вводе пароля:

      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен!'
      - Если введён пароль который совпадает со значением константы adminPassword,
        показывать alert с текстом 'Добро пожаловать!'

  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/
//
//
// const adminLogin = 'admin';
// const adminPassword = 'm4ngo1zh4ackz0r';
//
// let inputLogin = prompt('Enter your login please');
// console.log(inputLogin);
// if (inputLogin===null){
//     alert('Отменено пользователем!');
// } else if (inputLogin !==adminLogin){
//     alert('Доступ запрещен!');
// } else {
//     const inputPassword = prompt('Enter your password  please');
//     console.log(inputPassword);
//     if (inputPassword===null){
//         alert('Отменено пользователем!');
//     } else if (inputPassword !== adminPassword){
//         alert('Доступ запрещен!')
//     } else {
//         alert('Добро пожаловать!')
//     }}


const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const cancel = 'Отменено пользователем!';
const invalidInput = 'Доступ запрещен!';
const rightInput = 'Добро пожаловать!';

let inputLogin = prompt('Enter your login please');
console.log(inputLogin);
if (inputLogin === null) {
    alert(cancel);
} else if (inputLogin !== adminLogin) {
    alert(invalidInput);
} else {
    const inputPassword = prompt('Enter your password please');
    console.log(inputPassword);
    if (inputPassword === null) {
        alert('cancel');
    } else if (inputPassword !== adminPassword) {
        alert(invalidInput)
    } else {
        alert(rightInput)
    }
}



// Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
//   Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах):
//     * sharm - 15
//     * hurgada - 25
//     * taba - 6.
//   Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
//   результат сохранить в переменную.
//   Необходимо проверить являются ли введенные данные целым положительным числом.
//     - В случае неверного ввода от пользователя, скрипт показывает alert с текстом
//       "Ошибка ввода" и больше ничего не делает.
//     - В случае верного ввода, последовательно проверить кол-во мест в группах,
//       и кол-во необходимых мест введенных пользователем.
//   Если была найдена группа в которой количество мест больше либо равно необходимому,
//   вывести сообщение через confirm, что есть место в группе такой-то, согласен ли
//   пользоваетель быть в этой группе?
//     * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
//     * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
//   Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
// */


const freePlasesSharm = 15;
const freePlasesHurgada = 25;
const freePlasesTaba = 6;

const userInputPlaces = prompt("Какое количество мест Вам необходимо?");
console.log(userInputPlaces);
userInputPlaces !== null && !Number.isNaN(+userInputPlaces) && userInputPlaces >= 0 && Number.isInteger(Number(+userInputPlaces));
if (userInputPlaces <= freePlasesSharm && userInputPlaces > freePlasesTaba) {
    const userAnswear = confirm('Есть свободные места в группе Шарм-эль-шейх. Хотите забронировать места?');
    if (userAnswear === true) {
        alert('Приятного путешествия в группе Шарм-эль-шейх!');
    } else {
        alert('Нам очень жаль, приходите еще!')
    }
}

else if (userInputPlaces > freePlasesSharm && userInputPlaces <= freePlasesHurgada) {
    const userAnswear = confirm('Есть свободные в группе Хургада. Хотите забронировать места?');
    if (userAnswear === true) {
        alert('Приятного путешествия в группе Хургада!');
    } else {
        alert('Нам очень жаль, приходите еще!');
    }
}
else if ( userInputPlaces <= freePlasesTaba) {
    const userAnswear = confirm('Есть свободные в группе Таба. Хотите забронировать места?');
    if (userAnswear === true) {
        alert('Приятного путешествия в группе Таба!');
    } else {
        alert('Нам очень жаль, приходите еще!');
    }
}
else if(userInputPlaces > freePlasesHurgada){
    alert ('Извините, столько мест нет ни в одной группе!')
} else {
    alert('Ошибка ввода!')
}


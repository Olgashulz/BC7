/*

  Написать приложение для работы с REST сервисом,
  все функции делают запрос и возвращают Promise
  с которым потом можно работать.

  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.

  - функция getUserById(id) - должна вернуть пользователя с переданным id.

  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.

  - функция removeUser(id) - должна удалять из БД юзера по указанному id.

  - функция updateUser(id, user) - должна обновлять данные пользователя по id.
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками.
  А так же панелью для вывода результатов операций с бэкендом.


*/

"use strict";

const getAllUsers = () => {
    fetch('https://test-users-api.herokuapp.com/users/')
        .then(response => response.ok ? response.json() : null)
        .then(data => createList(data.data))
        //.then(data => console.log(data))
        .catch(err => console.log(err))
};

let root = document.querySelector('#root');
let form = document.querySelector('.get_userById')

const createList = (arr) => {

    let table = document.createElement('table');
    table.classList.add('table');
    let th = document.createElement('th');
    th.textContent = "All Users";
    th.classList.add('tableName')

    arr.map(el => {
        let tr = document.createElement('tr');
        let id = document.createElement('td');
        let name = document.createElement('td');
        let age = document.createElement('td');

        id.textContent = el.id;
        name.textContent = el.name;
        age.textContent = el.age;

        table.append(tr);
        tr.append(id);
        tr.append(name);
        tr.append(age);
        root.append(table);

    })
};


getAllUsers();


let getUserById = () => {
    event.preventDefault();
    let id = document.querySelector('.userById').value;


    fetch(`https://test-users-api.herokuapp.com/users/${id}`)
        .then(response => response.ok ? response.json() : null)
        .then(data => {
            // console.log(data);
            byIdCreate(data.data);
        })
        .catch(err => console.log(err))
};

document.querySelector('.button').addEventListener('click', getUserById);

let byIdCreate =(arr) =>{
    let input = document.querySelector('.get_userById');
    let ul = document.createElement('ul');
    ul.classList.add('ulId');

    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    li1.textContent = `User id: ${arr.id}`;
    li2.textContent = `User name: ${arr.name}`;
    li3.textContent = `User age: ${arr.age}`;

    input.after(ul);

    ul.append(li1);
    ul.append(li2);
    ul.append(li3);

};


let removeUser = (id) => {
    event.preventDefault();
    let idus = document.querySelector('.id').value;

    fetch(`https://test-users-api.herokuapp.com/users/${idus}`, {
        method: 'DELETE',
    }).then(response => response.ok ? response.json() : null)
        .then(data => console.log(data))
        .catch(error => console.log(error))
};

document.querySelector('.button2').addEventListener('click', removeUser);


const addUser = (name, age) => {
    event.preventDefault();
    let userName = document.querySelector(".name").value;
    let userAge = document.querySelector(".age").value;


    fetch('https://test-users-api.herokuapp.com/users/', {
        method: 'POST',
        body: JSON.stringify({
            name: userName,
            age: userAge,
        }),
        headers: {
            "Content-type": 'application/json',
        }
    })
        .then(result => result.ok ? result.json() : null)
        .then(data => console.log(data))
        .catch(error => console.log(error))
};
document.querySelector('.buttonAdd').addEventListener("click", addUser);


const updateUser = (id, user) => {
    event.preventDefault();
    let idUsers = document.querySelector('.updId').value;
    let nameUs = document.querySelector('.nameUs').value;
    let ageUs = document.querySelector('.ageUs').value;

  fetch(`https://test-users-api.herokuapp.com/users/${idUsers}`, {
         method: "PUT",
         body: JSON.stringify({name: nameUs, age: ageUs}),
        headers: {
             'Content-Type': 'application/json'
        },

    }).then(result => result.ok ? result.json() : null)
     //.then(data => console.log(data))
    .catch(error => console.log(error))
 };

document.querySelector('.button4').addEventListener("click", updateUser);



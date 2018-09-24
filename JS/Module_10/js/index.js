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
    fetch('https://test-users-api.herokuapp.com/users/5ba247badc966c00142483b3')
        .then(result => result.ok ? result.json() : null)
        //.then(data => console.log(data))
        .then(data => {
            //getUserById(data)
            console.log(data)
        })
        .catch(err => console.log(err))
}
getAllUsers()
/*

*!/const getUserById = (arr)=>{
    Object.entries(arr).map(el => {
        let idUs = document.getElementById(el.data.id)
        console.log(idUs)
    })

}

//getUserById();
*/



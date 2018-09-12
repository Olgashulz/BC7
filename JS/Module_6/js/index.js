"use strict"

/*
  Сеть фастфудов предлагает несколько видов гамбургеров.
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
  Дополнительно, гамбургер можно:
	- посыпать приправой (+10 денег, +0 калорий)
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */



class Hamburger {
    constructor(size, staffing) {
        this.size = size;
        this.toppings = [];
        this.staffing = staffing;
    }

    /**
     * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
     * @param {String} topping - Тип добавки
     */
    addTopping(topping) {
        //!this.toppings.includes(topping)? this.toppings.push(topping):null;
        if (!this.toppings.includes(topping)) {
            this.toppings.push(topping);
            console.log(topping);
            return this.toppings;
        }
        return this.toppings;
    }

    /*let order = new Hamburger('big', 'topping', 'staffing');
    console.log(order);
    order.addTopping(['TOPPING_SPICE','TOPPING_SAUCE']);*/

    /*
         * Убрать topping, при условии, что она ранее была добавлена
         * @param {String} topping - Тип добавки*/

    removeTopping(topping) {
        this.toppings = this.toppings.filter(function (el) {
            return el !== topping;
        });
        // return this.toppings;
    };

    /*let order = new Hamburger('big', 'staffing');
    order.addTopping('TOPPING_SPICE');
    order.addTopping('TOPPING_SAUCE');
    order.removeTopping('TOPPING_SPICE');456
    console.log(order);*/

    /*
         * Получить список toppings
         * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
         *
         * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок*/

    getToppings() {
        return this.toppings
    }
}

    /*let order = new Hamburger('big', 'staffing');
    order.addTopping('TOPPING_SPICE');
    order.addTopping('TOPPING_SAUCE');
    order.removeTopping('TOPPING_SPICE');
    console.log(order);
    console.log(order.getToppings());*/


    /*     * Узнать размер гамбургера
         * @returns {String} - размер гамбургера
         *
         * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер*/


/*    getSize() {
    }
};*/
    /*
     * Узнать начинку гамбургера
     * @returns {String} - начинка гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
     *!/
    getStuffing() {}

    /!**
     * Узнать цену гамбургера
     * @returns {Number} - Цена в деньгах
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
     *!/
    calculatePrice() {}

    /!**
     * Узнать калорийность
     * @returns {Number} - Калорийность в калориях
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
     *!/
    calculateCalories() {}


/!*
  Размеры, виды добавок и начинок объявите как статические поля класса.
  Добавьте отсутсвующие поля по аналогии с примером.
*!/
Hamburger.SIZE_SMALL = 'SIZE_SMALL'; //  крас добавили  э
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
        price: 30,
        calories: 50,
    },

    [Hamburger.SIZE_LARGE]: {
        price: 50,
        calories: 100,
    },
};
//Hamburger.SIZES[this_.size]price // так викликати
Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
        price: 15,
        calories: 20,
    },
    [Hamburger.STUFFING_SALAD]: {
        price: 20,
        calories: 5,
    },
    [Hamburger.STUFFING_MEAT]: {
        price: 35,
        calories: 15,
    },
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
        price: 10,
        calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 5,
    },
};

/!* Вот как может выглядеть использование этого класса *!/

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1*!/

/!*
  🔔 Обратите внимание на такие моменты:
    	✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
    		другой код, а класс живет в изоляции от мира
    	✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
		чтобы нельзя было создать объект, не указав их
    	✔️ необязательные (добавка) добавляем через методы
    	✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
	    	свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
    	✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.
    	✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
      		а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
		логично в тот момент, когда это потребуется, а не заранее.
*!/
/!*
class Video {
    constructor(size, duration, title, format, hd, autor) {
        this.size = size;
        this.duration = duration;
        this.title = title;
        this.format = format;
        this.hd = hd;
        this.autor = autor;
    }

    getFullInfo() {
        return `${this.autor} ${this.title} ${this.size}`; // фукція пишеться всередині слово прототип і функція не пишуться
    };

    arhive(num) {
        this.size = parseFloat(this.size) / num + 'gb';
    };

    changeAutor(newAutor) {
        this.autor = newAutor;
    }

    changeTitle(newTitle) {
        this.title = newTitle;
    }

}

let video = new Video('1.5gb', '01:30:25', 'Genderfield V', 'MP-4', true, 'Dice');
video.arhive(2); //ділимо розмір на 2
video.changeAutor('BioWare'); // міняємо автора
video.changeTitle('Anthem');// міняємо назву
console.log(video.getFullInfo());
console.log(video);*!/


/!*const Herro = function (name, level) {
    // this = {}
    // Hero.prototype = {}
    this.name = name;
    this.level = level;


};
const alister = new Herro('Alister', 1);
console.log(alister);

Herro.prototype.greet = function () {  // Створюєио фцію Herro.prototype - фуеція якою можуть користуватись усі
    console.log(`'Hello, I'm ${this.name}'`);
};
alister.greet();

const Warrior = function (name, level, weapon) { // творили героя Warrior прототипом якого е Herro
    //this={}
    // Warrior.prototype ={};
    // Hero.prototype={}
    Herro.call(this, name, level);
    this.weapon = weapon;
};

Warrior.prototype = Object.create(Herro.prototype); /// щоб присвоїти прототипуб свойства прототипа
Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function () {
    console.log(`${this.name}attacks with an ${this.weapon}`)
};
let gerald = new Warrior('Gerald', 1, 'sword');
console.log(gerald);
//// Новий герой

const Mag = function (name, level, weapon, magic) {
    Warrior.call(this, name, level, weapon);
    this.magic = magic;
};
Mag.prototype = Object.create(Warrior.prototype); /// щоб присвоїти прототипуб свойства прототипа
Mag.prototype.constructor = Mag;
Mag.prototype.magic = function () {
    console.log(`${this.name} magic ${this.magic}`)
};
let Bo = new Mag('BOO', 1, 'knife', 'ball');
console.log(Bo);*!/

*/
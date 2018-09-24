/*
  Создайте компонент галлереи изображений следующего вида.

    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>

    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2


    Реализуйте функционал:

      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.

      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.

      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются
        динамически, при загрузке страницы.

      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.

      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.

      - Изображений может быть произвольное количество.

      - Используйте делегирование для элементов preview.

      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.

      - CSS-оформление и имена классов на свой вкус.


    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

/*const galleryItems = [
                     { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
{ preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
{ preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
{ preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
{ preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
{ preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так,
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина
  аналогичный заданию выше.

  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию

  Тогда создание экземпляра будет выглядеть следующим образом.
*/
/*
new Gallery({
    items: galleryItems,
    parentNode: document.querySelector('.image-gallery'),
    defaultActiveItem: 1
});*/
const galleryItems = [
    { preview: 'img/preview-238622.jpeg', fullview: 'img/fullview-238622.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-439284.jpeg', fullview: 'img/fullview-439284.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-454880.jpeg', fullview: 'img/fullview-454880.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-746386.jpeg', fullview: 'img/fullview-746386.jpeg', alt: "alt text 4" },
    { preview: 'img/preview-1209658.jpeg', fullview: 'img/fullview-1209658.jpeg', alt: "alt text 5" },
    { preview: 'img/preview-1416689.jpeg', fullview: 'img/fullview-1416689.jpeg', alt: "alt text 6" },
];
console.log(galleryItems);

let imageGallery  = document.querySelector('.image-gallery');
let fullView = document.createElement('div');
let imgFullView = document.createElement('img');
let list = document.createElement('ul');


function createElements(obj) {

    fullView.classList.add('fullview');
    imgFullView.classList.add('fullImage');
    imgFullView.setAttribute('src', obj[0].fullview);
    imgFullView.setAttribute('alt', obj[0].alt);
    list.classList.add('preview');


    imageGallery.append(fullView);
    imageGallery.append(list);
    fullView.append(imgFullView);


    for (let i of galleryItems) {
        let li = document.createElement('li');
        li.classList.add('link');

        let linkPhoto = document.createElement('img');
        linkPhoto.classList.add('linkImage');

        linkPhoto.setAttribute('src', i.preview);
        linkPhoto.setAttribute('data-fullview', i.fullview);
        linkPhoto.setAttribute('alt', i.alt);

        list.append(li);
        li.append(linkPhoto);
    }
};
createElements(galleryItems);

let photos = [...document.querySelectorAll('.link')];
document.querySelector('.preview').addEventListener('click', Click);

function Click(){
    imgFullView.setAttribute('src', event.target.dataset.fullview);
    photos.forEachforEach(el => el.classList.contains('active') ? el.classList.remove('active') : el);
    event.target.parentElement.classList.toggle('active');
}
/*
 ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

 Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так,
 чтобы можно было создать любое количество галлерей на странице. Функционал плагина
 аналогичный заданию выше.

 При создании экземпляра конструктор получает:
   - items - список элементов для preview
   - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
   - defaultActiveItem - номер активного элемента preview по умолчанию

 Тогда создание экземпляра будет выглядеть следующим образом.
*/
// new Gallery({
//   items: galleryItems,
//   parentNode: document.querySelector('.image-gallery'),
//   defaultActiveItem: 1
// });

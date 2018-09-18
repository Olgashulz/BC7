/*
  1. Модифицируйте готовую функцию createPostCard() из задания
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так,
    чтобы она принимала объект post с данными для заполнения полей
    в карточке.

  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает
    массив DOM-элементов всех постов.

  3. Повесьте все посты в какой-то уже существующий DOM-узел.*/
/*
function createPostCard(post) {
//create element
    let root = document.querySelector('#root');
    let post = document.createElement('div');
    let postImage = document.createElement('img');
    let postTitle = document.createElement('h2');
    let postText = document.createElement('p');
    let button = document.createElement('a');

//add atributes
    postImage.setAttribute('src', 'http://via.placeholder.com/400x150');
    postImage.setAttribute('alt', 'post image');
    button.setAttribute('href', '#');

// add classList
    post.classList.add('post');
    post.classList.add('post__image');
    postTitle.classList.add('post__title');
    postText.classList.add('post__text');
    button.classList.add('button');

//text content
    postTitle.textContent = 'Lorem ipsum dolor';
    postText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
    button.textContent = 'Read more';

//paste on page
    root.prepend(post);
    post.prepend(postImage);
    postImage.after(postTitle);
    postTitle.after(postText);
    postText.after(button);

}
createPostCard();*!/*/

/*
let createPostCard = function (poster) {

for (let i of posts) {
    let root = document.querySelector('#root');
    let post = document.createElement('div');
    let postImage = document.createElement('img');
    let postTitle = document.createElement('h2');
    let postText = document.createElement('p');
    let button = document.createElement('a');

    postImage.setAttribute('src', i.img);
    postImage.setAttribute('alt', 'post image');
    button.setAttribute('href', i.link);

    post.classList.add('post');
    postImage.classList.add('post__image');
    postTitle.classList.add('post__title');
    postText.classList.add('post__text');
    button.classList.add('button');

    postTitle.textContent = i.title;
    postText.textContent = i.text;
    button.textContent = 'read more';

    root.prepend(post);
    post.prepend(postImage);
    postImage.after(postTitle);
    postTitle.after(postText);
    postText.after(button);
}};
console.log(createPostCard(posts));*/

const posts = [
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-1.com'
    },
    {
        img: "https://placeimg.com/400/150/nature",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-2.com'
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-3.com'
    }
];

let root = document.querySelector('#root');

let createPostCard = function (i) {
    let post = document.createElement('div');
    let postImage = document.createElement('img');
    let postTitle = document.createElement('h2');
    let postText = document.createElement('p');
    let button = document.createElement('a');

    postImage.setAttribute('src', i.img);
    postImage.setAttribute('alt', 'post image');
    button.setAttribute('href', i.link);

    post.classList.add('post');
    postImage.classList.add('post__image');
    postTitle.classList.add('post__title');
    postText.classList.add('post__text');
    button.classList.add('button');

    postTitle.textContent = i.title;
    postText.textContent = i.text;
    button.textContent = 'read more';


    post.prepend(postImage);
    postImage.after(postTitle);
    postTitle.after(postText);
    postText.after(button);

};
createPostCard(posts);


//root.append(post);
let finalPost ;

function createCards(posts){
    finalPost =posts.map(function(el){
        createCards(posts);
    });
    root.append(finalPost);
}


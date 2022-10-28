//Ищем input с id title
const title = document.querySelector('#title');
//Ищем input с id description
const description = document.querySelector('#description');
//Ищем form с id form
const formFeature = document.querySelector('.feature-form');
//Search card-list
const cardList = document.querySelector('.card-list');

//Объявляем обработчик события submit на form
formFeature.addEventListener('submit', function (event) {
  event.preventDefault();
  //Ссылка на форму
  let formData = event.target;
  //Создаем объект с данными из формы
  let data = {
    title: formData[0].value,
    description: formData[1].value
  }

  //Создаем div элемент 
  const card = document.createElement('div');
  //Создаем h2 элемент 
  const cardTitle = document.createElement('h2');
  //Создаем p элемент 
  const cardDescription = document.createElement('p');

  //Добавляем к div элементу дочерние элементы
  card.appendChild(cardTitle);
  card.appendChild(cardDescription);
  //Присваиваем div элементу класс card
  card.className = 'card';

  //Присваиваем заголовку и абзацу значения, полученные от пользователя
  //введенные последним в форму
  cardTitle.innerHTML = data.title;
  cardDescription.innerHTML = data.description;

  //Добавляем в div элемент с классом card-list
  //div элемент с классом card
  cardList.appendChild(card);
})
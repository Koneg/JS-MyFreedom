//Ищем все элементы с классом nav-link 
const links = document.querySelectorAll('.nav-link');

//Проходим по всем элементам links
for (let i = 0; i < links.length; i++) {
    //Обрабатываем события клика по конкретному элементу
    links[i].addEventListener('click', function () {
        //Проходим по всем links, чтобы удалить класс active-link
        for (let j = 0; j < links.length; j++) {
            //Удаляем класс active-link
            links[j].classList.remove('active-link');

        }
        //Добавляем класс active link
        this.classList.add('active-link')
    })
}

//Форма

//Ищем input с id username
const username = document.querySelector('#username');
//Ищем input с id email
const email = document.querySelector('#email');
//Ищем form с id form
const form = document.querySelector('#form');
const outer = document.querySelector('.outer');

//Объявляем обработчик события submit на form
form.addEventListener('submit', function (event) {
    //Ссылка на форму
    let formData = event.target;
    //Создаем объект с данными из формы
    let person = {
        username: formData[0].value,
        email: formData[1].value
    }

    //Выводим значение в HTML
    outer.innerHTML = `
        <div>
            <p>Username: ${person.username}</p>
            <p>Email: ${person.email}</p>
        </div>
    `
})

let sectionClass = 'home'
let activeSectionClass = 'active'

const homeSection = document.querySelector('#home');
homeSection.style.background = '#FFB9B9';
homeSection.style.display = 'flex';
homeSection.style.alignItems = 'center';
homeSection.style.justifyContent = 'center';

homeSection.className = 'home-from-js section';
homeSection.classList.add(sectionClass, activeSectionClass)

console.log(homeSection.classList.contains('home'));
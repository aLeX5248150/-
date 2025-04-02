// Single Page Application (формы, авторизация) - 
// full stack приложение - например телеграм-бот
// телеграм-бот - mashine learning. 

//querySelector - передаёт только один один элемент


//querySelectorAll - передает все элементы с этим классом, айди, тегом и т.д. Этот метод используется, когда надо получить доступ к нескольким элем.
/*const listItemElement = document.querySelectorAll('#item');
listItemElement.forEach (function(element) {
  element.addEventListener('mouseover', function () {
     element.style.backgroundColor = 'green';
  });
  element.addEventListener('mouseout', function () {
    element.style.backgroundColor = '';
  })
})
  */

//addEventListener. первый аргумент - событие (click, mouseover, mouseup и т.д.), второй аргумент - функция, которая выполняется после выполнения события
// - Мышь: "click", "dblclick", "mouseover", "mouseout"
// - Клавиатура: "keydown", "keyup", "keypress"
// - Формы: "submit", "change", "input"
// - Документ: "DOMContentLoaded", "load", "resize"
// .preventDefault() - этот метод предотвращает перезагрузку страницы
// .onload в отличие от DOMContentLoaded (ждёт только html) срабатывает когда загружены все стили, скрипты и html
// .target - указывает на элемент, на котором произошло событие (клик, нажатие клавиши)
// атрибут в html у input REQUIRED подавляет действие alert

// 1. Обработка клика
const eventButton = document.querySelector('#buttonId');
eventButton.addEventListener('click', (event) => {
console.log('hello world');
console.log(event.target); // указывает на элемент, на котором произошло событие
  });
// 2. Обработка наведения мыши
// eventButton.addEventListener('mouseover', function () {
//  eventButton.style.backgroundColor = 'green';
// })  
// eventButton.addEventListener('mouseout', function () {
 // eventButton.style.backgroundColor = '';
// })
// 3. Обработка ввода текста
const input = document.querySelector('#inputText');
const output = document.querySelector('#outputText');

input.addEventListener('input', function () {
  output.textContent = `Вы ввели: ${this.value}`;
})

// 4. Обработка отправки формы
const form = document.getElementById('myForm');
const inputField = document.querySelector('.iii');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // предотвращает перезагрузку страницы
  
  // Проверяем, пустое ли поле
  if (!inputField.value) {       // эта проверка сработает если убрать атрибут required из html
    alert('Введите данные в поле ввода');
  } else {
    alert('Форма отправлена!');
    // Здесь можно добавить логику для отправки данных
    // Например, использовать fetch для отправки данных на сервер
  }
});

// Кнопка не требует отдельного обработчика, потому что 
// вся логика уже реализована в обработчике submit формы



// 5. Обработка события прокрутки
window.addEventListener('scroll', function() {
  console.log('Прокрутка страницы');
});

// 6. Обработка события загрузки DOM-дерева 
window.addEventListener('DOMContentLoaded', function() {
  console.log('DOM полностью прогружен');
});

// 7. Использование именованных функций
function handleClick() {
  //alert('Кнопка нажата!');
}
const button = document.querySelector('.bbtn');
button.addEventListener('click', handleClick);

// 8. Удаление обработчика события
button.addEventListener('click', function () {
  button.removeEventListener('click', handleClick);
//console.log('Отключили обработчик событий')
})

// Создание всплывающего окна с приветствием
const modal = document.getElementById("welcomeModal");
const closeModal = document.getElementById("closeModal");

// Показываем модальное окно при загрузке страницы
// window.onload = function() {
//    modal.style.display = "block"; // чтобы всё осталось на месте
// }

// Закрываем модальное окно при нажатии на (x)
closeModal.onclick = function() {
    modal.style.display = "";
}

// Закрываем модальное окно при клике вне его
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}







// Код для клиента-пользователя

const chat = document.getElementById('chat');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

const socket = new WebSocket('ws://localhost:8080');

// Регистрация клиента как "user"
socket.onopen = function() {
    socket.send(JSON.stringify({ type: 'register', role: 'user' }));
};

// Обработка входящих сообщений
socket.onmessage = function(event) {
    const message = JSON.parse(event.data);
    chat.innerHTML += `<p><strong>Оператор:</strong> ${message.text}</p>`;
    chat.scrollTop = chat.scrollHeight;
};

// Отправка сообщения оператору
sendButton.onclick = function() {
    const messageText = messageInput.value;
    if (messageText) {
        const message = {
            from: 'user',
            to: 'operator',
            text: messageText
        };
        socket.send(JSON.stringify(message));
        chat.innerHTML += `<p><strong>Вы:</strong> ${messageText}</p>`;
        messageInput.value = '';
    }
};


document.addEventListener('DOMContentLoaded', () => {
  const hoverBlock = document.getElementById('hover-block');
const item = document.getElementById('item-2');
item.addEventListener('mouseover', () => {
  hoverBlock.classList.add('visible'); // Добавляем класс для отображения
 
})
item.addEventListener('mouseout', () => {
    hoverBlock.classList.remove('visible'); // Убираем класс для скрытия
})
hoverBlock.addEventListener('mouseover', () => {
  hoverBlock.classList.add('visible')
})
hoverBlock.addEventListener('mouseout', () => {
  hoverBlock.classList.remove('visible')
})

})

document.addEventListener('DOMContentLoaded', () => {
const hoverElement = document.getElementById('hover-block-2');
const resourses = document.getElementById('item-3');

hoverElement.addEventListener('mouseover', () => {
hoverElement.classList.add('visibleBlock');
})
hoverElement.addEventListener('mouseout', () => {
  hoverElement.classList.remove('visibleBlock');
})

resourses.addEventListener('mouseover', () => {
  hoverElement.classList.add('visibleBlock');
  })
resourses.addEventListener('mouseout', () => {
  hoverElement.classList.remove('visibleBlock');
})


/*

// const buttonTheme = document.getElementById('button-theme');

// buttonTheme.addEventListener('click', () => {
    // Переключаем классы темы
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});

*/
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.classList.add('sun-background');
themeToggleButton.innerHTML = '<img src="icons8-солнце-30.png" alt="">'; // Иконка солнца
const body = document.body;


// Обработчик события для кнопки
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeToggleButton.innerHTML = '<img src="icons8-символ-луны-30.png" alt="">'; // Иконка месяца
    body.classList.toggle('light-theme');
    themeToggleButton.innerHTML = '<img src="icons8-солнце-30.png" alt="">'; // Иконка солнца

    // Смена иконки
    if (body.classList.contains('dark-theme')) {
        themeToggleButton.innerHTML = '<img src="icons8-символ-луны-30.png" alt="">'; // Иконка месяца
        themeToggleButton.classList.remove('sun-background')
        themeToggleButton.classList.add('moon-background')
        localStorage.setItem('theme', 'dark'); // Сохраняем тему в localStorage
    } else {
        themeToggleButton.innerHTML = '<img src="icons8-солнце-30.png" alt="">'; // Иконка солнца
        themeToggleButton.classList.remove('moon-background')
        themeToggleButton.classList.add('sun-background')
        localStorage.setItem('theme', 'light'); // Сохраняем тему в localStorage
    }
});

})
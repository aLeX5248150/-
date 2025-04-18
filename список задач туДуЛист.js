document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addButton'); // Исправлено на 'addButton'
    const taskList = document.getElementById('taskList');
    const inputArea = document.getElementById('inputArea');

    addTaskBtn.addEventListener('click', () => {
        const inputText = inputArea.value.trim(); // значение в поле ввода

        if (inputText === '') {
            alert('Введите задачу');
            return; // Выход из функции, если поле ввода пустое
        }

        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                li.classList.add('completed'); // Добавляем класс для выполненной задачи
            } else {
                li.classList.remove('completed'); // Убираем класс, если задача не выполнена
            }
        });

        li.appendChild(checkbox); // Добавляем чекбокс к элементу списка
        li.appendChild(document.createTextNode(inputText)); // Добавляем текст задачи
        taskList.appendChild(li); // Добавляем элемент списка в ul
        inputArea.value = ''; // Очищаем поле ввода
    });
});
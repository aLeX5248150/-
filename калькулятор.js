// Калькулятор

// добавление нового символа к текущему значению:
function addNumber (value) {
    let add = document.getElementById('result');
    if (add.value === '0') {
        add.value = value; 
    }
  
    else {
        add.value += value;
    }
}

// очищение поля ввода:
function clearArea () {
    let clear = document.getElementById('result').value = '';
}

// вывод результата в поле ввода:
function getResult () {
    let get = document.getElementById('result');
    try {
        get.value = eval(get.value)
    } catch (error) {
        get.value = 'Ошибка'
    }
}

// начиная отсюда уже ничего не понятно
function changeButtonColor(button) {
    button.style.backgroundColor = "white";
    setTimeout(() => {
        button.style.backgroundColor = "rgb(255, 162, 0)";
    }, 200);
}

document.getElementById('1').addEventListener("click", function() {
    changeButtonColor(this);
});

document.querySelectorAll('.new2, .new3, .new4').forEach(button => {
    button.addEventListener("click", function() {
        changeButtonColor(this);
    });
});


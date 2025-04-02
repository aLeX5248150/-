// server.js
// подключаем библиотеку ws
// require('ws') - импорт модуля: В Node.js используется система модулей CommonJS, и require — это функция, которая позволяет загружать 
// и использовать другие модули. В данном случае мы загружаем модуль ws.

// Библиотека ws: Это популярная библиотека для работы с вебсокетами в Node.js. Она предоставляет простой и эффективный интерфейс для 
// создания вебсокет-серверов и клиентов.
// для установки библиотеки надо ввести в терминале: npm install ws

// Код для сервера

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

// Хранение подключенных клиентов
const clients = new Map();

wss.on('connection', function connection(ws) {
    console.log('Новое подключение');

    // Обработка сообщений от клиентов
    ws.on('message', function incoming(message) {
        const data = JSON.parse(message);

        // Регистрация клиента
        if (data.type === 'register') {
            clients.set(data.role, ws);
            console.log(`Зарегистрирован клиент: ${data.role}`);
            return;
        }

        // Перенаправление сообщений
        if (data.to === 'operator') {
            const operator = clients.get('operator');
            if (operator) {
                operator.send(JSON.stringify({ from: data.from, text: data.text }));
                console.log(`Сообщение от ${data.from} перенаправлено оператору`);
            }
        } else if (data.to === 'user') {
            const user = clients.get('user');
            if (user) {
                user.send(JSON.stringify({ from: data.from, text: data.text }));
                console.log(`Сообщение от ${data.from} перенаправлено пользователю`);
            }
        }
    });

    // Обработка отключения клиента
    ws.on('close', function() {
        console.log('Клиент отключен');
        for (let [role, client] of clients.entries()) {
            if (client === ws) {
                clients.delete(role);
                console.log(`Клиент ${role} удален`);
                break;
            }
        }
    });
});

console.log('Сервер запущен на ws://localhost:8080');
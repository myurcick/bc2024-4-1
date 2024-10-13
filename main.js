const http = require('http');
const { Command } = require('commander');
const program = new Command();
const host = 'localhost';
const port = '8080';

// Налаштовуємо команду з параметрами
program
  .requiredOption('-h, --host <host>', 'Server host address')
  .requiredOption('-p, --port <port>', 'Server port')
  .requiredOption('-c, --cache <cachePath>', 'Cache directory path');

program.parse(process.argv);


const requestListener = function(req, res){
    res.writeHead(200);
    res.end("my first server");
}
// Створюємо HTTP сервер
const server = http.createServer(requestListener)

// Запускаємо сервер на заданому хості та порту
server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});

// Виведення помилки, якщо параметри не задані (це вже враховано командою requiredOption)

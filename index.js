
//Рабочая директория 
//C:\Users\User\Documents\iProg\html\nodejs>

(function(exports, require, module, __dirname, __filename){

const text = require('./data.js')
const chalk = require('chalk')
//

//npm-config
//
//инициализация для генерации package.json
//npm init
//установка пакета
//npm i chalk


console.log("Hello");
console.log("Dirname:"+__dirname);
console.log("Filename:"+__filename);
console.log(text);
console.log(chalk.blue("Hello"));
})
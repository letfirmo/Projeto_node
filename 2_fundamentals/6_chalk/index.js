const chalk = require('chalk');

const nota = 6


if (nota >= 7) {
  console.log(chalk.green.bold('Você foi aprovado!'));
} else {
  console.log(chalk.black.bgRed.bold('Você foi reprovado!'));
} 

setTimeout(() => {
  console.clear();
}, 3000);
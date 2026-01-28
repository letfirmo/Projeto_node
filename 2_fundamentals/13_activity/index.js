const chalk = require('chalk');
const inquirer = require('inquirer');

inquirer
    .prompt([
            {
                name: 'a1',
                message: 'What is your name?',
            }, 
            {
                name: 'a2',
                message: 'What is your age?',
            }
        ])
        .then((answers) => {
            console.log(chalk.bgYellow.black(`Name: ${answers.a1} Age: ${answers.a2}`));
        })
        .catch((err) => console.log(err));
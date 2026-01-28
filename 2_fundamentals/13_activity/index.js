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
            if (!answers.a1 || !answers.a2) {
                console.log(chalk.bgRed.black('Error: Name and age are required!'));
                return;
            }

            console.log(chalk.bgYellow.black(`Name: ${answers.a1} Age: ${answers.a2}`));
        })
        .catch((err) => console.log(err));
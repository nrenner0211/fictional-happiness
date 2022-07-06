// packages needed
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');
const Employee = require('./lib/Employee.js');

// welcome
console.log("Welcome to fictional-happiness Corporation's employee tracker! It will prompt you for information on employees, classify them by role, and generate a webpage with easy-to-access employee cards.");

// array of questions
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "Please provide employee's full name. (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please provide employee's ID/Badge number.",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter an ID number!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please provide a valid email address to reach the employee. (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address!')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: "What is this employee's role?",
        choices: ['Engineer', 'Intern', 'Manager'],
        validate: roleInput => {
            if (roleInput == 'Engineer') {
                this.Employee.push(new Engineer('github', 'role'));
            }
        }
    }
];

init = function() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput);
    })
};

init();

  


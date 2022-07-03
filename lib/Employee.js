//packages
const inquirer = require("inquirer");
const fs = require('fs');

class Employee {
    constructor(name, id, email, role='employee') {
            this.name = name;
            this.id = id;
            this.email = email;
            this.role = role;
    }
}

Employee.prototype.init = function() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        writeToFile('./dist/index.html', generatePage(userInput));
    })
};

init();


module.exports = Employee;
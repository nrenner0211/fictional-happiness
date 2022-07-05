const inquirer = require("inquirer");

class Intern {
    constructor(school, role='intern') {
            this.school = school;
            this.role = role;
    }
    getSchool() {
        inquirer.prompt({
            type: 'text',
            name: 'school',
            message: 'What school does this intern attend?'
        })
    }
}

module.exports = Intern;
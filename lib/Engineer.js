const inquirer = require("inquirer");
const Employee = require('./Employee.js');

class Engineer {
    constructor(github, role='engineer') {
            this.github = github;
            this.role = role;
    }
    getGithub() {
        inquirer.prompt({
            type: 'text',
            name: 'github',
            message: "Please enter employee GitHub username:",
            validate: ghInput => {
                if (ghInput) {
                    return true;
                } else {
                    console.log('Please enter a valid unsername!');
                    return false;
                }
            }
        })
    }
}

module.exports = Engineer;
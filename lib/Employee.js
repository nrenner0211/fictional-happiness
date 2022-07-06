//packages
const inquirer = require("inquirer");
const fs = require('fs');
const Engineer = require("./Engineer");
const Manager = require("./Manager");

class Employee {
    constructor(name, id, email, role) {
            this.name = name;
            this.id = id;
            this.email = email;
            this.role = role;
    }    
}

module.exports = Employee;
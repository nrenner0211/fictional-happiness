// packages needed
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');

// welcome
console.log("Welcome to fictional-happiness Corporation's employee tracker! It will prompt you for information on employees, classify them by role, and generate a webpage with easy-to-access employee cards.");

new Employee().init();

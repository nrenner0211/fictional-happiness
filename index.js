// packages needed
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer.js');
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

employeeArray = [];

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
        message: "Please provide employee's ID number.",
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
        // validate: role => {
        //     if (role) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
    }
];

function init() {
    generatePage();
    addEmployee();
};

function addEmployee() {
    inquirer.prompt(questions).then(function({name, id, email, role}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "Github username, please.";
        } else if (role === "Intern") {
            roleInfo = "school of attendance, please.";
        } else {
            roleInfo = "office number, please.";
        }
        inquirer.prompt([{
            type: 'text',
            name: 'roleInfo',
            message: `Enter employee's ${roleInfo}`
        },
        {
            type: 'list',
            name: 'moreEmployees',
            message: "Would you like to add another employee?",
            choices: ['Yes', 'No']
        }
    ])
    .then(function({roleInfo, moreEmployees}) {
        let newEmployee;
        if (role === 'Engineer') {
            newEmployee = new Engineer(name, id, email, roleInfo);
        } else if (role === 'Intern') {
            newEmployee = new Intern(name, id, email, roleInfo);
        } else {
            newEmployee = new Manager(name, id, email, roleInfo);
        }
        employeeArray.push(newEmployee);
        addHtml(newEmployee)
        .then(function() {
            if (moreEmployees === 'Yes') {
                addEmployee();
            } else {
                finishHtml();
            }
        })
    })
    })
}

function generatePage() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Employee Tracker</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">fictional-happiness Corporation -- Employee Tracker&copy;</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./dist/index.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Begin");
}

function addHtml(employee) {
    return new Promise(function(resolve, reject) {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = employee.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: <a href="mailto: ${email}"></li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = employee.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officeNumber = employee.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officeNumber}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("Added employee!");
        fs.appendFile("./dist/index.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });   
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./dist/index.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Check out your generated employee tracker in './dist/index.html!'");
}

init();  


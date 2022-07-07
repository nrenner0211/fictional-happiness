# fictional-happiness

Module 10 Challenge

## About

Welcome to fictional-happiness Corporation's employee tracker! It will prompt you for information on employees, classify them by role, and generate a webpage with easy-to-access employee cards for (not) exploiting them.

## Usage

Run these commands in your terminal:

`npm init`

`npm install inquirer@8.2.4`

`node index`

When you run node index, you will be prompted and a webpage will be generated based on your answers.

## Tests

To test app, run the following commands:

`npm install jest`

`npm run test`

If this doesn't work, you may have to go to package.json and make sure the scripts object looks like this:

`"scripts": {`

`"test": "jest"`

`},`

## User Story

AS A manager

I WANT to generate a webpage that displays my team's basic info

SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria

GIVEN a command-line application that accepts user input

WHEN I am prompted for my team members and their information

THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML

THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username

THEN that GitHub profile opens in a new tab

WHEN I start the application

THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number

THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option

THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option

THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team

THEN I exit the application, and the HTML is generated

## Walkthrough Video

[Link to video](https://drive.google.com/file/d/1KZISc_puMmqIQHuxE9O-n_xAIOsl4Cib/view)

### Thanks for reading

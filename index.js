// initiating variables
const inquirer = require('inquirer')
const fs = require('fs')

// questions pertaining to building your readME
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are the usage instructions for your project?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What is the license for your project?',
    choices: ['Apache 2.0', 'MIT', 'BSD 3', 'Unlicense', 'GPL 3.0', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contributing guidelines for your project?'
  },
  {
    type: 'input',
    name: 'testing',
    message: 'What are the testing guidelines for your project?'
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your username for github so people can contact you?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address so people can contact you?'
  },
]

  // function to ask Qs and log As in terminal
  inquirer.prompt(questions)
  .then(answers => {
    console.log(answers)
  })


// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

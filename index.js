// initiating variables
const inquirer = require('inquirer')
const fs = require('fs')

// questions for user to build readME
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
    let readMeElem = `
<img src='https://img.shields.io/badge/License-${answers.license}-yellow.svg'>

<h1> ${answers.title} </h1>
<h2> ${answers.description} </h2>
<h2> Table of Contents </h2>
<details open='open'>
<summary>Table of Contents</summary>
<ol>
<li><a href='#installation'>Installation</a></li>
<li><a href='#usage'>Usage</a></li>
<li><a href='#contribution'>Contribution</a></li>
<li><a href='#tests'>Tests</a></li>
<li><a href='#questions'>Questions</a></li>
</details>

<h3 id='installation'>Installation</h3>
<p> ${answers.installation} </p>

<h3 id='usage'>Usage</h3>
<p> ${answers.usage} </p>

<h3 id='contributing'>Contributing</h3>
<p> ${answers.contributing} </p>

<h3 id='testing'>Tests</h3>
<p> ${answers.testing} </p>

<h3 id='questions'>Questions</h3>
<p>Have questions? Please feel free to reach out to me on github at ${answers.username} or by email at ${answers.email} </p>
    `

    // function to write new ReadME file
    fs.writeFile('newReadMe.md', readMeElem, err => console.log(err))
  })

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

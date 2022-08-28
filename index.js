const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [ 
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please enter your project description',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Installation instructions',
    name: 'installations',
  },
  {
    type: 'input',
    message: 'Usage information',
    name: 'Usage',
  },
  {
    type: 'input',
    message: 'Contribution guidelines',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Test instuctions',
    name: 'test',
  },
  {
    type: 'checkbox',
    message: 'License',
    name: 'license',
    choices: ['University of Birmingham', 'W3Schools','Trilogy Education Services']
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your contact email?',
    name: 'email',
  },
];

// TODO: Create a function to write README file
const writeToFile = (README, data) => {}

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions).then((data) => {
    const {title, description, installations, usage, contribution, test, license, github, email} = data;
});
}

// Function call to initialize app
init();

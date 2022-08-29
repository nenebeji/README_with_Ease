const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//Array of questions for user input
const questions = [ 
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    default: 'README with Ease'
  },
  {
    type: 'input',
    message: 'Please enter your project description',
    name: 'description',
    default: `This application allows the user to create a README.md file with ease by answering questions in each prompt.
    
* A user can input the default value given if they are satisfied with it by pressing the enter key to confirm.

* A user can change the default answer by just inputing whatever text they'd like to change it to and pressing enter key.

* A README.md file is generated with table of contents containing all relevant information according to the user input`
  },
  {
    type: 'input',
    message: 'Installation instructions',
    name: 'installations',
    default: `Run  $ npm install  to install inquirer.`
  },
  {
    type: 'input',
    message: 'Usage information',
    name: 'usage',
    default: 'Run $ node index.js and follow the instructions.'
  },
  {
    type: 'input',
    message: 'Contribution guidelines',
    name: 'contribution',
    default: [`1. Clone the repo using $ git clone git@github.com:nenebeji/README_with_Ease

2. Create a new branch $ git checkout -b your name 

3. Make Changes and test 

4. Submit a pull request with description for review`]
  },
  {
    type: 'input',
    message: 'Test instuctions',
    name: 'test',
    default: `Test was run using npm test and console to debug.`
  },
  {
    type: 'list',
    message: 'License',
    name: 'license',
    choices: [
      {name: 'Apache', value: 'APACHE 2.0 License'}, 
      {name: 'MIT', value: 'The MIT License'},
      {name: 'GNU',  value: 'GNU GPL v3'}, 
      {name: 'Boost', value: 'Boost Software License 1.0'}, 
      {name: 'None'}
    ]
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
    default: 'nenebeji'
  },
  {
    type: 'input',
    message: 'What is your contact email?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is the name of the github repository for this project?',
    name: 'githubrepo',
    default: 'README_with_Ease',
  },
];


//function to initialize app
function init() {inquirer.prompt(questions)
    .then((data) => {
    const readme = generateMarkdown(data);
    
 //function to write README file
 fs.writeFile ('README.md', readme, (err) =>
 err ? console.error(err) : console.log('Hurray! You have successfully created a README with Ease!'));
 });
}

// Function call to initialize app
init();

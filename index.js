const fs = require('fs');
const inquirer = require('inquirer');
const markdowngenerator = require('./utils/generateMarkdown');

// Readme Template 
const generateREADME = ({title, description, installations, usage, contribution, test, license, github, email}) =>
`# ${title}

## Table of Contents
- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Tests](#test)
- [Questions](#questions)
- [License](#license)

## Project Description

${description}

## Installation

${installations}

## Usage 

${usage}

## How to Contribute

${contribution}

## Tests

${test}

## Questions
Feel free to contact me for further questions via:
Github: ${github}
Email: ${email}

## License
${license}
`
//Array of questions for user input
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
    default: [`
    1. Clone the repo using $ git clone git@github.com:myusername/name of project

    2. Create a new branch $ git checkout -b your name 

    3. Make Changes and test 

    4. Submit a pull request with description for review`]
  },
  {
    type: 'input',
    message: 'Test instuctions',
    name: 'test',
  },
  {
    type: 'list',
    message: 'License',
    name: 'license',
    choices: ['APACHE 2.0', 'MIT','GNU GPL 3', 'Boost', 'None']
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


//function to initialize app
function init() {inquirer.prompt(questions)
    .then((data) => {
    const readme = generateREADME(data);

 //function to write README file
 fs.writeFile ('README.md', readme, (err) =>
 err ? console.error(err) : console.log('Hurray! You have successfully created a README with Ease!'));
 });
}

// Function call to initialize app
init();

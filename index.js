const fs = require('fs');
const inquirer = require('inquirer');
const markdowngenerator = require('./utils/generateMarkdown');

// Readme Template 
const generateREADME = ({title, description, installations, usage, contribution, test, license, github, email, githubrepo}) =>
`# ${title}

## Table of Contents

- [Project Description](#project-description)

- [Installation](#installation)

- [Usage](#usage)

- [How to Contribute](#how-to-contribute)

- [Tests](#test)

- [Questions](#questions)

- [Reference](#reference)

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
Github: https://github.com/${github}
Email: ${email}

## Reference

https://github.com/${github}/${githubrepo}

## License

The ${license} license

Copyright (c) 2022 Oritsegidenene Beji

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
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
    1. Clone the repo using $ git clone git@github.com:nenebeji/README_with_Ease

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
    choices: ['APACHE 2.0 License', 'The MIT License','GNU GPL v3', 'Boost Software License 1.0', 'None']
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
    const readme = generateREADME(data);

 //function to write README file
 fs.writeFile ('README.md', readme, (err) =>
 err ? console.error(err) : console.log('Hurray! You have successfully created a README with Ease!'));
 });
}

// Function call to initialize app
init();

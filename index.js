const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//Array of questions for user input
const questions = [ 
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    default: 'README with Ease',
    validate: titleinput => {
      if (titleinput) return true;
      else 
      {console.log('Please provide a project title')
       return false;
      }
    },
  },
  {
    type: 'input',
    message: 'Please input the image path for the image you want in the readme',
    name: 'image',
    default: '/assets/images/READMEPhoto.png',
    validate: imageinput => {
      if (imageinput) return true;
      else 
      {console.log('Please provide an image path')
       return false;
      }
    },
  },
  {
    type: 'input',
    message: 'What is your fullname? Please input first and last name',
    name: 'fullname',
    default: 'Oritsegidenene Beji',
    validate: fullnameinput => {
      if (fullnameinput) return true;
      else 
      {console.log('Please provide a project title')
       return false;
      }
    },
  },
  {
    type: 'input',
    message: 'please input URL for walkthrough video',
    name: 'video',
    validate: videoinput => {
      if (videoinput) return true;
      else 
      {console.log('Please provide a video URL')
       return false;
      }
    },
  },
  {
    type: 'input',
    message: 'Please enter your project description',
    name: 'description',
    default: `This application allows the user to create a README.md file with ease by answering questions in each prompt.
    
* A user can input the default value given if they are satisfied with it by pressing the enter key to confirm.

* A user can change the default answer by just inputing whatever text they'd like to change it to and pressing enter key.

* A README.md file is generated with table of contents containing all relevant information according to the user input`,
    validate: descriptioninput => {
      if (descriptioninput) return true;
      else 
      {console.log('Please provide a description for the application')
       return false;
      }
    },
  },
  {
    type: 'input',
    message: 'Installation instructions',
    name: 'installations',
    default: `Run  $ npm install  to install inquirer.`,
    validate: installationinput => {
      if (installationinput) return true;
      else 
      {console.log('Please provide the installation guide for this project')
       return false;
      }
    },
  },
  {
    type: 'input',
    message: 'Please provide usage information',
    name: 'usage',
    default: 'Run $ node index.js and follow the instructions.',
    validate: usageinput => {
      if (usageinput) return true;
      else 
      {console.log('Please provide usage information')
       return false;
      }
    },
  },
  {
    type: 'input',
    message: 'What are the Contribution guidelines?',
    name: 'contribution',
    default: [`1. Clone the repo using $ git clone git@github.com:nenebeji/README_with_Ease

2. Create a new branch $ git checkout -b your name 

3. Make Changes and test 

4. Submit a pull request with description for review`],
    validate: contributioninput => {
      if (contributioninput) return true;
      else 
      {console.log('Please provide contribution guidelines for this project')
       return false;
      }
    },
  },
  {
    type: 'input',
    message: 'How do you test this application?',
    name: 'test',
    default: `Tests were run using npm test and console to debug.`,
    validate: testinput => {
      if (testinput) return true;
      else 
      {console.log('Please provide test instructions')
       return false;
      }
    },
  },
  {
    type: 'list',
    message: 'License',
    name: 'license',
    choices: [
      'APACHE 2.0 License', 
      'The MIT License',
      'GNU GPL v3', 
      'Boost Software License 1.0', 
      'None',
    ],
    validate: licenseinput => {
      if (licenseinput) return true;
      else 
      {console.log('Please select a license option')
       return false;
      }
    },
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
    default: 'nenebeji',
    validate: githubinput => {
      if (githubinput) return true;
      else 
      {console.log('Please provide your github username')
       return false;
      }
    },
  },
  {
    type: 'input',
    message: 'What is your contact email?',
    name: 'email',
    validate: emailinput => {
      if (emailinput) return true;
      else 
      {console.log('Please provide a valid email address')
       return false;
      }
    },
  },
  {
    type: 'input',
    message: 'What is the name of the github repository for this project?',
    name: 'githubrepo',
    default: 'README_with_Ease',
    validate: githubrepoinput => {
      if (githubrepoinput) return true;
      else 
      {console.log('Please provide the github repo for this project')
       return false;
      }
    },
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

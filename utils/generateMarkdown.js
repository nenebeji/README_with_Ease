// function that returns a license badge 
// If there is no license, return an empty string
let licensesection = {};
const renderLicenseBadgeLink = (license) => {
  let badge = ``;
  if(license === 'APACHE 2.0 License') {
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
   }
   else if(license === 'The MIT License'){
     badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
   }
   else if(license === 'GNU GPL v3'){
     badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
   }
   else if(license === 'Boost Software License 1.0'){
     badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
   }
   else {
     badge = ``;
   }
   return badge;
 
}
// function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  let licenseLink = ``;
  if(license === 'APACHE 2.0 License') {
    licenseLink = `https://opensource.org/licenses/Apache-2.0`;
   }
   else if(license === 'The MIT License'){
     licenseLink = `https://opensource.org/licenses/MIT`;
   }
   else if(license === 'GNU GPL v3'){
     licenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
   }
   else if(license === 'Boost Software License 1.0'){
     licenseLink = `https://www.boost.org/LICENSE_1_0.txt`;
   }
   else {
     licenseLink = ``;
   }
   return licenseLink;
}

//function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  let licensesection = ``
  if(license === 'None') {
    licensesection = `None`;
  }
  else {licensesection = `${license}

  
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
SOFTWARE.`;
  }
  return licensesection;
}

// // TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, image, fullname, description, installations, usage, contribution, test, license, github, email, githubrepo}) => {
  return `# ${title}
${renderLicenseBadgeLink(license)}

![App Image](${image})

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
  
${renderLicenseSection(license)}

For more informaation you can click the link below:

${renderLicenseLink(license)}

Copyright (c) 2022 ${fullname}.
`;
};

module.exports =  generateMarkdown
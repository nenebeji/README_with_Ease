// TODO: Create a function that returns a license badge and link based on which license is passed in
// If there is no license, return an empty string
let licensebadge = {};
let licensesection = {};
const renderLicenseBadgeLink = (license) => {
  if(license === Apache){
    return licensebadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if(license === MIT){
    return licensebadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if(license === GNU){
    return licensebadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if(license === Boost){
    return  licensebadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  else if(license === None){
    return licensebadge = {};
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  // let licensesection = {};
  if(license === Apache||MIT||GNU||Boost){
    return licensesection = `
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
  else if(license === None){
    return licensesection = {};
  };
}

// // TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, installations, usage, contribution, test, license, github, email, githubrepo}) => {
  return `# ${title}

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
  
${license}
  
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
`;
}

module.exports =  generateMarkdown


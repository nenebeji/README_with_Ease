// TODO: Create a function that returns a license badge and link based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadgeLink = (license) => {choices.map(choice => {
  if('APACHE 2.0 License'){
    return licensebadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if('The MIT License'){
    return licensebadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if('GNU GPL v3'){
    return licensebadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if('Boost Software License 1.0'){
    return  licensebadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  else if('None'){
    return licensebadge = {}
  }
})
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
 
// `;
// }

module.exports = {
  renderLicenseBadgeLink,
  renderLicenseSection,
}

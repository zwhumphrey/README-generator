// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT"){
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } 
    if (license === "Unlicense"){
        return `([![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/))`
    } 
    if (license === "WTFPL"){
        return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
    } 
    if (license === "Eclipse"){
        return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    } 
    if (license === "Apache"){
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// A function to generate markdown for README
function generateMarkdown(responce) {
  return `# ${responce.title}
  ${renderLicenseBadge(responce.license)}
## Description,
${responce.description}
## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contribution](#contribution)
6. [Test](#test)
7. [Questions](#questions)

##Usage,
${responce.usage}
##License,
${responce.license}
##Contribution,
${responce.contribution}
##Test,
${responce.test}
##Questions,
${responce.questions}
`;
}

module.exports = generateMarkdown;

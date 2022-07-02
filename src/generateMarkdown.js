// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT"){
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } 
    //create for each lic.
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
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

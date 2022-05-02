// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
<h1 align="center">${data.projectTitle}</h1>
<h2 align="center">By: Gabrielle Befort</h2>

## Description 
${data.description}

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Installation](#installation)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered by ${data.license} license.

## Contributing
${data.contributing}

## Test
${data.test}  

## Questions
Contact me with any questions by shooting me an email at ${data.questions} 
${date.username}


`;
}

module.exports = generateMarkdown;

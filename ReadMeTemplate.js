//Function name
function ReadMeTemplate(data) {
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


`;}

module.exports = ReadMeTemplate; 





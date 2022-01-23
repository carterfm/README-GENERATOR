const inquirer = require('inquirer');
const fs = require('fs');

const readmePrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter a description for your project: ',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions for your project: ',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Enter usage information for your project: ',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Enter contribution guidelines for your project: ',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'Enter test instructions for your project: ',
            name: 'test'
        }, 
        {
            type: 'list',
            message: 'Please select a license for your project: ',
            choices: ['A', 'B', 'C', 'D'],
            name: 'license'
        },
        {
            type: 'input',
            message: 'Enter your GitHub username: ',
            name: 'gitHub'
        },
        {
            type: 'input',
            message: 'Enter your email: ',
            name: 'email'
        }
]);
}

function generateREADME ( {title, description, installation, usage, contribution, test, license, gitHub, email }) {
return `
# ${title} ![](https://img.shields.io/badge/License-%22${license}%22-yellow.svg)

## Table of Contents

1. [Description](#description)

2. [Installation](#installation)

3. [Usage](#usage)

4. [Contribution Guidelines](#contribution)

5. [Test instructions](#test)

6. [License](#license)

7. [Questions](#questions)

## Description <a id="description"></a>

${description}

## Installation <a id="installation"></a>

${installation}

## Usage <a id="usage"></a>

${usage}

## Contribution Guidelines <a id="contribution"></a>

${contribution}

## Test Instructions <a id="test"></a>

${test}

## License <a id="license"></a>

This application's license is covered under ${license}.

## Questions <a id="questions"></a>

My GitHub profile is [${gitHub}](https://github.com/${gitHub}), and I can be reached for questions at [${email}](mailto:${email}).`

}

function init () {
    readmePrompt()
        .then(data => fs.writeFile(`README.md`, generateREADME(data), (err) => {
            if(err){
              throw err;
            }
            console.log(`wrote EXAMPLE.md`);
        }))
}

init()
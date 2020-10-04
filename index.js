// npm init
// npm install 

// require all the dependencies - inquirer, fs
let inquirer = require("inquirer");
let fs = require("fs");


//write a README in a markdown file as a template

// function that generates README template

/*use inquirer to prompt users with questions(* Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  */
inquirer.prompt([
    {
        name: "title",
        message: "What is your projects title?",
        type: "input"
    },
    {
        name: "description",
        message: "Describe your project here.",
        type: "input"
    },
    {
        name: "install",
        message: "How do you install your project?",
        type: "input"
    },
    {
        name: "usage",
        message: "What are the steps to use this project?",
        type: "input"
    },
    {
        name: "license",
        message: "Which license do you want your project covered under?",
        type: "checkbox",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT Lincse', 'Boost Software License 1.0', 'The Unlicense']
    },
    {
        name: "contribution",
        message: "Are there any other contributers?",
        type: "input",
    },
    {
        name: "testing",
        message: "Explain the tests conducted here.",
        type: "input"
    },
    {
        name: "email",
        message: "Enter your email.",
        type: "input"
    },
    {
        name: "questions",
        message: "Are there any additional questions?",
        type: "input"
    }
]).then((res) => {
    //Creates function to generate the md file
    function genMarkdown(res) {
        return` 
# ${res.title}
## Email

${ 'Contact me at: ' + res.email}

## Description

 * ${res.description}

## Table of Contents

* [Tests](#testing)

* [Installation](#install)

* [Usage](#usage)

* [Credits](#contribution)

* [License](#license)

## Tests

* ${res.testing}

## Installation

* ${res.install}
       
## Usage 

* ${res.usage}

## License

${res.license}

## Credits

Contributors:
* ${res.contribution} ` }
   //Creating new page
    fs.writeFile("README.md", genMarkdown(res), function (err) {
        if (err) {
            console.log(err)
        }
        console.log("Sucess!")
    });

})

  //use ress that come back from inquirer - pass those into my generate readme function


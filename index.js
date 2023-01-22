const fs = require('fs');
const inquirer = require('inquirer');
const questions = [
    {
        type: 'input', // This prompt is for the user to enter the name of their project.
        message: 'What is the name of your project?',
        name: 'projectName',
    },
    {
        type: 'input', // This area is for if the user would like to add a table of contents for longer README files.
        message: 'Please list your table of contents here if you feel your README will be long.',
        name: 'tableOfContents',
    },
    {
        type: 'input', // This is for the user to add a description of their project.
        message: 'Please describe your project and include items such as: What was your motivation? Why did you build this Project, What problem does it solve? What did you learn?',
        name: 'description',  
    },
    {
        type: 'input', // This is for instructions on installation of the product for the user.
        message: 'What are the installation instructions for your project?',
        name: 'instructions',
    },
    {
        type: 'input', // This is for the creator to provide instructions and examples for use.
        message: 'What are the usage instructions for your project?',
        name: 'usage',
    },
    {
        type: 'list', // This is for the user to select what kind of license the project creator would like to add, if any.
        message: 'Please select a license for your project.',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT license', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License',
                    'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License c3.0',
                'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: 'License',
    },
    {
        type: 'input', // This is for the project creator to list anyone who may have contributed to the creation of the project.
        message: 'Please list any contributing partners, if any.',
        name: 'Contributing'
    },
    {
        type: 'input', // This is for if the project creator would like to write any tests for the project and provide example of how to run them.
        message: 'Please list any tests for your application and provide examples of how to run them.',
        name: 'tests',
    },
    {
        type: 'input', // This area is for the user to add their GitHub account name for users to see your other projects.
        message: 'Please enter your GitHub account name for other users to have the ability to see your other projects.',
        name: 'github',
    },
    {
        type: 'input', // This is for the project creator to add an option for users to contact the creator with any further questions.
        message: 'Please enter your email address for any further questions another user might have.',
        name: 'email',
    },
];

function init() {
    inquirer.prompt(questions).then(data => {
        const userInput = 
            `# ${data.projectName}\n\n\n` + //Takes data from user input for Project Name
            
            `## Table of Contents\n` + //Takes data from user input for Table of Contents
            `${data.tableOfContents}\n\n` +
    
            `## Description\n` + //Takes data from user input for the description
            `${data.description}\n\n` +
    
            `## Installation\n` + //Takes data from user input for Installation Instructions
            `${data.instructions}\n\n` +
    
            `## Usage\n` + //Takes user input data for Usage instructions
            `${data.usage}\n\n` +
    
            `## License\n` + //Takes user input data for License 
            `${data.License}\n\n` +
    
            `## Contributing\n` + //takes user input for all contributions 
            `${data.Contributing}\n\n` +
    
            `## Tests\n` + //Takes data from user input for any tests
            `${data.tests}\n\n` +
    
            `## GitHub\n` + //takes user input for users GitHub username
            `https://www.github.com/${data.github}/\n\n` +
    
            `## Contact\n` + //Takes data from User input for email and how to contact them with further questions.
            `Email: ${data.email}\n\n`;
    
        fs.writeFile(`${data.projectName}.md`, userInput, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Success! Pikachu has evolved into Raichu!");
            }
        });
    });
}
    
init()
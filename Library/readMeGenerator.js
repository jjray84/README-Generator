class Markdown {
    static generateReadme(answers) {
        return `
        # ${answers.title}

        ## Description
        ${answers.description}

        ## Table of Contents
        - [Project Description](#Description)
        - [Usage](#Usage)
        - [Contributing](#Contributing)
        - [Installation](#Installation)
        - [Questions](#Questions)
        - [License](#License)
    
        ## Installation
        ${answers.installation}

        ## Usage
        ${answers.usage}

        ## License
        ${answers.license}

        ## Contributing
        ${answers.contributing}

        ## Tests
        ${answers.tests}

        ## Questions
        ${answers.questions}
        `
    }
};

module.exports = Markdown
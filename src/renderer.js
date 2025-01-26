// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require(`./assets/generateMarkdown.js`)

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        message: `What is the title of the project?`,
        name: `title`,
    },
    {
        type: `input`,
        message: `What is your description?`,
        name: `description`,
    },
    {
        type: `list`,
        message: `Choose your license:`,
        choices: ['MIT', 'Apache', 'GPL'],
        name: `license`,
    },
    {
        type: `input`,
        message: `Who is the author?`,
        name: `author`,
    },
    {
        type: `checkbox`,
        message: `what languages did you used?`,
        choices: [`HTML/CSS, `, `JavaScript, `, `Python, `, `Java, `, `C++`, `PHP`, `TypeScript`, `Swift`, `Ruby`, `Go`],
        name: `languages`,
    },
    {
        type: `input`,
        message: `What is your github username?`,
        name: `github`,
    },
    {
        type: `input`,
        message: `What is your linkedIn Username?`,
        name: `linkedin`,
    },
    {
        type: `input`,
        message: `What is your email?`,
        name: `email`,
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn');
    const hiddenContent = document.getElementById('hidden-content');

    button.addEventListener('click', () => {
        hiddenContent.style.display = 'block';
        button.style.display = 'none';
    })
});

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    const text = generateMarkdown(data);
    const content = 
    `${text}
<details>
<summary>Table of Contents</summary>

* [Title](#${data.title}) 
* [Initial Setup](#initial-setup)
* [Project Setup](#project-setup)
* [Languages](#languages)
* [Usage](#usage)
* [Contribution](#contribution)
* [Questions](#questions)

</details>

# ${data.title}
- ${data.description}

# Initial setup

1. To begin working with this project, you need to have several essential tools installed on your system. Follow these steps to install the necessary tools:

2. Install Visual Studio Code
-Visual Studio Code (VS Code) is a powerful code editor that provides many features to aid in development.
-Download and install Visual Studio Code from [here](https://code.visualstudio.com/Download).
-Follow the installation instructions for your operating system.

3. Install Git (if on Windows)
-Git is a version control system that helps track changes in your code and collaborate with others.

4. Download and install Git from [here](https://git-scm.com/downloads).
-Follow the installation instructions for your operating system.

5. Install Node.js
-Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a browser.
-Download and install Node.js from [here](https://nodejs.org/en).
-Follow the installation instructions for your operating system.

# Project setup

1. [Clone the project repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

2. [Install Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4)

# Usage
- This command-line application helps you generate a high-quality README.md file for your software project. It guides you through entering information and automatically populates the README with content.

## To use the application:
1. Open a terminal window.
2. Navigate to the directory where the application is located (index.js).
3. Run the application using its command (node index.js)

# Languages
${data.languages.join(", ")}

# Contribution
Want to improve this project? Great! We encourage contribution to make this project even better. Here are some ways you can contribute:
- Report Bugs: If you find any issues, please report them.
- Suggest feautures: Do you have an idea for a new feature? Share it with us!
- Contribute code: If you have programming skills, feel free to contribute code to the project.
- Provide feedback: Your feedback on the project is valuable. Let us know what you think!

# Tests
- Here are some tests you can perform to ensure the application works as expected:
1. Basic Functionality: Verify that the application prompts for all required information and generates a README with the expected sections.
2. Title: Enter a project title and confirm it appears as the title of the README.
3. Content: Enter information for each section and check if it populates the corresponding section in the README.
4. License: Choose a license from the list and verify that the appropriate badge and license notice are added to the README.
5. Contact: Enter a GitHub username and email address, and confirm they appear with links in the "Questions" section.
6. Table of Contents Links: Open the generated README and click on the links in the Table of Contents. They should link to the corresponding sections.


# Questions
## Contact Me

- [${data.author}'sPortfolio](https://uwttn.github.io/portfolio/)
- [GitHub](https://github.com/${data.github})
- [LinkedIn](https://www.linkedin.com/in/${data.linkedin})
- [Email](${data.email})
`;

    fs.writeFile(fileName, content, (err) => {
        err ? console.error(err) : console.log(`README.md created successfully!`);
    });
}

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile(`index.html`, answers);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app

init();
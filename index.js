// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
import path from 'path';
import colors from 'colors';

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: "What is the title of your ReadMe?",
    },
    {
    type: 'input',
    name: 'description',
    message: "Please provide a description of your ReadMe.",
    },
    {
    type: 'input',
    name: 'require',
    message: "Please provide a table of contents for your ReadMe.",
    }, 
    {
    type: 'input',
    name: 'creator',
    message: "Please provide creator information for your ReadMe.",
    },
    {
    type: 'input',
    name: 'usage',
    message: "Please provide usage information for your ReadMe.",
    },
    {
    type: 'checkbox',
    name: 'license',
    message: "Please provide license information for your project.",
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
    type: 'input',
    name: 'contributors',
    message: "Please provide contributor information for your ReadMe.",
    },
    {
    type: 'input',
    name: 'name',
    message: "Please provide your name for your project.",
    },
    {
    type: 'input',
    name: 'email',
    message: "Please provide your email for your project.",
    },
    {
    type: 'input',  
    name: 'test',
    message: "Provide walkthrough of required test if applicable.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log(colors.rainbow("Generating README.md."));
        writeToFile('./dist/README.md', generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();

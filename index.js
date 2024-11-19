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
    message: colors.yellow("What is the title of your ReadMe?"),
    },
    {
    type: 'input',
    name: 'description',
    message: colors.green("Please provide a description of your ReadMe."),
    },
    {
    type: 'input',
    name: 'require',
    message: colors.blue("Please provide the requirements needed for your project."),
    }, 
    {
    type: 'input',
    name: 'github',
    message: colors.yellow("Please provide your Github to be added your ReadMe."),
    },
    {
    type: 'input',
    name: 'usage',
    message: colors.green("Please provide usage information for your ReadMe."),
    },
    {
    type: 'list',
    name: 'license',
    message: colors.blue("Please provide license information for your project."),
    choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    {
    type: 'input',
    name: 'contributors',
    message: colors.yellow("Please provide contributor information for your ReadMe."),
    },
    {
    type: 'input',
    name: 'name',
    message: colors.green("Please provide your name for your project."),
    },
    {
    type: 'input',
    name: 'email',
    message: colors.blue("Please provide your email for your project."),
    },
    {
    type: 'input',  
    name: 'test',
    message: colors.yellow("Provide walkthrough of required test if applicable."),
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

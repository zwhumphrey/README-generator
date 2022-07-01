// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./src/generateMarkdown.js");

console.log("Answer the following questions and you will be provided with a high quality README file!")
// An array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log("You did not enter a title please do so to continue!");
                return false;
            }
        }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("You have successfully created a README file!")
    });
};

// A function to initialize app
function init() {}

// Function call to initialize app
init();

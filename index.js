// Packages needed for this application
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
        validate: userTitle => {
            if (userTitle) {
                return true;
            } else {
                console.log("You did not enter a title please do so to continue!");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "description",
        message: "Add a description of the project.",
        validate: userDescription => {
            if (userDescription) {
                return true;
            } else {
                console.log("Enter a description to continue.");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "installation",
        message: "How do you install your project?",
        validate: userInstallation => {
            if (userInstallation) {
                return true;
            } else {
                console.log("Enter a Installation guide to continue.");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "usage",
        message: "How do you use this project?",
        validate: userUsage => {
            if (userUsage) {
                return true;
            } else {
                console.log("Enter how to use your project to continue.");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "license",
        message: "Add license(s) used for the project.",
        choices: ["MIT", "Unlicense", "WTFPL", "Eclipse", "Apache",  "None of the above"],
        validate: userLicense => {
            if (userLicense) {
                return true;
            } else {
                console.log("Select a license to continue.");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "contribution",
        message: "How can others contribute to this project?",
        validate: userContribution => {
            if (userContribution) {
                return true;
            } else {
                console.log("Answer how can others contribute to this project to continue.");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "test",
        message: "How can we test this project?",
        validate: userTest => {
            if (userTest) {
                return true;
            } else {
                console.log("Answer how can we test this project to continue.");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "questions",
        message: "Any questions of the project? Please enter email to get them answered!",
        validate: userQuestions => {
            if (userQuestions) {
                return true;
            } else {
                console.log("Enter a Questions to continue.");
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
function run() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
run();
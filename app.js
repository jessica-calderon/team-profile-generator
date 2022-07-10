const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateSite = require('./src/generate-site');
// start empty team array
const team = [];

// manager inquire questions
const startManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Employee ID? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your Employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officePhone',
            message: 'Enter your office phone number. (Required)',
            validate: officePhone => {
                if (officePhone) {
                    return true;
                } else {
                    console.log('Please enter your office phone number!');
                    return false;
                }
            }
        }
    ])
    .then(response => {
        console.log(response);
        const manager = new Manager(response.name, response.id, response.email, response.officePhone);
        team.push(manager);
        menuStart();
    })
};
// options to add an engineer, intern, or complete form
const menuStart = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please choose an option:',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish']
        }
    ])
    // continue with questions for selected role or complete team building
    .then(selected => {
        switch (selected.menu) {
            case 'Add an Engineer':
                startEngineer();
                break;
            case 'Add an Intern':
                startIntern();
                break;
            default:
                teamFinish();
        }
    });
};
// return inquire results
const teamFinish = () => {
    console.log(`
    ========================
    Team building completed!
    ========================
    `);
}
// call to start inquire prompts
startManager();
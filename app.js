const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateSite = require('./src/generate-site.js');
const DIST_DIR = path.resolve(__dirname, "dist");
const renderedHTML = path.join(DIST_DIR, "generatedHTML.html");
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
// start engineer inquire
const startEngineer = () => {
    console.log(`
    ==================
    Add a New Engineer
    ==================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name? (Required)",
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the Engineer's Employee ID. (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's Employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the Engineer's email. (Required)",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the Engineer's GitHub username. (Required)",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's GitHub username!");
                    return false;
                }
            }
        }
    ])
    .then(response => {
        console.log(response);
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        team.push(engineer);
        menuStart();
    })
};
// start intern logic
const startIntern = () => {
    console.log(`
    ==================
    Add a New Intern
    ==================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Intern's name? (Required)",
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log("Please enter the Intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the Intern's Employee ID. (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's Employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the Intern's email. (Required)",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter the Intern's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the Intern's school name! (Required)",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log("Please enter the Intern's school name!");
                    return false;
                }
            }
        }
    ])
    .then(response => {
        console.log(response);
        const intern = new Intern(response.name, response.id, response.email, response.school);
        team.push(intern);
        menuStart();
    })
};
// return inquire results
const teamFinish = () => {
    console.log(`
    ========================
    Team building completed!
    ========================
    `);
    console.log(team);

// if dist path doesnt exist
if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR)
}
fs.writeFileSync(renderedHTML, generateSite(team), "utf-8");
}
// call to start inquire prompts
startManager();
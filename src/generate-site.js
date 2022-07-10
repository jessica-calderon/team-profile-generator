// generate team logic to hold cards for different roles
const generateTeam = (team) => {
    console.log(team);
    const teamData = [];
// generate manager card logic and html
const generateMgr = manager => {
        console.log(manager);
        let mgrData = `
<div class="card">
        <header class="card-header has-background-primary">
            <p class="card-header-title has-text-white">
            ${manager.name} <br>
            Manager
        </header>
        <div class="card-content has-background-white-ter">
            <div class="content has-background-white">
                <ul class="list">
                    <li>${manager.id}</li>
                    <li><span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                    <li>Office Number: <a href="tel:${manager.officePhone}">${manager.officePhone}</a></li>
                </ul>
            </div>
        </div>
</div>
        `;
        teamData.push(mgrData);
    }
// generate engineer card logic and html
const generateEngineer = engineer => {
        console.log(engineer);
        let engineerData = `
<div class="card">
        <header class="card-header has-background-primary">
            <p class="card-header-title has-text-white">
            ${engineer.name} <br>
            Engineer
        </header>
        <div class="card-content has-background-white-ter">
            <div class="content has-background-white">
                <ul class="list">
                    <li>${engineer.id}</li>
                    <li><span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                    <li>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
</div>
        `;
        teamData.push(engineerData);
    }
} 
// generate intern card logic and html 
const generateIntern = intern => {
    console.log(intern);
    let internData = `
<div class="card">
    <header class="card-header has-background-primary">
        <p class="card-header-title has-text-white">
        ${intern.name} <br>
        Intern
    </header>
    <div class="card-content has-background-white-ter">
        <div class="content has-background-white">
            <ul class="list">
                <li>${intern.id}</li>
                <li><span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li>School: ${intern.school}</li>
            </ul>
        </div>
    </div>
</div>
    `;
    teamData.push(internData);
}


// build and export html base 
module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css" integrity="sha512-HqxHUkJM0SYcbvxUw5P60SzdOTy/QVwA1JJrvaXJv4q7lmbDZCmZaqz01UPOaQveoxfYRv1tHozWGPMcuTBuvQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../src/style.css" />
    <title>Team Profile Generate</title>
</head>
<body>
    <h1>My Team</h1>
    <main>
        ${generateTeam(team)}
    </main>
</body>
</html>
    `
}
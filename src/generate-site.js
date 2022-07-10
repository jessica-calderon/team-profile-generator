// generate team logic to hold cards for different roles
const generateTeam = (team) => {
    console.log(team);
    const teamData = [];
    // generate manager card logic and html
    const generateMgr = manager => {
        console.log(manager);
        let mgrData = `
    <div class="card m-3 p-auto" style="width: fit-content">
        <header class="card-header has-background-primary">
            <p class="card-header-title has-text-white is-justify-content-center">
            ${manager.name} <br>
            <i class="fa-solid fa-briefcase m-4"></i> Manager</p>
        </header>
        <div class="card-content has-background-white-ter">
        <div class="content has-background-white pt-2 pb-4 pr-5 pl-3 m-1">
                <ul class="list">
                    <li>ID: ${manager.id}</li>
                    <li>Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                    <li>Office #: <a href="tel:${manager.officePhone}">${manager.officePhone}</a></li>
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
    <div class="card m-3 p-auto" style="width: fit-content">
        <header class="card-header has-background-primary">
            <p class="card-header-title has-text-white is-justify-content-center">
            ${engineer.name} <br>
            <i class="fa-solid fa-laptop-code m-4"></i> Engineer
        </header>
        <div class="card-content has-background-white-ter">
        <div class="content has-background-white pt-2 pb-4 pr-5 pl-3 m-1">
                <ul class="list">
                    <li>ID: ${engineer.id}</li>
                    <li>Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                    <li>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
</div>
        `;
        teamData.push(engineerData);
    }
// generate intern card logic and html 
    const generateIntern = intern => {
        console.log(intern);
        let internData = `
    <div class="card m-3 p-auto" style="width: fit-content">
        <header class="card-header has-background-primary">
        <p class="card-header-title has-text-white is-justify-content-center">
        ${intern.name} <br>
        <i class="fa-solid fa-user-graduate m-4"></i> Intern</p>
    </header>
    <div class="card-content has-background-white-ter">
    <div class="content has-background-white pt-2 pb-4 pr-5 pl-3 m-1">
            <ul class="list">
                <li>ID: ${intern.id}</li>
                <li>Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li>School: ${intern.school}</li>
            </ul>
        </div>
    </div>
</div>
    `;
        teamData.push(internData);
    }
    // employee for loop 
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateMgr(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }

    // combine all html elements for mgr, engineer, and intern 
    return teamData.join('');
}

// build and export html base 
module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en" class="has-background-grey-light">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css" integrity="sha512-HqxHUkJM0SYcbvxUw5P60SzdOTy/QVwA1JJrvaXJv4q7lmbDZCmZaqz01UPOaQveoxfYRv1tHozWGPMcuTBuvQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../src/style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Team Profile Generator</title>
</head>
<body>
<div class="has-background-danger has-text-centered has-text-white">
    <h1 class="is-size-2 p-4 mb-5">My Team <i class="fa-solid fa-people-group"></i></h1>
</div>
    <main class="is-flex is-flex-wrap-wrap">
        ${generateTeam(team)}
    </main>
</body>
<footer class="container is-fluid has-text-black p-3 has-text-centered has-background-grey-light">
<h3><i class="fa-solid fa-laptop-code mr-1"></i> Team Profile Generator by Jessica E. Calderon. © 2022. </h3>
</footer>
</html>
    `
}
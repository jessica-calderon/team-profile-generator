const generateTeam (team) => {
    console.log(team);
    const teamData = [];
/*     const generateMgr = manager => {
        console.log(manager);
        let mgrData = `
        // todo: insert html for mgr card
        `;
        teamData.push(mgrData);
    }*/
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
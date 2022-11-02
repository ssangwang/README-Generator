const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Please provide a description of your project.',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'Please describe the installation process of your project',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'How would this project be used in a real world setting?',
      name: 'Usage',
    },
    {
      type: 'input',
      message: 'Were there any contributing developers?',
      name: 'Contributing',
    },
    {
      type: 'input',
      message: 'Please provide tests if any were performed',
      name: 'Tests',
    },
    {
      type: 'input',
      message: 'Which license is this project covered?',
      name: 'License',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'Github',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'Email',
    },
  ])
  .then((response) => {
    const string = JSON.stringify(response);
    const answerString = JSON.parse(string);
    console.log(answerString);
    const { Title, Description, Installation, Usage, Contributing, Tests, License, Github, Email } = answerString;
    fs.writeFile('README.md', `# ${Title}`, (err) => err ? console.error(err) : console.log('Commit logged!'))
    //Description
fs.appendFile('README.md', `
## Description 
${Description}`, (err) => err ? console.error(err) : console.log('Commit logged!'))
//Installation
fs.appendFile('README.md', `
## Installation 
${Installation}`, (err) => err ? console.error(err) : console.log('Commit logged!'))
//Usage
fs.appendFile('README.md', `
## Usage 
${Usage}`, (err) => err ? console.error(err) : console.log('Commit logged!'))
//Contributing
fs.appendFile('README.md', `
## Contributing 
${Contributing}`, (err) => err ? console.error(err) : console.log('Commit logged!'))
//Tests
fs.appendFile('README.md', `
## Tests 
${Tests}`, (err) => err ? console.error(err) : console.log('Commit logged!'))
//License
fs.appendFile('README.md', `
## License
${License}`, (err) => err ? console.error(err) : console.log('Commit logged!'))
//GitHub
fs.appendFile('README.md', `
## Questions
--GITHUB USERNAME--
${Github}
--EMAIL--
${Email}`, (err) => err ? console.error(err) : console.log('Commit logged!'))

  });


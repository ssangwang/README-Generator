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
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
  ])
  .then((response) => {
    const string = JSON.stringify(response);
    const answerString = JSON.parse(string);
    console.log(answerString);
    const {Title, Description, Installation, Usage, Contributing, Tests, License, Github, Email} = answerString;
  });
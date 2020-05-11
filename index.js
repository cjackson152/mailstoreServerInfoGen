const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const buildReadMe =  require('./assets/buildReadMe');
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Please enter username.',
        default: 'Cole'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your Email',
        default: 'cole@vickhouston.com'

    },
    {
        type: 'input',
        name: 'password',
        message: 'Please name your password'

    },

    
];

function writeToFile(filename, data,) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile('README.md', buildReadMe({...inquirerResponses}));
    })
}

init();
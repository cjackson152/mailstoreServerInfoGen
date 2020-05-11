
function buildReadMe(data) {
    return `
    Employee Name
    ==============
    ${data.username}\

    
    Email
    ==============
    ${data.email}\

    
    Password
    ==============
    ${data.password}\
    `
}

module.exports = buildReadMe;
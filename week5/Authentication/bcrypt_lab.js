const bcrypt = require('bcrypt');

const password = 'admin123';

// Hash password synchronously with 10 salt rounds
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, salt);

console.log('Synchronous Hashed Password:', hashedPassword);
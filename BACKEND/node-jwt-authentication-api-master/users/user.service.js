const config = require('config.json');
const jwt = require('jsonwebtoken');

// users hardcoded for simplicity, store in a db for production applications
const users = [
    { id: 'ADMIN1', username: 'admin1', password: 'admin1', firstName: 'Admin', lastName: '1', role: 'ADMIN' },
    { id: 'JUDGE1', username: 'judge1', password: 'judge1', firstName: 'Judge', lastName: '1', role: 'JUDGE' },
    { id: 'USER1', username: 'user1', password: 'user1', firstName: 'User', lastName: '1', role: 'USER' },
];

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) throw 'Username or password is incorrect';

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });

    return {
        ...omitPassword(user),
        token
    };
}

async function getAll() {
    return users.map(u => omitPassword(u));
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}
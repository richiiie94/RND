const express = require('express');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const forbidden = 403;
const notFound = 404;

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the API',
    });
});

app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(forbidden);
        } else {
            res.json({
                message: 'Post created...',
                authData,
            });
        }
    });
});

app.post('/api/login', (req, res) => {
    // !MOCK USER
    const user = {
        id: 1,
        username: 'richard',
        email: 'richard@gmail.com',
        login_time: moment(),
    }

    jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
        res.json({
            token
        });
    });
});

// !FORMAT OF TOKEN
// Authorization: bearer <access_token>

// !VERIFY TOKEN
function verifyToken(req, res, next) {
    // !GET AUTH HEADER VALUE
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        // !SPLIT AT THE SPACE
        const bearer = bearerHeader.split(' ');
        // !GET TOKEN FROM ARRAY
        const bearerToken = bearer[1];
        // !SET THE TOKEN
        req.token = bearerToken;
        // !NEXT MIDDLEWARE
        next();
    } else {
        // !FORBIDDEN
        res.sendStatus(forbidden);
    }
}

app.listen(5000, () => console.log('Server started on port 5000'));
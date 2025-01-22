const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key';

const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access Denied' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid Token' });
        req.user = user;
        next();
    });
};

module.exports = authenticate;

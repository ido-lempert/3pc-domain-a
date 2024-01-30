const express = require('express');
const app = express();
const port = 3000;

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('X-Domain-A', `**${Math.floor(Math.random()*100000)}**`, {
        path: '/',
        sameSite: 'none',
        secure: true,
        maxAge: 24 * 60 * 60 * 1000
    });
    res.send('Hello domain-a');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
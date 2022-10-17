const express = require('express')

const app = express()

const CLIENT_ID = "65962b8f85ec2a7d84bc";
const CLIENT_SECRET = "ce693a32bcb485b32ba4bbec58b322e87c765c05";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    return res.sendFile(__dirname + "/index.html")
});

app.get('/github/callback', (req, res) => {
    const requestToken = req.query.code;
    console.log('requestToken:', requestToken);
    return res.send("Login Success")
});

app.listen(8080, () => {
    console.log('server started on port 8080');
})
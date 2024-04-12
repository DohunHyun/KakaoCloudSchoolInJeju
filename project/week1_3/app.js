import express from 'express';
import path from 'path';

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log('Example app listening on port 3000');
});

app.use(express.static('public'));

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
});
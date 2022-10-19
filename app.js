const express = require('express');
const app = express();
const path = require('path');
const publicFolferPath = path.resolve('public');
app.use(express.static(publicFolferPath));

const APP_PORT = process.env.APP_PORT || 3001
app.listen(APP_PORT, () => {
    console.log(`Servidor corriendo en puerto + ${APP_PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html'))
});

app.get ('/login', (req, res)=>{
    res.sendFile(path.resolve ('./Views/login.html'))
});

app.get ('/register', (req, res)=>{
    res.sendFile(path.resolve ('./Views/register.html'))
});



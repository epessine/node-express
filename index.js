const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/userRoute');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

userRoute(app);

app.get('/', (req, res) => res.send('Hello Express World!'));

app.listen(port, () => console.log(`API rodando na porta ${port}`));

const express =  require('express');
const bodyParser = require('body-parser');

const createUsers = require('./routes/createUsers');
const loginUsers = require('./routes/loginUsers');

const app = express();
const port = 8020;

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false}))

createUsers(app);
loginUsers(app);

app.get('/', (req, res) => res.send('funcionou'));


app.listen(port, () => console.log(`Tudo ok, porta ${port}`))
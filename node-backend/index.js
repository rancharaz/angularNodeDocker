/* init express and modules */
const express = require('express');
const bodyparser = require('body-parser');
cors = require('cors');

/* db file */
const User = require('./models/user');
const sequelize = require('./utils/database');
/*  init express */
const app = express();

/* http request parse body json */
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false })) /* default behaviour */

/* set headers  remove cors problem*/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    next();
})

/* testing route */
app.get('/', (req, res, next) => {
    res.send('Hello world')
})
//adding cors 
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
/* crud routes import directly */
app.use('/users', require('./routes/users'))

/* error handling */
app.use((error, req, res, next) => {
    console.log(error)
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message })
})

/* sync database with orm sequelize */
sequelize
    .sync()
    .then(result => {
        console.log("Database connected");
        app.listen(3000)
    })
    .catch(err => console.log(err))



// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express');
const app=express()
const mysql = require('mysql2')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'usersdb'
})

const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport')
const path = require('path');
const port=8001;
const moment = require('moment')
app.locals.moment = moment;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//middleware setup
app.use(session({
    secret: 'W$q4=25*8%v-}UV',
    resave: true,
    saveUninitialized: true
}));

//passport setup 
app.use(passport.initialize());
app.use(passport.session());


//setup for static resources
app.use(express.static('public'))

app.set('view engine','ejs')
app.set('views','views')

require('./routes/mainroutes')(app, passport);




app.listen(port, () => console.log(`Server is running on port ${port}`));
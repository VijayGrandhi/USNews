// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', test.authenticateToken, (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express');
const app=express()
const mysql = require('mysql2')
const test = require('./login/authservice');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport')
const path = require('path');
const port=8001;
const moment = require('moment')
app.locals.moment = moment;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'usersdb'
})

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

app.post('/login', (req, res,next) => {
    test.logincheck(req.body.username,req.body.password).then((data)=>{ 
        res.json(data);
    });
 })
 app.post('/signin',(req,res,next)=>{
     console.log(req.body.username+""+req.body.password);
      test.sigin(req).then((data)=>{
         res.json({
             token:data,
             expiresIn: '1800s'
         });
 
      });    
 })




app.listen(port, () => console.log(`Server is running on port ${port}`));
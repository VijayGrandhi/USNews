const express = require('express')
const app=express()
const mysql = require('mysql')
const session = require('express-session')

const path = require('path')
const exp = require('constants')
const { pathToFileURL } = require('url')


const port = process.env.PORT||3000;
const bodyParser = require('body-parser');

//Connection to DB
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'overalls',
    database: 'usersDB'
})

// template engine  
app.use(express.static('public'))
app.use(express.json())
app.use(session(
    {secret: 'okie dokie',
    cookie: {maxAge: 60000
    }
}
))

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/signup', (request, response) => {
  
  let username = request.body.username;
  let password = request.body.password;

  if (username && password) {

      connection.query('SELECT * FROM users WHERE username = ?',username, function(error, results, fields) {
          if (error) {
              throw error
          }
          if (results.length > 0) {
              
              response.status(401)
              .send({message: "The username already exists!"})
                              
          }
          else {

              connection.query('INSERT INTO users(username,password) VALUES(?,?)',[username,password],function(error,results,fields) {
                  if (error) {
                      console.log(error)
                  }

                  response.status(200)
                  .send({message: "Successfully signed up!"})
                  

              })
              
          }

      });

  }         
  else {
      response.status(401)
      .send({message: "Please enter username and password!"})
          }


})

app.post('/login',function(request,response) {
  let username = request.body.username;
  let password = request.body.password;
  // response.send(`username: ${request.body.username} password: ${request.body.password}`)

  if (username && password) {
      //if not null execute SQL query

      connection.query('SELECT * FROM users WHERE username = ? AND password = ?',[username,password], function(error, results, fields) {
          if (error) {
              throw error
          }
          if (results.length > 0) {
              //start a session
              request.session['username'] = username;
              console.log("your username is " + request.session['username'])

              console.log("success!")

              response.status(200)
              .send({message: `LOG IN SUCCESS ${username}`})
              

          }
          else {
              // response.send("Incorrect Username and/or password!")
              response.status(401)
              .send({message: "Incorrect Username or password"})
              

          }
          

      });

  }         
  else {
      response.status(401)
      .send({message: "Enter a username and password!"})
      
      }

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const LocalStrategy = require("passport-local").Strategy;
const express = require("express");
const axios = require("axios");
const newsr = express.Router();
const app = express();
const moment = require("moment");
const exp = require("constants");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("API_KEY");
const mysql = require("mysql2");

const math = require("math");
const { Router, response } = require("express");
const path = require("path");

app.locals.moment = moment;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "USNEWS",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Database connected!");
});

module.exports = function (app, passport) {
  // app.post('/search',async(req,res)=>{
  //     const search=req.body.search
  //     // console.log(req.body.search)

  //     try {
  //         var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=c311a717afc94a8a8ee4c60a86822b08`

  //         const news_get =await axios.get(url)
  //         console.log(news_get.data.articles) //news_get.data.articles is the JSON that I can use as prop
  //         res.render('myDashboard',{username:req.user,articles:news_get.data.articles})

  //     } catch (error) {
  //         if(error.response){
  //             console.log(error)
  //         }

  //     }
  // })

  //have to make this '/home'
  app.get("/sample", async (req, res) => {
    try {
      var url =
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c311a717afc94a8a8ee4c60a86822b08";

      const news_get = await axios.get(url);
      // console.log(news_get.data.articles)

      // res.render('news'
      // ,{articles:news_get.data.articles}
      // )
      res.json(news_get.data.articles);
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
  });
  app.get("/myDashboard", isLoggedIn, async (req, res) => {
    var newsArray = [];
    var username = req.user;

    connection.query(
      "SELECT * FROM mySubjects WHERE username = ?",
      [username],
      function (error, results, fields) {
        if (error) {
          throw error;
        }
        if (results.length > 0) {
          // console.log(results)
          const responses = results.map(({ subject }) => {
            return axios.get(
              `https://newsapi.org/v2/top-headlines?country=us&category=${subject}&apiKey=c311a717afc94a8a8ee4c60a86822b08`
            );
          });

          Promise.all(responses).then((response) => {
            newsArray.push(response[0].data.articles);
            // console.log(newsArray);
          });
        } else {
          console.log("theres nothing here");
        }
      }
    );

    try {
      var url =
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c311a717afc94a8a8ee4c60a86822b08";

      const news_get = await axios.get(url);
      // console.log(news_get.data.articles)

      res.render("myDashboard", {
        username: req.user,
        articles: news_get.data.articles,
      });
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }

    // res.render('myDashboard',{username:req.user});
  });

  // app.get('/login', (req, res) => {
  //     res.render('login');
  // });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
  });

  app.get("/test", function (req, res) {
    console.log("Here is the req " + req);
    console.log("Here is the req.user " + req.user);
    res.json(req.user);
  });

  app.post(
    "/login01",
    passport.authenticate("local", {
     failureRedirect: "/",
    //   // successRedirect: '/myDashboard'
      successRedirect: "/home",
        //failureFlash: true
    })
  );

  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true,
      },
      (req, username, password, done) => {
        if (username && password) {
          connection.query(
            "SELECT * FROM users WHERE username = ? AND password = ?",
            [username, password],
            function (error, results, fields) {
              if (error) {
                console.log("error: "+error);
                throw error;
              }
              if (results.length > 0) {
                console.log("you GOT LOGGED IN!");
                return done(null, username);
              } else {
                console.log("INVALID USERNAME PASSWORD");
                return done(null, false, { message: "You failed to log in." });
              }
            }
          );

          // return done(null, {username: username});
        } else {
          // return done(null, false);
        }
      }

      // {
      //     if(username === 'test@gmail.com' && password === '1234') {
      //         return done(null, {username: 'test@gmail.com'});
      //     } else {
      //         return done(null, false);
      //     }
      // }
    )
  );

  passport.serializeUser((user, done) => {
    return done(null, user);
  });

  passport.deserializeUser((user, done) => {
    return done(null, user);
  });

  function isLoggedIn(req, res, done) {
    if (req.user) {
      return done();
    }
    return res.redirect("/login");

    // if(req.isAuthenticated()) {
    //     return next();
    // } else {
    //     return res.redirect('/login');
    // }
  }

  app.get("/aboutUs", isLoggedIn, function (request, response) {
    response.render("settings");
  });

  // app.get('/signUp',function(request,response) {
  //     response.render('signUp')
  // })

  app.post("/mySubjects", function (request, response) {
    //replace with current session USERNAME
    var username = "erica";
    // var username = request.session['username']
    // console.log("your username is " + req.session['username'])
    var subject = request.body["subject"];

    connection.query(
      "INSERT INTO mySubjects(username,subject) VALUES(?,?)",
      [username, subject],
      function (error, results, fields) {
        if (error) {
          console.log(error);
        }

        response.status(200).send(results);
      }
    );
  });

  app.post("/signUp", function (request, response) {
    let username = request.body.username;
    let password = request.body.password;

    if (username && password) {
      connection.query(
        "SELECT * FROM users WHERE username = ?",
        username,
        function (error, results, fields) {
          if (error) {
            throw error;
          }
          if (results.length > 0) {
            response
              .status(401)
              .send({ message: "The username already exists!" });
          } else {
            connection.query(
              "INSERT INTO users(username,password) VALUES(?,?)",
              [username, password],
              function (error, results, fields) {
                if (error) {
                  console.log(error);
                }

                request.session["username"] = username;
                // console.log("your username is " + request.session['username'])

                response
                  .status(200)
                  .send({
                    message:
                      "Successfully signed up! Your username is " +
                      request.session["username"],
                  });

                //start a session
              }
            );
          }
          // response.end();
        }
      );
    } else {
      response
        .status(401)
        .send({ message: "Please enter username and password!" });
    }
  });
};

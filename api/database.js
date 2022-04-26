const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "USNEWS",
});
module.exports = {
  CheckUser: function (username, password, email, contactno, usertype) {
    let test = new Promise((resolve, reject) => {
      // connection.connect();
      if (email == "" && contactno == "") {
        query =
          "select * from USERDETAILS where USERNAME='" +
          username +
          "' AND PASS_WORD='" +
          password +
          "'";
        console.log(query);
        connection.query(query, (err, rows, fields) => {
          if (err) {
            reject(err.message);
          } else {
            if (rows.length == 0) {
              resolve({ message: "user does not exists " });
            } else {
              resolve(rows[0]);
            }
          }
        });
      } else {
        query =
          "select USERNAME from USERDETAILS where USERNAME='" +
          username +
          "' AND EMAILID='" +
          email +
          "'";
        console.log(query);
        connection.query(query, (err, rows, fields) => {
          if (err) {
            reject(err.message);
          } else {
            if (rows.length == "0") {
              query1 =
                "insert into USERDETAILS(USERNAME,usertype,PASS_WORD,EMAILID,CONTACT_NO,likes,saved,COMMENTS) values('" +
                username +
                "','" +
                usertype +
                "','" +
                password +
                "','" +
                email +
                "','" +
                contactno +
                "','0','0','0')";
              connection.query(query1, (error, row, field) => {
                if (error) {
                  reject(error.message);
                } else {
                  resolve("USERINSERTED");
                }
              });
            } else {
              console.log(rows);
              resolve("USEREXISTS");
            }
            // console.log('The solution is: ', rows[0])
          }
        });
      }
    });
    return test;
  },
  AllArticles: function () {
    let promise = new Promise((resolve, reject) => {
      query = "select * from ARTICLEDETAILS";
      connection.query(query, (err, rows, fields) => {
        if (err) {
          reject(error.message);
        } else {
          resolve(rows);
        }
      });
    });
    return promise;
  },
  getArticleData: function (articleHeader) {
    return new Promise((resolve, reject) => {
      query =
        "select * from ARTICLECOMMENTS where ARTICLEHEADER='" +
        articleHeader +
        "'";
      connection.query(query, (err, rows, fields) => {
        if (err) {
          reject(error.message);
        } else {
          resolve(rows[0]);
        }
      });
    });
  },
  getSavedArticles: function (username) {
    return new Promise((resolve, reject) => {
      query =
        "select ARTICLEHEADER from ARTICLECOMMENTS where USERNAME='" +
        username +
        "' AND COMMENTS='saved'";
      connection.query(query, (err, rows, fields) => {
        if (err) {
          reject(err.message);
        } else {
          if (rows.length == 0) {
            resolve({ message: "data does not exists " });
          } else {
            resolve(rows);
          }
        }
      });
    });
  },
  getArticleData: function (articleHeader) {
    return new Promise((resolve, reject) => {
      query =
        "select * from ARTICLEDETAILS where ARTICLEHEADER='" +
        articleHeader +
        "'";
      connection.query(query, (err, rows, fields) => {
        if (err) {
          reject(error.message);
        } else {
          resolve(rows[0]);
        }
      });
    });
  },
  getComments: function (articleheader) {
    return new Promise((resolve, reject) => {
      query =
        "select * from ARTICLECOMMENTS where ARTICLEHEADER='" +
        articleheader +
        "'";
      connection.query(query, (err, rows, fields) => {
        if (err) {
          reject(err.message);
        } else {
          if (rows.length == 0) {
            resolve({ message: "data does not exists " });
          } else {
            resolve(rows[0]);
          }
        }
      });
    });
  },
  SaveArticleData:function(ARTICLEHEADER,ARTICLEDESC,ARTICLEAUTHOR,ARTICLEURL,ARTICLEURLTOIMAGE,PUBLISHEDAT,CONTENT,COMMENTS,username,Datetime)
    {
        return new Promise((resolve,reject)=>{
            query="select ARTICLEHEADER from ARTICLEDETAILS where ARTICLEHEADER='"+ARTICLEHEADER+"'";
            console.log(query);
                         connection.query(query,(err,rows,fields)=>{
                 if(err){
                       reject(err.message)
                 }
                 else{
                     console.log("working");
                 if(rows.length==0){
                     if(COMMENTS=='like'){
                        console.log("working");

                         key="'1','0','0'";
                     }
                     else if(COMMENTS=='saved'){
                        console.log("savking");

                         key="'0','1','0'";
                     }
                     else{
                        console.log("comming");

                         key="'0','0','1'";
                     }

                    query1="insert into ARTICLEDETAILS(ARTICLEHEADER,ARTICLEDESC ,ARTICLEAUTHOR,ARTICLEURL,ARTICLEURLTOIMAGE,PUBLISHEDAT,CONTENT,LIKES,SAVES,COMMENTS) VALUES('"+ARTICLEHEADER+"','"+ARTICLEDESC+"','"+ARTICLEAUTHOR+"','"+ARTICLEURL+"','"+ARTICLEURLTOIMAGE+"','"+PUBLISHEDAT+"','"+CONTENT+"',"+key+")";
                    connection.query(query1,(error,row,field)=>{
                        if(error){
                            reject(error.message)
                        }
                        else{
                            query2="insert into ARTICLECOMMENTS(COMMENTS ,USERNAME,DATEANDTIME,ARTICLEHEADER) VALUES('"+COMMENTS+"','"+username+"','"+Datetime+"','"+ARTICLEHEADER+"');";
                            connection.query(query2,(errors,roww,feildds)=>{
                                if(errors){
                                    reject(errors.message)
                                }
                                else{
                                    resolve(rows[0])
                                }
                            })
                        }            
                    })
                 }
                
                 else{
                    if(COMMENTS=='like'){
                        query= "select LIKES from articledetails where ARTICLEHEADER='"+ARTICLEHEADER+"';"; 
                   }
                    else if(COMMENTS=='saved'){
                        query= "select SAVES from articledetails where ARTICLEHEADER='"+ARTICLEHEADER+"';"; 
                    }
                    else{
                        query= "select COMMENTS from articledetails where ARTICLEHEADER='"+ARTICLEHEADER+"';"; 
                    }
                    connection.query(query,(err,rows,fields)=>{
                        if(err){
                            reject(err)
                        }
                        else{
                        if(COMMENTS=='like'){
                            value=parseInt(rows[0].LIKES)+1
                           query1="update articledetails set LIKES='"+value+"' where ARTICLEHEADER='"+ARTICLEHEADER+"'" ;
                           console.log(query1);
                        }
                        else if(COMMENTS=='saved'){
                            value=parseInt(rows[0].SAVES)+1;
                            query1="update articledetails set SAVES='"+value+"' where ARTICLEHEADER='"+ARTICLEHEADER+"'" ;
                            console.log(query1);

                        }
                        else{
                            value=parseInt(rows[0].COMMENTS)+1;
                            query1="update articledetails set COMMENTS='"+value+"' where ARTICLEHEADER='"+ARTICLEHEADER+"'" ;
                            console.log(query1);

                        }
                        connection.query(query1,(error,row,field)=>{
                            if(error){
                                reject(error.message)
                            }
                            query2="insert into ARTICLECOMMENTS(COMMENTS ,USERNAME,DATEANDTIME,ARTICLEHEADER) VALUES('"+COMMENTS+"','"+username+"','"+Datetime+"','"+ARTICLEHEADER+"') "
                            connection.query(query2,(err,rowws,fieldds)=>{
                                if(err){
                                    reject(err.message)
                                }
                                else{
                                resolve(rowws[0]);
                                }
                            })
                        })
                    }
                    })
                 }
                }
             })
            
    })
},
};

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'USNEWS'
  })
module.exports={
    CheckUser:function(username,password,email,contactno,usertype){
        let test=new Promise((resolve,reject)=>{
            // connection.connect();
            if(email==''&& contactno==''){
               query="select * from USERDETAILS where USERNAME='"+username+"' AND PASS_WORD='"+password+"'"
               console.log(query);
               connection.query(query,(err,rows,fields)=>{
                   if(err){
                       reject(err.message)
                   }
                   else{
                       if(rows.length==0){
                           resolve({message:'user does not exists '});
                       }
                       else{
                           resolve(rows[0]);
                       }
                   }
               })
            }
            else{
            query="select USERNAME from USERDETAILS where USERNAME='"+username+"' AND EMAILID='"+email+"'";
            console.log(query);
            connection.query(query,(err, rows, fields) => {
              if(err){
                     reject(err.message);
                }
                 else {
                    if(rows.length=='0'){
                       query1="insert into USERDETAILS(USERNAME,usertype,PASS_WORD,EMAILID,CONTACT_NO,likes,saved,comments) values('"+username+"','"+usertype+"','"+password+"','"+email+"','"+contactno+"','0','0','0')";
                       connection.query(query1,(error,row,field)=>{
                            if(error){
                                reject(error.message);
                            }
                            else{
                                resolve('USERINSERTED');
                            }
                       })
                    }
                    else{
                     console.log(rows);
                     resolve( 'USEREXISTS');
                    }
                // console.log('The solution is: ', rows[0])
                 }
              });
            }
        })
        return test;
    },
    AllArticles:function(){
        let promise=new Promise((resolve,reject)=>{
            query = 'select * from ARTICLEDETAILS';
            connection.query(query,(err,rows,fields)=>{
                if(err){
                    reject(error.message);
                }
                else{
                    resolve(rows[0]);
                }
            })
        });
        return promise;
    },
    getArticleData:function(articleHeader){
        return new Promise((resolve,reject)=>{
          query="select * from ARTICLECOMMENTS where ARTICLEHEADER='"+articleHeader+"'";
          connection.query(query,(err,rows,fields)=>{
            if(err){
                reject(error.message);
            }
            else{
                resolve(rows[0]);
            }
        })
        })
    },
    getSavedArticles:function(username){
        return  new Promise((resolve,reject)=>{
        query="select ARTICLEHEADER from ARTICLECOMMENTS where USERNAME='"+username+"' AND COMMENTS='saved'";
        connection.query(query,(err,rows,fields)=>{
            if(err){
                reject(err.message)
            }
            else{
                if(rows.length==0){
                    resolve({message:'data does not exists '});
                }
                else{
                    resolve(rows[0]);
                }
            }
        })    });
    },
    getArticleData:function(articleHeader){
        return new Promise((resolve,reject)=>{
          query="select * from ARTICLEDETAILS where ARTICLEHEADER='"+articleHeader+"'";
          connection.query(query,(err,rows,fields)=>{
            if(err){
                reject(error.message);
            }
            else{
                resolve(rows[0]);
            }
        })
        })
    },
}
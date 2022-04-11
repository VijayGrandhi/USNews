const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'USNEWS'
  })
module.exports={
    CheckUser:function(username,password,email,contactno){
        let test=new Promise((resolve,reject)=>{
            console.log("database connected");
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
                       query1="insert into USERDETAILS(USERNAME,PASS_WORD,EMAILID,CONTACT_NO) values('"+username+"','"+password+"','"+email+"','"+contactno+"')";
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
    }
}
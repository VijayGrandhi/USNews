const dotenv = require('dotenv');
const db= require('../database');
const jwt = require('jsonwebtoken');
dotenv.config();

module.exports={
    logincheck:function(username,Password){ 
        return new Promise((resolve,reject)=>{
            db.CheckUser(username,Password,'','').then((data)=>{
                console.log(data);
                details=data;
                if(details.EMAILID != null) {
                token=this.GenerateJWT({username:username});
                response=[{
                    token:token,
                    expiresIn: '1800s',
                    username:details.USERNAME,
                    emailId:details.EMAILID,
                    contactNo:details.CONTACT_NO
                }];
                resolve(response);
            } else {
                resolve([{message: "User does not exist!"}])
            }
            });
        })
    },
    sigin:function(request){
        return new Promise((resolve,reject)=>{
            console.log(request.body.username);
            db.CheckUser(request.body.username,request.body.password,request.body.emailId,request.body.contactNo).then((data)=>{
            console.log(data);
            if(data=='USERINSERTED'){
               token=this.GenerateJWT({username:request.body.username});
               console.log("token:"+token);
               resolve(token);
            }
            else{
                resolve('USEREXISTS')
            }
            });
        })
    },
    GenerateJWT:function(username){

        return jwt.sign(username,process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
    },
    authenticateToken:function(req, res, next) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
      
        if (token == null) return res.sendStatus(401)
      
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
          console.log(err)
      
          if (err) return res.sendStatus(403)
      
          req.user = user
      
          next()
        })
      }
      
}
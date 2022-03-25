const https = require('https');

module.exports={
    httpcall:function (url){
        https.get(url,{observe: "response"},resp=>{
        var bodyChunks = [];
        var Respon=[];
        resp.on('data', function(chunk) {
          // You can process streamed parts here...
          bodyChunks.push(chunk);
        }).on('end', function() {
            if(bodyChunks != null){ 
              const BODY= JSON.parse(bodyChunks);
              Respon.push(BODY.articles);
              console.log(JSON.stringify(Respon));
              bodyChunks=null;
            }
            return Respon;            

          })
       
    }).on('error', err => {
        console.log('Error: ', err.message);
        return err.message;
      });
    },
    testfun:function(){
      return'test';
    }
}
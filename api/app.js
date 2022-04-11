const express = require('express')
const app = express()
const https = require('https');
const httpService = require('./httpservice');
const constant= require('./constants');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
const port = 3000
app.use(express.json({strict: false}));
app.use(express.urlencoded()) 

app.get('/headlines', (req, res) => {
    https.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=4beba1cc87394519821078d27cfefd96',{observe: "response",headers:"application/json"}, resp => {
    var bodyChunks = [];
    var BODY;
        resp.on('data', function(chunk) {
          // You can process streamed parts here...
          bodyChunks.push(chunk);
        }).on('end', function() {
        if(bodyChunks != null){      
          BODY= JSON.parse(bodyChunks);
          //console.log(JSON.stringify(BODY))
          }
            // console.log("response"+JSON.stringify(response));
            res.json([{name:BODY.articles}]);
          // ...and/or process the entire body here.
        })

          //   console.log("response:",data);
        }).on('error', err => {
            res.send("error");
            console.log('Error: ', err.message);
          });
  
})
app.post('/education',(req,res)=>{
    let bodyChunks=[];
    let BODY;
    let requestOBJ;
    keys=['BestCountries','BestState','Election','Events','Education','Colleges','GraduateSchool','Ranking']
    var length =keys.length;
    console.log(req.body[0].Keyword);         
    var keyword= req.body[0].Keyword;
      for(i=0;i<length;i++)
      {
        if(keyword==keys[i])
        {
            console.log(constant.BaseURL2+keyword+constant.apiKey);
            https.get(constant.BaseURL2+keyword+constant.apiKey,{observe: "response",headers:"application/json"}, resp => {
              var bodyChunks = [];
               datas=[];
               
                  resp.on('data', function(chunk) {
                    // You can process streamed parts here...
                    bodyChunks.push(chunk);
                  }).on('end', function() {
                  if(bodyChunks != null){   
                    datas= JSON.parse(bodyChunks);
                    //console.log(JSON.stringify(BODY))
                    }
                      // console.log("response"+JSON.stringify(response));
                      res.json([{name:datas.articles}]);
                    // ...and/or process the entire body here.
                  })
          
                    //   console.log("response:",data);
                  }).on('error', err => {
                      res.send("error");
                      console.log('Error: ', err.message);
                    });
                  } 

      } 
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
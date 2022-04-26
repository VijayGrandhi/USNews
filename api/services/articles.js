const db= require('../database');

module.exports = { 
    commentsForArticle :function(request){
        console.log(request);
        return new Promise((resolve,reject)=>{
            db.getArticleData(request).then((data)=>{
                console.log(data);
                resolve(data)
            })
        })
    },
    requestArticles:function(username){
        return new Promise((resolve,reject)=>{
            const response=[];
            db.getSavedArticles(username).then((data1)=>{
                for(i=0;i<data1.length;i++){
                    db.getArticleData(data1[i].ARTICLEHEADER).then((data)=>{
                        data["comments_list"] = [];
                        db.getComments(data.ARTICLEHEADER).then((comments)=>{
                            data["comments_list"].push(comments)
                        })
                        response.push(data)

                        console.log(response.length);
                        console.log(data1.length)
                        if(response.length==data1.length)
                        {
                        console.log("response done");
                    resolve(response);
                        }
                    })
                    
                }
                
                
            })
        })
    },
    ArticleDetails :function(request){
        console.log(request);
        return new Promise((resolve,reject)=>{
            db.getArticleData(request).then((data)=>{
                console.log(data);
                resolve(data)
            })
        })
    },
    allarticle:function(){
        return new Promise((resolve,reject)=>{
            db.AllArticles().then((data)=>{
                responsetest=[];
                for(i=0;i<data.length;i++){
                    // data[i]["comments_list"] = [];
                    //   db.getComments(data[i].ARTICLEHEADER).then((comments)=>{
                    //     data[i]["comments_list"].push(comments);
                    //   })
                      responsetest.push(data[i]);

                }
                resolve(responsetest)
            })
        })
    },
    postComment:function(request){
        return new Promise((resolve,reject)=>{
            console.log(request.ARTICLEHEADER)
            
            db.SaveArticleData(request.ARTICLEHEADER,request.ARTICLEDESC,request.ARTICLEAUTHOR,request.ARTICLEURL,request.ARTICLEURLTOIMAGE,request.PUBLISHEDAT,request.CONTENT,request.COMMENTS,request.username,request.datetime).then((data)=>{
                console.log("hello")
                resolve(data);
            })

        })
    },
}
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
            db.getSavedArticles(username).then((data)=>{
                resolve(data)
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
}
const express=require('express');

// all routes
const router=require('../router/home');
require('../db/main');
const Blog=require('../db/models/blog')
const app=express();

app.use(express.urlencoded({ extended:false }))

app.set('view engine','ejs');
app.use(router);


app.listen(3000,()=>{
    console.log('server is lisnting port number 3000');
})
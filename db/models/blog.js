const mongoose=require('mongoose');

const dataSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:new Date().toString(),
    }
})

const Blog=new mongoose.model('blogy',dataSchema);
module.exports=Blog;
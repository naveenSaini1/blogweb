const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/blogging")
.then(()=>{
    console.log('database connectd');
})
.catch((e)=>{
    console.log(e);
})

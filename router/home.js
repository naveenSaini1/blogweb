const express=require('express');
const req = require('express/lib/request');
const Blog=require('../db/models/blog')
const router=new express.Router();



// for read-more
router.get('/read-more/:id',(req,res)=>{
    Blog.findById({_id:req.params.id})
    .then((data)=>{
        res.render('readMore',{data:data})
    })
    .catch((e)=>{
        res.send(e);

    })
    
})

// for updata

router.post('/edit/:id',(req,res)=>{
    Blog.updateOne({_id:req.params.id},{title:req.body.title,content:req.body.content})
    .then((data)=>{
        res.redirect('/')
    })
    .catch((e)=>{
        res.send(e);
    })
})


// for home page 
router.get('/',(req,res)=>{
    Blog.find()
    .then((data)=>{
        res.render('home',{data:data});
    })
    .catch((e)=>{
        console.log(e);
    })
    
})

router.get('/edit/:id',(req,res)=>{
    Blog.findById({_id:req.params.id})
    .then((data)=>{
        res.render('edit',{data:data});
    })
    .catch((e)=>{
        res.send(e);
    })
})

router.get('/delete/:id',(req,res)=>{
    
    Blog.findByIdAndDelete({_id:req.params.id})
    .then(()=>{
        res.redirect('/');
    })
    .catch((e)=>{
        res.send(e);
    })
})

router.get('/new',(req,res)=>{
    res.render('post');
})

router.post('/new',(req,res)=>{
    const blogData=new Blog(req.body)
    blogData.save()
    .then(()=>{
        res.redirect('/');
    })
    .catch((e)=>{
        res.send(e);
    })

})

module.exports=router;
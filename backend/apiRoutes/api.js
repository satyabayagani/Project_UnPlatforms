const express = require("express")
const router = express.Router()
const db = require('../models')

router.get('/all', (req, res)=>{
    db.datatable.findAll()
    .then(data =>{
        console.log(data)
         res.send(data)
        })
    .catch(err=>console.log(err))    
})

router.post('/create',(req, res)=>{
    db.datatable.create({
        views:1,
        likes:0,
        comments:0,
        shares:0
    })
    .then(data => res.send(data))
    .catch(err=>console.log(err))
})

router.put('/update',(req, res)=>{
    console.log(req.body)
    db.datatable.update({
        likes:req.body.likes,
        shares:req.body.shares,
        views:req.body.views,
        comments:req.body.comments
    },{
        where:{
            id:req.body.id
        }
    })
    .then(data=>res.send("update success"))
    .catch(err=>console.log(err))

router.post('/addComments',(req, res)=>{
    db.comment.create({
        comments:req.body.comments
    })
    .then(res=>res.send("Comment posted succeded"))
    .catch(err=>res.send({message:"error in posting comment",err}))

})

})



module.exports = router;
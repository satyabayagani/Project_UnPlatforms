const express = require("express")
const router = express.Router()
const db = require('../models')

router.get('/all', (req, res) => {
    db.datatable.findAll()
        .then(data => {
            console.log(data)
            res.send(data)
        })
        .catch(err => console.log(err))
})

router.post('/create', (req, res) => {
    db.datatable.create({
        views: 0,
        likes: 0,
        comments: 0,
        shares: 0
    })
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

router.put('/updateshares', (req, res) => {
    console.log(req.body)
    db.datatable.update({
        shares: req.body.shares,

    }, {
        where: {
            id: req.body.id
        }
    })
        .then(data => res.send("update success"))
        .catch(err => console.log(err))
})

router.put('/updatelikes', (req, res) => {
    console.log(req.body)
    db.datatable.update({
        likes: req.body.likes,

    }, {
        where: {
            id: req.body.id
        }
    })
        .then(data => res.send("update success"))
        .catch(err => console.log(err))
})

router.put('/updateView', (req, res) => {
    console.log(req.body)
    db.datatable.update({
        views: req.body.views,

    }, {
        where: {
            id: req.body.id
        }
    })
        .then(data => res.send("update success"))
        .catch(err => console.log(err))
})

router.put('/updateComment', (req, res) => {
    console.log(req.body)
    db.datatable.update({
        comments: req.body.comments,

    }, {
        where: {
            id: req.body.id
        }
    })
        .then(data => res.send("update success"))
        .catch(err => console.log(err))
})

router.get('/getcomments', (req, res) => {
    db.comment.findAll()
        .then(data => { res.send(data) })
        .catch(err => console.log("error in retrieving comments from database", err))
})

router.post('/addComments', (req, res) => {
    db.comment.create({
        comments: req.body.comments
    })
        .then(res => res.send("Comment posted succeded"))
        .catch(err => res.send({ message: "error in posting comment", err }))

})



module.exports = router;
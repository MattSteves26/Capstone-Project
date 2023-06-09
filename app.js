const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb } = require('./db')
const cors = require("cors")


//init app & middleware
const app = express()
app.use(express.json())

app.use(
    cors({
    origin:"*",
})
)

// db connection 
let db

connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log('app listening on port 3000')
        })
        db = getDb()
    }
})

//routes
app.get('/Players', (req, res) => {
    let players = []

    db.collection('Players')
        .find()
        .forEach(player => players.push(player))
        .then(() => {
            res.status(200).json(players)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch the documents'})
        })
})

app.get('/Players/:id', (req, res) => {
    
    if (ObjectId.isValid(req.params.id)) {
        db.collection('Players')
        .findOne({_id: new ObjectId(req.params.id)})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not fetch the document'})
        })
    } else {
            res.status(500).json({error: 'Not a valid doc id'})
    }

})

app.post('/Players', (req, res) => {
    const player = req.body

    db.collection('Players')
        .insertOne(player)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create a new document'})
        })
})



app.patch('/Players/:id', (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        db.collection('Players')
        .updateOne({_id: new ObjectId(req.params.id)}, {$set: updates})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not update the document'})
        })
    } else {
            res.status(500).json({error: 'Not a valid doc id'})
    }
})
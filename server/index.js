const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
const friendModel = require('./models/Friends.js')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://kevinnoruwa:justinkevin1@cluster0.ih4to.mongodb.net/mern?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.post('/addfriend', async (req,res) => {

    const name = req.body.name
    const age = req.body.age
    const friend = new friendModel({name: name, age: age}) 
    await friend.save()
    res.send("success")

})


app.get('/read', (req, res) => {
    friendModel.find({}, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
    
})

app.listen(3001, () => {
    console.log("you are connected")
})
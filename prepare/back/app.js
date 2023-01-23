const express = require('express');

const app = express();

const postRouter = require('./routes/post');

const db = require('./models');

db.sequelize.sync()
    .then(()=>{
        console.log('db connect')
    })
    .catch(()=>{
        console.log('error')
    })

app.get('/',(req,res)=>{
    res.send('hello exp');
})

app.use('/post',postRouter);

app.listen(3065, ()=>{
    console.log('run run');
})
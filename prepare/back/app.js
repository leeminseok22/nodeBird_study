const express = require('express');

const app = express();

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');

db.sequelize.sync()
    .then(()=>{
        console.log('db connect')
    })
    .catch((e)=>{
        console.log('error', e)
    })

app.get('/',(req,res)=>{
    res.send('hello exp');
})

app.use('/post', postRouter);

app.use('/', userRouter);

app.listen(3065, ()=>{
    console.log('run run');
})
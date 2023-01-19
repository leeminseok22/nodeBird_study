const express = require('express');

const app = express();

const postRouter = require('router');

app.get('/',(req,res)=>{
    res.send('hello exp');
})

app.use('/post',postRouter);

app.listen(3065, ()=>{
    console.log('run run');
})
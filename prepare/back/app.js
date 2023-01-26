const express = require('express');

const app = express();

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const cors = require('cors');


app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));



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

app.use('/user', userRouter);

app.listen(3065, ()=>{
    console.log('run run');
})
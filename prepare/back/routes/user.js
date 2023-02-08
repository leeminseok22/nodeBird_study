const express = require('express');

const { User } = require('../models');

const bcrypt = require('bcrypt');
const user = require('../models/user');

const router = express.Router();

router.get('/', async (req, res, next)=>{
    try {
        const userList = await User.findAll({
            attributes: ['nickname', 'userid'],
        })
        res.status(201).send(userList);
    } catch(error) {
        console.log(error);
    }
})

router.post('/login', async (req,res,next)=>{
    try {
        const existID = await User.findOne({
            where: {
                userid: req.body.userid,
            }
        })
        if (!existID) return res.status(403).send('not exist');
        // const hashedPassword = await User.findOne({
        //     where: {
        //         userid: req.body.userid,
        //     },
        //     attributes: ['password'],
        // });

        // const isMatch = await bcrypt.compare(req.body.password, hashedPassword);

        // if(!isMatch) return res.status(403).send('not equal');

        const userInfo = await User.findOne({
            where: {
                userid: req.body.userid
            },
            attributes:{
                exclude: ['password']
            },
        })
        res.status(201).json(userInfo);
    } catch (error) {
        console.log(error);
    }

});

router.post('/signup', async (req, res, next)=>{
    try {
        const exUser = await User.findOne({
            where: {
                userid: req.body.userid,
            }
        });

        if(exUser) return res.status(403).send('exist');

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await User.create({
            userid: req.body.userid,
            nickname: req.body.nickname,
            password: hashedPassword,
            phoneNumber: req.body.phoneNumber,
            userColor: 0,
            victory: 0,
            record: 0,
    })
    const userInfo = await User.findOne({
        where: {
            userid: req.body.userid
        },
        attributes:{
            exclude: ['password']
        },
    })
    res.status(201).json(userInfo)
    } catch (error) { 
        console.error(error);
        next(error);
    }
});

router.patch('/color/:id', async (req, res, next)=>{
    try{
        const result = await User.update({
            userColor: req.body.userColor,
        },{
            where: { id: req.params.id },
        });
        //if(!result) return res.status(403).json('fail');
        res.status(200).json('ok');
    } catch (e) {
        console.log(e);
        next(e);
    }
});

module.exports = router;
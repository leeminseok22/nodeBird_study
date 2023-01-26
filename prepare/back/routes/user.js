const express = require('express');

const { User } = require('../models');

const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/', async (req, res, next)=>{
    try {
        const userList = await User.findAll({
            attributes: ['nickname', 'email', 'password'],
        })
        res.status(201).send(userList);
    } catch(error) {
        console.log(error);
    }
})

router.post('/', async (req, res, next)=>{
    try {
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        })

        if(exUser) return res.status(403).send('exist');

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
    })
    res.status(201).send(req.body)
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello router`);
});


router.get('/category', async (req, res) => {

    const { id, category } = req.body;

    if (!id || !category ) {
        return res.status(422).json({ error: "plz filled the properly" });
    }
    try {
            const user = new User({ id, category });

            //yeha pe

            await user.save();

            res.status(201).json({ message: "added successfuly" });

    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
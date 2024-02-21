const express = require('express');
const router = express.Router();


router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Handling Get Requests to Product'
    })
})

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Handling Get Requests to Product'
    })
})

module.exports = router;
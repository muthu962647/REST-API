const express = require('express');
const router = express.Router();


router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Handling Get Requests to Product'
    })
})

router.post('/',(req,res,next) => {
    res.status(200).json({
        message: 'Handling Post Requests to Product'
    })
})

router.get('/:productId',(req,res,next) => {

    const id = req.params.productId;

    res.status(200).send(id);

})

router.patch('/:productId', (req,res,next) => {
    res.status(200).json({
        message: 'Updated Product'
    })
})


router.delete('/:productId', (req,res,next) => {
    res.status(200).json({
        message: 'Deleted Product'
    })
})

module.exports = router;
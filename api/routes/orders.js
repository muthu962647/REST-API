const express = require('express');
const router = express.Router();


router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Handling Get Requests to order'
    })
})

router.post('/',(req,res,next) => {
    res.status(201).json({
        message: 'Handling Post Requests to order'
    })
})

router.get('/:orderId',(req,res,next) => {

    const id = req.params.orderId;

    res.status(200).send(id);

})

router.patch('/:orderId', (req,res,next) => {
    res.status(200).json({
        message: 'Updated order'
    })
})


router.delete('/:orderId', (req,res,next) => {
    res.status(200).json({
        message: 'Deleted order'
    })
})

module.exports = router;
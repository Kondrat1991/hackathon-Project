const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Quote = require('../models/quote');
const jwt = require('jsonwebtoken');

router.post('/', (req, res, next) => {
     const decoded = jwt.decode(req.headers.authorization);
     console.log('decoded', decoded);
     const newQuote = new Quote({
               _id: new mongoose.Types.ObjectId(),
               userId: decoded._id,
               quote: req.body.quote,
               date: req.body.date,
               likes: req.body.likes,
               comments: req.body.comments,
          })
          .save()
          .then(quote => {
               res.status(201).json({
                    Message: "Your quote is posted already",
                   quote: quote,
               })

          })
          .catch(error => {
               res.status(500).json(error) //ошибки сервера статус 500 и выше
          })
});
router.get('/', (req, res, next) => {
     const decoded = jwt.decode(req.headers.authorization);

     Quote.find({
               userId: decoded._id
          })
          .exec()
          .then(collect => {
               res.status(200).json({
                    Message: 'List of your quotes',
                   quotes: collect
               })
          })
          .catch(error => {
               res.status(500).json(error)
          })

});

router.delete('/:id', (req, res, next) => {
    console.log('req params', req.params);
    Quote.findByIdAndRemove(req.params.id)
          .exec()
          .then(quote => {
               res.status(200).json({
                    Message: 'Your quote deleted now ',
                    quoteId: quote._id,
               })
          })
          .catch(error => {
               res.status(500).json(error)
          })
});
module.exports = router;
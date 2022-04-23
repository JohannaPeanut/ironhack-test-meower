'use strict';
const Publication = require('./../models/publication')

const express = require('express');
const router = express.Router();
const routeGuard = require('../middleware/route-guard');

router.get('/', (req, res, next) => {
  Publication.find()
  // telling mongoose to opulate a property  tells it 
  // to fetch documents from the users collecton and replaces the values 
  // of the publication 'creators' properties
  .populate('creator')
  .then((publications) => {
    res.render('home', { publications });
  })
  .catch(error => {
    next(error)
  })
  
});

router.get('/private', routeGuard, (req, res, next) => {
  res.render('private');
});

module.exports = router;

'use strict';

const express = require('express');
const router = express.Router();
const role = require('./role');

router.use('/role', role);

module.exports = router;

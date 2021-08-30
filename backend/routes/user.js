const express = require('express');
const {signup,signin, getUser} = require('../contoller/user')

const router = express.Router();

router.get('/',getUser)
router.post('/signin',signin)
router.post('/signup',signup)

module.exports = router;
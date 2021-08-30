const express = require('express')
const {getPost} = require('../contoller/post.js')
const {createPost,updatePost,deletePost,likePost} = require('../contoller/post.js')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/',getPost);
router.post('/',auth,createPost)
router.patch('/:id',auth,updatePost)
router.delete('/:id',auth,deletePost)
router.patch('/:id/likePost',auth,likePost)
module.exports = router
// Create web server with express framework

// Require express framework
const express = require('express');

// Create router for comment
const router = express.Router();

// Require comment controller
const commentController = require('../app/controllers/CommentController');

// Handle request to /comment/create
router.post('/create', commentController.create);

// Handle request to /comment/update
router.put('/update', commentController.update);

// Handle request to /comment/delete
router.delete('/delete', commentController.delete);

// Handle request to /comment/like
router.put('/like', commentController.like);

// Handle request to /comment/dislike
router.put('/dislike', commentController.dislike);

// Handle request to /comment/getCommentByPost
router.get('/getCommentByPost', commentController.getCommentByPost);

// Handle request to /comment/getCommentByUser
router.get('/getCommentByUser', commentController.getCommentByUser);

// Handle request to /comment/getCommentByComment
router.get('/getCommentByComment', commentController.getCommentByComment);

// Handle request to /comment/getCommentByUserAndPost
router.get('/getCommentByUserAndPost', commentController.getCommentByUserAndPost);

// Handle request to /comment/getCommentByUserAndComment
router.get('/getCommentByUserAndComment', commentController.getCommentByUserAndComment);

// Handle request to /comment/getCommentByPostAndComment
router.get('/getCommentByPostAndComment', commentController.getCommentByPostAndComment);

// Handle request to /comment/getCommentByUserAndPostAndComment
router.get('/getCommentByUserAndPostAndComment', commentController.getCommentByUserAndPostAndComment);

// Handle request to /comment/getCommentByUserAndPostAndComment
router.get('/getCommentByUserAndPostAndComment', commentController.getCommentByUserAndPostAndComment);

// Handle request to /comment/getCommentByUserAndPostAndComment
router.get('/getCommentByUserAndPostAndComment', commentController.getCommentByUserAndPostAndComment);

// Handle request to /comment/getCommentByUserAndPostAndComment
router.get('/getCommentByUserAndPostAndComment', commentController.getCommentByUserAndPostAndComment);

// Handle request to /comment/getCommentByUserAndPostAndComment
router.get('/getCommentByUserAndPostAndComment', commentController.getCommentByUserAndPostAndComment);

// Handle request to

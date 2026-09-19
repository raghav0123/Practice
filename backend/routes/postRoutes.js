const express = require('express');
const Router = express.Router();
const {getAllPosts} = require('../controllers/postController/getAllPosts')
const {createPosts} = require('../controllers/postController/createPost')
module.exports = Router

/*
    Route: '/POSTS' 
    METHOD: GET
    DESC: GET ALL POSTS
    PARAMS: NONE
    ACCESS: PUBLIC
*/
Router.get('/', getAllPosts);

Router.post('/', createPosts);


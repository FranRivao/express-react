const express = require('express');
const { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } = require('../controllers/BlogController');
// const BlogModel = require('../models/BlogModel');

const router = express.Router();

router.get('/', async (req, res) => {
    await getBlogs(req, res);
});

router.get('/:id', async (req, res) => {
    await getBlog(req, res);
});

router.post('/', async (req, res) => {
    await createBlog(req, res)
});
router.put('/:id', async (req, res) => {
    await updateBlog(req, res)
});
router.delete('/:id', async (req, res) => {
    await deleteBlog(req, res)
});

module.exports = router;
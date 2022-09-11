const BlogModel = require('../models/BlogModel');
const helpers = {};

helpers.getBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();
        res.json(blogs);
    } catch (e) {
        res.json({"message": e.message});
    }
}

helpers.getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where: {id: req.params.id}
        });
        res.json(blog);
    } catch (e) {
        res.json({"message": e.message});
    }
}

helpers.createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body);
        res.json({"message": "Blog created succesfully"});
    } catch (e) {
        res.json({"message": e.message});
    }
}

helpers.updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: {id: req.params.id}
        });
        res.json({"message": "Blog updated succesfully"});
    } catch (e) {
        res.json({"message": e.message});
    }
}

helpers.deleteBlog = async (req, res) => {
    try {
        BlogModel.destroy({
            where: {id: req.params.id}
        });
        res.json({"message": "Blog deleted succesfully"});
    } catch (e) {
        res.json({"message": e.message});
    }
}

module.exports = helpers;
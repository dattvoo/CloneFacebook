const PostModel = require("../models/PostModel");

exports.createPost = async (req, res) => {
    try {
        const newPost = await new PostModel(req.body).save();
        return res.send(newPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
const PostModel = require("../models/PostModel");

exports.createPost = async (req, res) => {
    try {
        const newPost = await new PostModel(req.body).save();
        return res.send(newPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
exports.getAllPosts = async function (req, res) {
    try {
        console.log("In Hereeee");
        const posts = await PostModel.find({});
        console.log(posts);
        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
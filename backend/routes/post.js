const express = require("express");
const { createPost, getAllPosts } = require("../controllers/postController");
const { authUser } = require("../middlwares/auth");

const router = express.Router();

router.post("/createPost", authUser, createPost);
router.get("/getAllPosts", authUser, getAllPosts);


module.exports = router;

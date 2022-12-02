const express = require("express");
const { uploadImages } = require("../controllers/upLoadController");
const { authUser } = require("../middlwares/auth");
const imageUpload = require("../middlwares/imageUpload");
const router = express.Router();

router.post("/uploadimages", authUser,imageUpload, uploadImages);


module.exports = router;

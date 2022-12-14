const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET

})

exports.uploadImages = async (req, res) => {
    try {
        const { path } = req.body;
        let files = Object.values(req.files).flat();
        let images = [];
        for (const file of files) {
            const url = await uploadToCloudinary(file, path);
            images.push(url);
            removetmp(file.tempFilePath)
        }
        res.json(images);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const uploadToCloudinary = async (file, path) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            file.tempFilePath,
            {
                folder: path,
            },
            (err, res) => {
                if (err) {
                    removetmp(file.tempFilePath);
                    return res.status(400).json({ message: "Upload image failed" });
                }
                resolve({
                    url: res.secure_url
                })
            }
        )
    })
}


const removetmp = (path) => {
    fs.unlink(path, (err) => {
        if (err)
            throw err;
    })
}



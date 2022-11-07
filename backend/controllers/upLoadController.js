
exports.uploadImages = async (req, res, next) => {
    try {
        return res.json("Welcom to my chanel")
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}
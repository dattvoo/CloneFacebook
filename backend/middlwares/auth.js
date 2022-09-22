const jwt = require("jsonwebtoken");

exports.authUser = async (req, res, next) => {
  try {
    const temp = req.header("Authorization");
    const token = temp ? temp.slice(7, temp.lenght) : "";
    if (!token) {
      return res.status(400).json({ message: "Invaild Authentication" });
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
      if (error) {
        return res.status(400).josn({ message: "Authentication" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

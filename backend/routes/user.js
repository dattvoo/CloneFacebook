const express = require("express");
const { register, activateAccount, login, auth, sendVerification, findUser, senResetPasswordCode } = require("../controllers/user");
const { authUser } = require("../middlwares/auth");

const router = express.Router();


router.post("/register", register);
router.post("/activate", activateAccount);
router.post("/sendVerification", authUser, sendVerification);
router.post("/login", login);
router.post("/auth", authUser, auth);
router.post("/findUser", findUser);
router.post("/sendResetCodeVerification", senResetPasswordCode);
module.exports = router;

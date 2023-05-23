const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = 'Simranisagood$girl';

router.post("/signup", [
    body('Username', 'Enter Your Valid Name ').isLength({ min: 3 }),
    body('Email', 'Enter Your Valid Email').isEmail(),
    body('password', 'password must be atleast 5 character long').isLength({ min: 5 }),
    body('Phone', 'Enter Valid Phone Number').isNumeric(),

], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    try {
        let user = await User.findOne({ Email: req.body.Email });
        if (user) {
            return res.status(400).json({success, error: " Sorry a user with this email already exist" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)
        user = await User.create({
            Username: req.body.Username,
            password: secPass,
            Email: req.body.Email,
            Phone: req.body.Phone,
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authtoken })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some Error Occured")
    }
}
)

// Authenticate a user using: POST "/api/auth/login". 
router.post("/login", [
    body('Email', 'Enter Your Valid Email').isEmail(),
    body('password', 'password cannot be blank').exists(),
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { Email, password } = req.body;
    try {
        let user = await User.findOne({ Email });
        if (!user) {
            success = false;
            return res.status(400).json({ error: "please try to login with correct credentials" })
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            success = false;
            return res.status(400).json({success, error: "please try to login with correct credentials" })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authtoken })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }

})

// Get Loggedin user Details using: post "/api/auth/getuser".
router.post('/getuser', fetchuser, async(req, res)=>{
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }
})
module.exports = router


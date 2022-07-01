const User = require('../models/users');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const {SECRET} = require('../config')

/**
 * @DESC to register the user (ADMIN, SUPER_ADMIN, USER)
 */
const userRegister = async (userData, role, res) => {
   try{
       // Validate the userName
    let userNotTaken = await validateUserName(userData.username);
    if(!userNotTaken){
        return res.status(400).json({
            message: `Username is already taken.`,
            success: false
        });
    }
    // Validate the email
    let emailNotRegistered = await validateEmail(userData.email);
    if(!emailNotRegistered){
        return res.status(400).json({
            message: `email is already Registered.`,
            success: false
        });
    }
    // Get the hashed password
    const password = await bcrypt.hash(userData.password, 12)

    //create a new user
    const newUser = new User({
        ...userData,
        password,
        role: role
    });
    await newUser.save();
    return res.status(201).json({
        message: 'Now you are successfully register',
        success: true
    })
   } catch (err){
       //Implement logger function
       return res.status(500).json({
        message: 'Unable to create a account',
        success: true
    })
   }
};

const userLogin = async (userCreds, role, res) =>{

    let { username, password } = userCreds;
    // First Check the username is in the database
    const user = await User.findOne({  username });
    if(!user){
        return res.status(404).json({
            message: "Username is not found",
            success: false
        });
    }
    //we will check the role
    if(!user.role !== role){
        return res.status(403).json({
            message: "Please make sure you are logging in",
            success: false
        });
    }

    //That means user is existing and trying to signin for the right portal
    // Not check for the password
    let isMatch = await bcrypt.compare(password, user.password)
    if(isMatch){
        // sign in the token and issue it the user
        let token = jwt.sign({
            user_id: user._id,
            role: user.role,
            username: user.username,
            email: user.email
        }, SECRET, {expiresIn: '7 day'});

        let result = {
            username: user.username,
            role: user.role,
            email: user.email,
            token: `Bearer ${token}`,
            expiresIn: 168
        }

        return res.status(200).json({
            ...result,
            message: "You are noe Logged in",
            success: true
        });
     } else {
        return res.status(403).json({
            message: "Incorrect password",
            success: false
        });
    }
}

const validateUserName = async username => {
    let user = await User.findOne({ username});
    return user ? false : true;
}

const validateEmail = async email => {
    let user = await User.findOne({ email });
    return user ? false : true;
}

module.exports = {
    userRegister,
    userLogin
}
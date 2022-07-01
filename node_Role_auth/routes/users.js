const router = require('express').Router();

//Bring in the registration function
const { userRegister, userLogin } = require('../utils/Auth');

//user registration Route
router.post('/register-user', async (req, res) =>{
  await userRegister(req.body, 'user', res)
})

//admin registration Route
router.post('/register-admin', async (req, res) =>{
    await userRegister(req.body, 'admin', res)
})

//Super admin registration Route
router.post('/register-super-admin', async (req, res) =>{
    await userRegister(req.body, 'superadmin', res)
})


//user Login Route
router.post('/login-user', async (req, res) =>{
    await userLogin(req.body, "user", res)
})


//admin Login Route
router.post('/login-admin', async (req, res) =>{
    await userLogin(req.body, "admin", res)
})


//Super admin Login Route
router.post('/login-super-admin', async (req, res) =>{
    await userLogin(req.body, "superadmin", res)
})

//Profile Route 
router.get("profile", async (req, res) => {

})


//user Produced Route
router.post('/user-protectd', async (req, res) =>{

})


//admin Produced Route
router.post('/admin-protectd', async (req, res) =>{

})


//Super admin Produced Route
router.post('/super-admin-protectd', async (req, res) =>{

})


module.exports = router;
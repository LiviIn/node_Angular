const cors = require('cors');
const exp = require('express');
const bp = require('body-parser');
const { connect } = require('mongoose');
const { success, error } = require('consola')
const passport = require('passport');

// Bring in the app constants
const { DB, PORT } = require("./config");

 //Initialize the app
 const app = exp();

//  Middleware
app.use(cors());
app.use(bp.json());
app.use(passport.initialize());

require("./middlewares/passport")(passport)

//Router Middleware
app.use('/api/user', require("./routes/users"));


// connection to the Database 

const startApp = async () => {
    try{
        await connect(DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        success({ 
            message: `Successfully connected with the Database \n${DB}`, 
            badge: true
        })
        //Start Server listening
        app.listen(PORT, () => success({ 
            message: `Server started on PORT ${PORT}`, 
            badge: true})
            );
    } catch (err){
        error({ 
            message: `Unable to connect Database \n${err}`, 
            badge: true
        })
        startApp();
    }
};

startApp();

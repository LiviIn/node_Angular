const { Schema, model } = require('mongoose');

const User = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin", "superadmin"]
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, {timestamps: true})

module.exports = model('Users', User)
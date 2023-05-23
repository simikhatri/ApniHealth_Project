const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    Username: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    }
})
const User = mongoose.model("Users", userSchema);
module.exports = User;
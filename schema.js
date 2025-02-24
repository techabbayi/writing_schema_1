const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const profileSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: [String],
        default: ['user']
    },
    profile: {
        type: profileSchema,
        required: true
    }
    lastLogin: {
        type: Date,
        default: Date.now
    }
});


const user = mongoose.model('user', userSchema);
module.exports = user;
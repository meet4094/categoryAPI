const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

const User = mongoose.model('USER', userSchema);

module.exports = User;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

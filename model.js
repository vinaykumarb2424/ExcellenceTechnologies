const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: 'First name cannot be empty'
    },
    Email: {
        type: String,
        required: 'Email cannot be empty',
        unique: true
    }
});

// Custom validation for email
userSchema.path('Email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('candidate', userSchema);

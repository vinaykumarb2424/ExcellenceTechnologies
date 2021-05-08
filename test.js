const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    Name: {
        type: String
        
    },
    first_round:{
                type: Number
            
    },
    second_round:{
                type: Number
            
    },
    third_round:{
                type: Number,
            
    },
    max:{
                type: Number,
            
    }
});
mongoose.model('test_score', userSchema);

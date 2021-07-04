const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    id: {
        type: String,
        required: 'This field is required'
    },
    name: {
        type: String,
        required: 'This field is required'
    },
    city: {
        type: String,
    },
    gender: {
        type: String,

    },
    phone: {
        type: String,

    }
})

// custom validation for email


mongoose.model('Employee', employeeSchema);
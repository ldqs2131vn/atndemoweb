const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: 'This field is required'
    },
    productName: {
        type: String,
        required: 'This field is required'
    },
    productCategory: {
        type: String,

    },
    price: {
        type: String,

    }
})

// custom validation for email


mongoose.model('Product', productSchema);
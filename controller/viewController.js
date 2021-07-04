const express = require('express');
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const router = express.Router();
const Employee = mongoose.model('Employee');


router.get('/list/product', (req, res) => {
    Product.find((err, docs) => {
        if (!err) {
            res.render("home/productlist", {
                list: docs
            })
        }
    })
})
router.get('/list/employee', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.render("home/employeelist", {
                list: docs
            })
        }
    })
})
module.exports=router;
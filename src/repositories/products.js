'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product')

exports.get = async() => {
    const res = await Product.find({ 
        active: true 
    }, 'title price slug');
    return res;
}

exports.getBySlug = (slug) => {
    return Product
    .findOne({ 
        active: true,
        slug:slug
     }, 'title description price tags slug');
}

exports.getById = (id) => {
    return Product
        .findById(id);
}

exports.getByTag = (tag) => {
    return Product
    .find({
        tags: tag,
        active: true
    }, 'title description price tags slug')
}

exports.create = (data) => {
    var product = new Product(data);
    return product.save()
}

exports.update = (id, data) => {
    return Product
    .findByIdAndUpdate(id,{
        $set:{
            title: data.title,
            description: data.description,
            slug:data.slug,
            price: data.price
        }
    });
}

exports.delete = (id) => {
    return Product
    .findByIdAndRemove(id);
}
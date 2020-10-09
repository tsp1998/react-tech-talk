const express = require('express')
const Product = require('../models/product.model')

const router = express.Router();

//Get Products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find({}).exec();
    if (products && products.length) res.json({ status: 'success', products });
    else throw new Error('No Products Found...');
  } catch (error) {
    next(error)
  }
})

//CREATE Product
router.post('/create', async (req, res, next) => {
  try {
    const product = req.body && req.body.product ? req.body.product : undefined;
    const products = req.body && req.body.products ? req.body.products : undefined;
    if (!product && !products) throw new Error('No Product(s) Provided to Create...')
    else {
      if (product) {
        const newProduct = new Product(product)
        const productCreated = await newProduct.save();
        if (!productCreated) throw new Error('Product Not Created...');
        else {
          res.json({ status: 'success', product: productCreated })
        }
      } else if (products) {
        if (!products.length) throw new Error('Empty Products Array Provided...');
        else {
          const errorMessages = [];
          const productsCreated = [];
          products.forEach(async prod => {
            const newProduct = new Product(prod)
            const productCreated = await newProduct.save();
            if (!productCreated) errorMessages.push(`${prod.name}: Not Created...`);
            else productsCreated.push(productCreated);
          })
          console.log('productCreated', productsCreated)
          if (errorMessages.length === products.length) throw new Error('Products Not Created...');
          else res.json({ status: 'success', productsCreated, errorMessages })
        }
      }
    }
  } catch (error) {
    next(error)
  }
})

//Get Product
router.get('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId;
    if (!productId) throw new Error('You havent provided product Id...');
    else {
      const product = await Product.findById(productId).exec();
      if (!product) throw new Error('No Product Found with this Id...');
      else {
        res.json({ status: 'success', product })
      }
    }
  } catch (error) {
    next(error)
  }
})

//Delete Product
router.delete('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId;
    if (!productId) throw new Error('You havent provided product Id...');
    else {
      const product = await Product.findByIdAndRemove(productId).exec();
      if (!product) throw new Error('No Product Found with this Id to Delete...');
      else {
        res.json({ status: 'success', product })
      }
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router;
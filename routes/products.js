// routes/products.js
import express from 'express';
import { Op } from 'sequelize';
import Product from '../models/Product';

const router = express.Router();

// GET /products with pagination
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  const offset = (page - 1) * pageSize;

  try {
    const products = await Product.findAndCountAll({
      offset,
      limit: pageSize,
    });

    res.json({
      page,
      pageSize,
      totalProducts: products.count,
      products: products.rows,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'An error occurred while fetching products' });
  }
});

//GET /products/new
router.get('/new', async (req, res) => {
  const limit = parseInt(req.query.limit) || 5; // limit ilości produktów, zmieniać wedle uznania, 

  try {
    const newProducts = await Product.findAll({
      where: { year: new Date().getFullYear() },
      limit: limit,
    });

    res.json(newProducts);
  } catch (error) {
    console.error('Error fetching new products:', error);
    res.status(500).json({ error: 'An error occurred while fetching new products' });
  }
});

//GET/products/discount
router.get('/discount', async (req, res) => {
  try {
    const discountProducts = await Product.findAll({
      where: { price: { [Op.lt]: 400 } }, // Tu zmieniamy od jakiej ceny w dół powinny pojawiać się produkty np. teraz od 400 w dół
    });

    res.json(discountProducts);
  } catch (error) {
    console.error('Error fetching discount products:', error);
    res.status(500).json({ error: 'An error occurred while fetching discount products' });
  }
});

// GET /products/:id
router.get('/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    res.status(500).json({ error: 'An error occurred while fetching the product' });
  }
});

export default router;
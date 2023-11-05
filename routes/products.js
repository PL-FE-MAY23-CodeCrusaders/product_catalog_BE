// routes/products.js
import express from 'express';
import Product from '../models/Product'; // Import your Sequelize Product model

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

export default router;

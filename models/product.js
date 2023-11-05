// models/Product.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../src/db';

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.STRING, // Use STRING for the 'id' field
    primaryKey: true,
  },
  category: {
    type: DataTypes.STRING,
  },
  phoneId: {
    type: DataTypes.STRING,
  },
  itemId: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  fullPrice: {
    type: DataTypes.DECIMAL(10, 2),
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  screen: {
    type: DataTypes.STRING,
  },
  capacity: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  ram: {
    type: DataTypes.STRING,
  },
  year: {
    type: DataTypes.INTEGER,
  },
  image: {
    type: DataTypes.STRING,
  },
});

export default Product;

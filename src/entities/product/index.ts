import { getProduct, getProducts, getProductsByCategory } from './api/api';
import { IProduct } from './model/type';
import { validateProductData, validateProductsData } from './model/validator';

export {
  getProduct,
  getProducts,
  getProductsByCategory,
  type IProduct,
  validateProductData,
  validateProductsData
};
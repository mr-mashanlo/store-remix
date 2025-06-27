import { getProduct, getProducts, getProductsByCategory } from './api/api';
import { ProductType } from './model/type';
import { validateProductData, validateProductsData } from './model/validator';

export {
  getProduct,
  getProducts,
  getProductsByCategory,
  validateProductData,
  validateProductsData
};

export type { ProductType };
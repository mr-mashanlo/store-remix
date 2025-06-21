import { getProduct, getProducts } from './api/api';
import { ProductSchema } from './model/schema';
import { ProductType } from './model/type';
import { validateProductData } from './model/validator';

export {
  getProduct,
  getProducts,
  validateProductData
};

export {
  ProductSchema,
  type ProductType
};
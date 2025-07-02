import { createOrder, getOrder, getOrders } from './api/api';
import { ICOrder } from './model/type';
import { validateCreatedOrderData, validateOrderData, validateOrdersData } from './model/validator';

export {
  createOrder,
  getOrder,
  getOrders,
  type ICOrder,
  validateCreatedOrderData,
  validateOrderData,
  validateOrdersData
};
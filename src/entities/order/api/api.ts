import { defaultInstance } from '@/shared/api';

import { IQOrder } from '../model/type';

export const createOrder = async ( order: IQOrder ) => {
  const response = await defaultInstance( 'orders', { method: 'post', body: JSON.stringify( order ) } );
  return await response.json();
};

export const getOrder = async ( id: string ) => {
  const response = await defaultInstance( `orders/${id}` );
  return await response.json();
};

export const getOrders = async () => {
  const response = await defaultInstance( 'orders' );
  return await response.json();
};
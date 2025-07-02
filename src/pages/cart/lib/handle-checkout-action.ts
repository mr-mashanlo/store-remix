import { IQOrders } from '@/entities/cart';
import { cartCookie } from '@/entities/cart/api/cookie.server';
import { getOptions, validateOptionsData } from '@/entities/option';
import { createOrder, validateCreatedOrderData } from '@/entities/order';
import { ICOrder } from '@/entities/order';

export const handleCheckoutAction = async ( request: Request, form: FormData ): Promise<{ order: ICOrder, updatedCookie: string }> => {
  const cookies = request.headers.get( 'Cookie' );
  const cookie = ( await cartCookie.parse( cookies ) ) || {};
  const cart: IQOrders = cookie.cart || [];

  const optionResponse = await getOptions( { 'where[id][in]': cart.map( order => order.option ).join( ',' ) } );
  const options = validateOptionsData( optionResponse );
  const updatedOptions = options.docs.map( order => ( { option: order.id, price: order.price, quantity: cart.find( cart => cart.option === order.id )?.quantity || 0 } ) );

  const address = {
    region: String( form.get( 'region' ) ),
    city: String( form.get( 'city' ) ),
    street: String( form.get( 'street' ) )
  };

  const orderResponse = await createOrder( { address, options: updatedOptions, status: 'processing' } );
  const order = validateCreatedOrderData( orderResponse );
  const updatedCookie = await cartCookie.serialize( {}, { maxAge: 0 } );

  return { order, updatedCookie };
};
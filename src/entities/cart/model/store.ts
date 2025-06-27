import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { VariantsType } from './type';

interface StoreType {
  variants: VariantsType,
  addToCart: ( variantID: string ) => void,
  removeFromCart: ( variantID: string ) => void,
}

const useCartStore = create( persist<StoreType>( set => ( {
  variants: [],

  addToCart: ( variantID ) => set( state => {
    const variant = state.variants.find( variant => variant.id === variantID );
    const variants = state.variants.filter( variant => variant.id !== variantID );
    if ( variant ) return { variants: [ ...variants, { id: variant.id, quantity: variant.quantity + 1 } ] };
    return { variants: [ ...state.variants, { id: variantID, quantity: 1 } ] };
  } ),

  removeFromCart: ( variantID ) => set( state => {
    const variant = state.variants.find( variant => variant.id === variantID );
    const variants = state.variants.filter( variant => variant.id !== variantID );
    if ( !variant ) return { variants: state.variants };
    if ( variant.quantity > 1 ) return { variants: [ ...variants, { id: variant.id, quantity: variant.quantity - 1 } ] };
    return { variants: variants };
  } )
} ), { name: 'cart' } ) );

export default useCartStore;
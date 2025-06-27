import { ProductType } from '@/entities/product';

export function getVariantSearchParam( searchParams: URLSearchParams, data: ProductType ) {
  const selectedVariantID = searchParams.get( 'variant' );
  return data.variants.find( variant => variant.id === selectedVariantID );
}
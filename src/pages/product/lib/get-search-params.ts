import { ProductType } from '@/entities/product';

export function getOptionSearchParam( searchParams: URLSearchParams, data: ProductType ) {
  const selectedOptionID = searchParams.get( 'option' );
  return data.options.find( option => option.id === selectedOptionID );
}
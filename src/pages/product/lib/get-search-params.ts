import { IProduct } from '@/entities/product';

export function getOptionSearchParam( searchParams: URLSearchParams, data: IProduct ) {
  const selectedOptionID = searchParams.get( 'option' );
  return data.options.find( option => option.id === selectedOptionID );
}
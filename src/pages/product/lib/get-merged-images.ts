import { IProduct } from '@/entities/product';

export function getMergedImages( data: IProduct ) {
  const optionImages = data.options.map( option => option.image );
  const totalImages = [ ...data.images, ...optionImages ];
  return Array.from( new Map( totalImages.map( image => [ image.id, image ] ) ).values() );
}
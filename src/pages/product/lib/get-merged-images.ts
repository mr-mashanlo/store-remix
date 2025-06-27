import { ProductType } from '@/entities/product';

export function getMergedImages( data: ProductType ) {
  const variantImages = data.variants.map( variant => variant.image );
  const totalImages = [ ...data.images, ...variantImages ];
  return Array.from( new Map( totalImages.map( image => [ image.id, image ] ) ).values() );
}
import { defaultInstance } from '@/shared/api';

export const getOptions = async ( query?: Record<string, string> ) => {
  const params = new URLSearchParams( query ).toString();
  const response = await defaultInstance( `options?select[product]=false&${params}` );
  return await response.json();
};
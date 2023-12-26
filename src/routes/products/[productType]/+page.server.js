import { redirect } from '@sveltejs/kit';

export const load = async (serverLoadEvent)=> {
    const { fetch, params } = serverLoadEvent;
    const { productType} = params;
    const response = await fetch(`http://localhost:4000/products?type=${productType}`);
    const products = await response.json();
    console.log(productType)
    if (products.length == 0) {
      throw redirect(307, '/'); 
    }
    return {products};
  }
  
import {setProducts} from "/src/stores/products";
export const load = async (loadEvent)=> {
    const { fetch } = loadEvent;
    const response = await fetch('http://localhost:4000/products');
    const products = await response.json();
    setProducts(products);
    return {products};
  }
  
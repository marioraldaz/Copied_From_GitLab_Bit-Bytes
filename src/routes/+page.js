import {setProducts} from "../stores/products";

export const load = async ()=> {
    const response = await fetch('http://localhost:4000/products');
    const products = await response.json();
    setProducts(products);
    return {products};
  }
  
export const load = async ()=> {
    const response = await fetch('http://localhost:4000/products');
    const newProducts = await response.json();
    return newProducts;
  }
  
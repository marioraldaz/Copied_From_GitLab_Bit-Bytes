import { writable } from "svelte/store";
let usedComponents = [];
let products = [];

export function getComponents(component) {
  let productsToReturn = [];
  productsStore.subscribe((data)=>{
    products = data.products;
    for (let product of products) {
      if (product.type==component) {
        productsToReturn.push(product);
      }
    }
    return data;
  });
  return productsToReturn;
}
export function getOffers(){
  let productsToReturn = [];
  productsStore.subscribe((data)=>{
    products = data.products;
    for (let product of products) {
      if (product.sale) {
        productsToReturn.push(product);
      }
    }
    return data;
  });
  return productsToReturn;
}
export function calPrice(components) {
  let totalPrice = 0;
  for (let product of components) {
    totalPrice += product.price;
  }
  return totalPrice;
}

export function getProducts() {
  let productsToReturn = [];
  productsStore.subscribe((data)=>{
    productsToReturn = data.products;
    return data;
  });
  return productsToReturn;
}

export function setProducts(products) {
  productsStore.update((data)=>{
    data.products = products;
    return data;
  });
}
const productsStore = writable({
  usedComponents,
  products
})

export default productsStore;
import { writable } from "svelte/store";
let usedComponents = [];
const products = [];

export function getComponents(component) {
  let array = [];
  console.log("<<<<<<<",products);
  for (let product of products) {
    if (product.type == component) {
      array.push(product);
    }
  }
  return array;
}
export function getOffers(){
  let array = [];
  for (let product of products) {
    if (product.sale) {
      array.push(product);
    }
  }
  return array;
}
export function calPrice(components) {
  let totalPrice = 0;
  for (let product of components) {
    totalPrice += product.price;
  }
  return totalPrice;
}

export function getProducts() {
  return products;

}
export default writable({
  usedComponents,
})

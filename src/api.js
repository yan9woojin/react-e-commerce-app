const BASE_URL = "https://fakestoreapi.com";

const api = {
  async getProducts(category) {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    const products = await response.json();
    return products;
  },

  async getProduct(productId) {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    const product = await response.json();
    return product;
  },
};

export default api;

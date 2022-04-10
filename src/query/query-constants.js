export const QUERY_CONSTANTS = {
  GetAllProducts: "products",
  GetSingleProduct: (productId) => `products/${productId}`,
  GetAllCarts: "carts",
  GetUserCart: (userId) => `carts/user/${userId}`,
};

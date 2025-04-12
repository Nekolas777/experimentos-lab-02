import { ShopCart } from "../src/shop-cart";

// pruebas unitarias para la clase ShopCart (4 pruebas)
describe("tests for ShopCart", () => {

  test("should add a product to the cart", () => {
    const cart = new ShopCart();
    // el id del producto se genera aleatoriamente, por lo que no lo comprobamos
    cart.addProduct({ name: "Apple", price: 1.0, quantity: 2 });

    const products = cart.getProducts();
    expect(products).toHaveLength(1);
    // esperamos que el producto añadido tenga las propiedades name, price y quantity
    expect(products[0]).toMatchObject({ name: "Apple", price: 1.0, quantity: 2 });
  });

  test("should increase quantity if the product already exists", () => {
    const cart = new ShopCart();
    // añadimos varios veces el mismo producto
    cart.addProduct({ name: "Apple", price: 1.0, quantity: 2 });
    cart.addProduct({ name: "Apple", price: 1.0, quantity: 3 });

    const products = cart.getProducts();
    // comprobamos que si añadimos el mismo producto varias veces, la cantidad se suma
    expect(products).toHaveLength(1);
    expect(products[0].quantity).toBe(5);
  });

  test("should remove a product from the cart", () => {
    const cart = new ShopCart();
    cart.addProduct({ name: "Apple", price: 1.0, quantity: 2 });
    cart.removeProduct("Apple");

    const products = cart.getProducts();
    // esperamos que el producto haya sido eliminado del carrito
    expect(products).toHaveLength(0);
  });

  test("should throw an error when trying to remove a non-existent product", () => {
    const cart = new ShopCart();
    // esperamos que al ejecutar el método removeProduct con un producto que no existe,
    // se lanza un error
    expect(() => cart.removeProduct("NonExistent")).toThrow(Error);
  });

});
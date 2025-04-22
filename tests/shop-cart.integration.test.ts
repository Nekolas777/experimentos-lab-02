import { ShopCart } from "../src/shop-cart";

describe("ShopCart Integration Tests", () => {
  test("should add multiple products and calculate the total", () => {
    const cart = new ShopCart();

    // Agregar productos al carrito
    cart.addProduct({ name: "Apple", price: 1.0, quantity: 2 });
    cart.addProduct({ name: "Banana", price: 0.5, quantity: 4 });

    // Verificar los productos en el carrito
    const products = cart.getProducts();
    expect(products).toHaveLength(2);

    // Verificar el total
    const total = cart.getTotal();
    expect(total).toBe(4.0); // 2 * 1.0 + 4 * 0.5 = 4.0
  });

  test("should update quantity when adding the same product", () => {
    const cart = new ShopCart();

    // Agregar el mismo producto dos veces
    cart.addProduct({ name: "Apple", price: 1.0, quantity: 2 });
    cart.addProduct({ name: "Apple", price: 1.0, quantity: 3 });

    // Verificar que solo hay un producto en el carrito
    const products = cart.getProducts();
    expect(products).toHaveLength(1);

    // Verificar la cantidad actualizada
    expect(products[0].quantity).toBe(5); // 2 + 3 = 5
  });

  test("should remove a product and update the total", () => {
    const cart = new ShopCart();

    // Agregar productos
    cart.addProduct({ name: "Apple", price: 1.0, quantity: 2 });
    cart.addProduct({ name: "Banana", price: 0.5, quantity: 4 });

    // Eliminar un producto
    cart.removeProduct("Apple");

    // Verificar que solo queda un producto
    const products = cart.getProducts();
    expect(products).toHaveLength(1);
    expect(products[0].name).toBe("Banana");

    // Verificar el total actualizado
    const total = cart.getTotal();
    expect(total).toBe(2.0); // 4 * 0.5 = 2.0
  });

  test("should clear the cart", () => {
    const cart = new ShopCart();

    // Agregar productos
    cart.addProduct({ name: "Apple", price: 1.0, quantity: 2 });
    cart.addProduct({ name: "Banana", price: 0.5, quantity: 4 });

    // Limpiar el carrito
    cart.clearCart();

    // Verificar que el carrito esté vacío
    const products = cart.getProducts();
    expect(products).toHaveLength(0);

    // Verificar que el total sea 0
    const total = cart.getTotal();
    expect(total).toBe(0);
  });

  test("should throw an error when removing a non-existent product", () => {
    const cart = new ShopCart();

    // Intentar eliminar un producto que no existe
    expect(() => cart.removeProduct("NonExistent")).toThrow("Product not found in cart");
  });
});
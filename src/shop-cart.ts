export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// creamos un nuevo tipo de producto que no tiene el id
// ya que el id se genera aleatoriamente al añadir el producto al carrito
type NewProduct = Omit<Product, "id">;

export class ShopCart {
  private products: Product[] = [];

  constructor(products: Product[] = []) {
    // inicializamos el carrito con los productos que se le pasen al constructor
    this.products = products;
  }

  // metodo para añadir un producto al carrito
  public addProduct(product: NewProduct): void {
    // create a new product with a unique id
    const newProduct = { id: Math.floor(Math.random() * 1000000), ...product };

    const existingProduct = this.products.find(
      (p) => p.name === newProduct.name
    );

    // si el producto ya existe en el carrito, aumentamos la cantidad
    // si no existe, lo añadimos al carrito
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.products.push(newProduct);
    }
  }

  // metodo para eliminar un producto del carrito
  public removeProduct(name: string): void {
    const existingProduct = this.products.find((p) => p.name === name);
    if(!existingProduct) throw new Error("Product not found in cart");

    this.products = this.products.filter((p) => p.name !== name);
  }

  // function to get the total price of the products in the cart
  public getTotal(): number {
    return this.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  // metodo para obtener todos los productos del carrito
  public getAllProducts(): Product[] {
    return this.products.map((product) => ({ ...product }));
  }

  // metodo para obtener todos los productos del carrito
  public getProducts(): Product[] {
    return this.products;
  }

  // metodo para obtener un producto por su id
  public clearCart(): void {
    this.products = [];
  }
}


// Example usage

/* const cart = new ShopCart();

cart.addProduct({ name: "Apple", price: 1.0, quantity: 2 });
cart.addProduct({ name: "Banana", price: 0.5, quantity: 3 });

cart.getTotal();
console.log(cart.getProducts());
cart.removeProduct("Apple");
const products = cart.getAllProducts();
console.log(products);
 */
# Diseño de experimentos - lab02 - Carrito de compras

Este proyecto es una implementación de un carrito de compras utilizando TypeScript. Incluye funcionalidades como agregar productos, eliminar productos, calcular el total y realizar pruebas unitarias con [Jest](https://jestjs.io/docs/getting-started).

## Requisitos previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

## Instalación

### 1️⃣ Clonar el repositorio  
Abre una terminal y ejecuta: 

```bash
git clone https://github.com/Nekolas777/experimentos-lab-02.git
cd lab02_shop_cart
```

### 2️⃣ Instalar dependencias
Instala las dependencias del proyecto ejecutando:

```bash
npm install
```

### 3️⃣ Ejecutar pruebas unitarias
Si deseas ejecutar únicamente las pruebas del archivo `shop-cart.test.ts`, utiliza este comando:

```bash
npx jest tests/shop-cart.test.ts
```

### 4️⃣ Ejecutar todas las pruebas
Si deseas ejecutar todas las pruebas unitarias del proyecto, utiliza el siguiente comando:

```bash
npm test
```

Esto ejecutará todas las pruebas definidas en los archivos dentro de la carpeta `tests`.

### 5️⃣ Iniciar el servidor en modo desarrollo
Para iniciar el servidor en modo desarrollo y observar los cambios en tiempo real, utiliza el siguiente comando:

```bash
npm run dev
```
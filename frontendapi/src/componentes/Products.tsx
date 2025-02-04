import React, { useEffect, useState } from 'react';

type Product = {
  _id: string;
  categoria: string;
  producto: string;
  referencia: number;
  tamaño: number;
  medida: string;
  cantidad: number;
  precio: number;
  total: number;
  createdAt: string;
  updatedAt: string;
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:3050/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Productos Disponibles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
          >
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {product.producto}
              </h5>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Categoría: {product.categoria}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Referencia: {product.referencia}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Tamaño: {product.tamaño} {product.medida}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Cantidad: {product.cantidad}
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-4">
                ${product.precio}
              </p>
              <div className="flex justify-between items-center mt-6">
                <a
                  href={`/products/edit/${product._id}`}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Editar
                </a>
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
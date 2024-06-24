import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const products = [
  { id: 1, name: 'MacBook', price: 100000 },
  { id: 2, name: 'Mobile', price: 20000 },
  { id: 3, name: 'Camera', price: 30000 },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

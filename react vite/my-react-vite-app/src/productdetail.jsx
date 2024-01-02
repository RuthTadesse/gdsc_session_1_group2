import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products'; // Sample data

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(item => item.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    // Implement logic to add the product to the cart
    console.log('Added to cart:', product);
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
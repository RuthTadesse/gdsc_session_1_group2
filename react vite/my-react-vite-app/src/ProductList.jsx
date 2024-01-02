import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products'; // Sample data

const ProductItem = ({ id, name, price, image }) => (
  <div className="product-item">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>${price}</p>
    <Link to={/product/${id}}>View Details</Link>
  </div>
);

const ProductList = () => (
  <div className="product-list">
    {products.map(product => (
      <ProductItem key={product.id} {...product} />
    ))}
  </div>
);

export default ProductList;
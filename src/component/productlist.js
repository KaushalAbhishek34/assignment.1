
import React from 'react';
import { Link } from 'react-router-dom';
import './component.css';

const ProductList = ({ products }) => {
  return (
    <div className='main'>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <Link className='link-title' to={`/product/${product.id}`}>
            <img className="thumbnail" src={product.thumbnail} alt="Product Thumbnail" />
            <h2>{product.title}</h2>
          </Link>
          <h4>{product.description}</h4>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
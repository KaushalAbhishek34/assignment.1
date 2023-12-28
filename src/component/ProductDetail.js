import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './shimmer'

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <Shimmer />;
  }

  return (
    <>
      <div className='product-detail'>
        <img className="product-thumbnail" src={product.thumbnail} alt="Product Thumbnail"></img>
        <div className='product-description'>
          <p className='product-title'>{product.title} ({product.description})</p>
          <p>Price: ${product.price}</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          <button className='buy-btn'><i className="bi bi-bag"></i> Buy Now</button>
        </div>
      </div>
      <hr></hr>
      <div>
        <h3>More Images</h3>
        <div className="images">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`img-${index}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
import React from 'react';

const ProductDetail = ({ product, onBackClick }) => {
  return (
    <>
     <button className='back-btn' onClick={onBackClick}><i class="bi bi-caret-left"></i></button>
    <div className='product-detail'>
    <img className="product-thumbnail" src={product.thumbnail} alt="Product Thumbnail"></img>
    <div className='product-description'>
       {/* <h1>{product.title}</h1> */}
        <p className='product-title'>{product.title} ({product.description})</p>
        <p>Price: ${product.price}</p>
        <p>Discount: {product.discountPercentage}%</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <button className='buy-btn'><i class="bi bi-bag"></i> Buy Now</button>
    </div>
    </div>
    <hr></hr>
    <div>
        <h3>More Images</h3>
    <div className="images">
                {product.images.map((image,index) =>(
                    <img key={index} src={image} alt="img"></img>
                ))}
            </div>
    </div>
    </>
  );
};
  export default ProductDetail;
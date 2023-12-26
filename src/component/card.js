import React from 'react';
import './component.css'
const Card = ({ products })=>{
    return (
        <>
        {products.map((product)=>(
            <div className="card" key={product.id}>
            <img className="thumbnail" src={product.thumbnail} alt="Product Thumbnail"></img>
            <h2>{product.title}</h2>
            <h4> {product.description} </h4>
            <div className="details">
            <p>Price : {product.price}</p>
            <p>Category : {product.category}</p>
            </div >
            <div className="details">
            <p>Discount : {product.discountPercentage}%</p>
            <p>Brand : {product.brand}</p>            
            </div>
            <div className="details">
            <p>Rating : {product.rating}</p>
            <p>Stock : {product.stock} </p>
            </div>
            <div className="images">
                {product.images.map((image,index) =>(
                    <img key={index} src={image} alt="img"></img>
                ))}
            </div>
        </div>
        ))}
        </>
    );
}
export default Card;

import React, { useEffect, useState } from 'react';
import './component.css'
const ProductList = ({onProductClick}) => {
    const [products, setProducts] = useState([]);   
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      return (
        <div className='main'>
            {products.map((product)=>(
            <div className="card" key={product.id} >
            <img className="thumbnail" src={product.thumbnail} alt="Product Thumbnail" onClick={() => onProductClick(product)}></img>
            <h2 onClick={() => onProductClick(product)}>{product.title}</h2>
            <h4> {product.description} </h4>
            </div>
        ))}

        </div>
      )
}
export default ProductList;
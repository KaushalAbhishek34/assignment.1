import Card from './card';
import React, { useEffect, useState } from 'react';
import './component.css'
const MainComponent = () => {
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
            <Card products={products} />

        </div>
      )
}
export default MainComponent;
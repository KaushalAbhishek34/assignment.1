import React, { useState } from 'react';
import ProductList from './component/productlist';
import ProductDetail from './component/ProductDetail'
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackButtonClick = () => {
    setSelectedProduct(null);
  };
  return (
    <>
    {selectedProduct ?(
      <ProductDetail product={selectedProduct} onBackClick={handleBackButtonClick} />) : (
        <ProductList onProductClick={handleProductClick} />
      )
    }
    </>
  );
}

export default App;

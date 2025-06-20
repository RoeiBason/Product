import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductCard from './Fetures/ProductCard';

function App() {
  return (
    <div className="App">
      <ProductCard name='zoey' price={666} imageUrl="https://upload.wikimedia.org/wikipedia/commons/9/96/Plains_Zebra_Left_2019-07-25.jpg"></ProductCard>

    </div>
  );
}

export default App;

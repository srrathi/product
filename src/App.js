import React, { useState } from 'react';
import './App.css';
import { ProductContext } from './helpers/Context';
import { MainMenu } from './components/MainMenu';
import { Product } from './components/Product';
import { EndScreen } from './components/EndScreen';


function App() {
  const [pageState, setPageState] = useState("menu");
  const [product, setProduct] = useState();
  const [details, setDetails] = useState({});
  console.log(details);
  console.log(product)
  return (
    <div className="App center-column">
      <h3 className="heading">Product App</h3>
      <ProductContext.Provider value={{ pageState, setPageState, product, setProduct, details, setDetails }}>
        {pageState === "menu" && <MainMenu />}
        {pageState === "product" && <Product />}
        {pageState === "endScreen" && <EndScreen />}
      </ProductContext.Provider>
    </div>
  );
}

export default App;

 
import './App.css';
import { Home } from './componenets/Home';
import {Products} from './componenets/Products'
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './componenets/Navbar';
import { ProductDetails } from './componenets/ProductsDetails';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>  
        <Route path="/products" element ={<Products />}></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
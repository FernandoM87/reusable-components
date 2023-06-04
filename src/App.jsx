import React from 'react';
import './App.module.css'
import Cart from './components/Cart';
import Button from './components/Button';
import Input from './components/Input';
import Navbar from './components/Navbar';


function App() {
  const [cart, setCart] = React.useState([]);

  const type = "text";
  const id = "name";
  const name = "name";  
  const placeholder = "Enter your name";

  return (
    <div className="App">

      <div class="flex flex-row ">

      <Navbar 
        menuItems={["Home", "About", "Contact"]}
      />

      </div>
      
      <Cart
        cart={cart}
        setCart={setCart}
        
      />
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
      
      <Button
        innerText="Click here"
      />

    </div>
  )
}

export default App

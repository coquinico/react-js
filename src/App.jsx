
import { useState, createContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import MercadoLibre from './components/MercadoLibre/MercadoLibre' practica\
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import "./App.css"
import { CartProvider } from "./context/cartcontext.jsx"
import { NotificationProvider } from './notification/NotificationService'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout.jsx'
export const CartContext = createContext()

function App() {
 

  return (
    <>
      <BrowserRouter> 
      <NotificationProvider>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Music Store"} />}/>
          <Route path="/item/:productId" element={ <ItemDetailContainer  />}/>
          <Route path="/category/:categoryId" element={ <ItemListContainer greeting={"Productos filtrados en "} />}/>
          <Route path='/cart' element={<CartView />} />
          <Route path='/checkout' element={<Checkout />} />
       
          {/* <MercadoLibre/> */}
        </Routes>
      </CartProvider>
      </NotificationProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

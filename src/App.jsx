
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import MercadoLibre from './components/MercadoLibre/MercadoLibre' practica\
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom" 

function App() {
 

  return (
    <>
      <BrowserRouter> 
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Music Store"} />}/>
          <Route path="/item/:productId" element={ <ItemDetailContainer />}/>
          <Route path="/category/:categoryId" element={ <ItemDetailContainer greeting={"Listado de los Productos filtrados"} />}/>
          {/* <MercadoLibre/> */}
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
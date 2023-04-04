import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductProvider from "./Context/ProductProvider";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";


function App() {
  

  return (
   <div>
    <ProductProvider>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/cart:id" element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
   </div>
  )
}

export default App

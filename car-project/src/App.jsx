import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductProvider from "./Context/ProductProvider";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";


function App() {
  

  return (
   <div className="dark:bg-blue-950 text-black duration-100">
    <ProductProvider>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/cart:id" element={<CartPage/>}/>
         <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
   </div>
  )
}

export default App

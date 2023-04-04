import { products } from "../../data";
import React, { useContext, useReducer, useState } from 'react';
import ReduceProduct from "./ReduceProduct";

const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();


const ProductProvider = ({children}) => {
    const [productsData , dispatch] = useReducer(ReduceProduct, products);

    return ( 
        <ProductsContext.Provider value={productsData}>
            <ProductsContextDispatcher.Provider value={dispatch}>
                {children}
            </ProductsContextDispatcher.Provider>
        </ProductsContext.Provider>
     );
}
 
export default ProductProvider;

export const useProduct = () => useContext(ProductsContext);
export const useProductActions = () => useContext(ProductsContextDispatcher);
import { products } from "../../data";

const ReduceProduct = (state,action) => {
   switch(action.type){
    case "filter": {  
        const value = action.selectedOption.value;
             if(value === ""){
                return products;
             }else {
                const updatedProducts = products.filter((p) => p.availableName.indexOf(value) >= 0)
                console.log(updatedProducts)
                return updatedProducts;
            }
    }
    case "sort": {
        const value = action.sortedOption.value;
        const product = [...state]
         if(value === "Lowest"){
            const sortedProducts = product.sort((a,b) => {
                if(a.price > b.price){
                    return 1;
                }
                if(a.price < b.price){
                    return -1;
                }
                return 0;
            })
            return sortedProducts;
         }else{
            const sortedProducts = product.sort((a,b) => {
                if(a.price < b.price){
                    return 1;
                }
                if(a.price > b.price){
                    return -1;
                }
                return 0;
            })
            return sortedProducts;
         }
    }
    case "search" : {
        const value = action.event.target.value;
        if(value === ""){
            return products;
        } else {
            const filterProducts = state.filter((p) => 
            p.name.toLowerCase().includes(value.toLowerCase()))
            return filterProducts;
        }
    }
    default:
        return state;
   }
}
 
export default ReduceProduct;
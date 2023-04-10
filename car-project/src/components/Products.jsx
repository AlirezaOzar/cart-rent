import {RiHeart3Fill, RiGasStationFill} from "react-icons/ri";
import {BsFillPersonFill, BsEmojiWinkFill} from "react-icons/bs";
import { useEffect, useState } from "react";
import { useProduct, useProductActions } from "../Context/ProductProvider";
import { NavLink } from "react-router-dom";
import ControlledAccordions from "../common/According";
import SwipeableEdgeDrawer from "../common/BottemSheet";
import Like from "./LikeButtom";


const Products = () => {
  const product = useProduct();
  const [noneElement , setNoneElement] = useState(6);
 
   
   const slice = product.slice(0,noneElement);
    
    const loadmore = () => {
      setNoneElement(noneElement + noneElement)
    }  
   
    

    if(product.length === 0) 
    return ( 
       <div className="flex justify-center pt-10 font-semibold  text-slate-400 items-center flex-col">
        <p> There is no Car, Come back soon...</p>
        <BsEmojiWinkFill className="text-4xl mt-6 text-blue-500"/>
      </div>
      )
    return ( 
        <div className="flex flex-col  md:flex-row-reverse justify-center md:gap-6 items-center">
           <div className="hidden md:flex  pl-3">
              <ControlledAccordions/>
           </div>
           <div className=" md:hidden">
              <SwipeableEdgeDrawer/>
           </div>
           <span className="bg-gray-300 pt-3 h-[600px] w-[3px] hidden md:inline-block"></span>
           <div>
           <section className="grid grid-cols-1  lg:grid-cols-3 pt-20 gap-5">
           {slice.map((item) => {
              return (
                   <div className="dark:bg-white shadow-md hover:shadow-xl cursor-pointer transition rounded-xl max-w-[400px] flex flex-col gap-6" key={item.id}>
                   <div className="flex justify-between px-2 pt-3 ">
                      <p className="font-semibold">{item.name}</p>
                       <button  className="flex gap-2 items-center">
                         <Like/>
                       </button>
                   </div>
                   <div className="flex justify-center py-3">
                      <img src={item.image} alt="" />
                   </div>
                   <div className="flex justify-around items-center  text-slate-500">
                     <div className="flex items-center gap-2">
                        <RiGasStationFill/>
                        <p>{item.gas}L</p>
                     </div>
                     <div className="flex items-center gap-2">
                        <BsFillPersonFill/>
                         <p>{item.people} People</p>
                     </div>
                   </div>
                   <div className="flex justify-around items-center py-3">
                      <div>
                         <div className="font-semibold">$ {item.price}/ day</div>
                         <div className="font-semibold text-slate-400 line-through">{item.discount ? `$ ${item.discount}` : null }</div>
                      </div>
                      <NavLink to="/cart:id">
                        <button  className=" bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-800 transition">Rent Now</button>
                      </NavLink>
                   </div>
                </div>
              )
           })}
                  
            </section>
            <div className="flex justify-center pt-4 mb-4">
               <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-800 transition" onClick={() => loadmore()}>show more</button>
             </div>
           </div>
        </div>
       
     );
}
 
export default Products;
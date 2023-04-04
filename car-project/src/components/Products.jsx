import {RiHeart3Fill, RiGasStationFill} from "react-icons/ri";
import {BsFillPersonFill, BsEmojiWinkFill} from "react-icons/bs";
import { useState } from "react";
import { useProduct, useProductActions } from "../Context/ProductProvider";
import { NavLink } from "react-router-dom";


const Products = () => {
  const [like, setLike] = useState(4);
  const [isLike, setIsLike] = useState(false);
  const product = useProduct();
  const [noneElement , setNoneElement] = useState(6);
  const slice = product.slice(0,noneElement);
    
    const loadmore = () => {
      setNoneElement(noneElement + noneElement)
    }  
    const onLikeClick = (id) => {
        const likeFilter = product.filter((item) => item.id === id);
        setIsLike(likeFilter)
        setLike(like + (isLike && +1));
    }

    if(product.length === 0) 
    return ( 
       <div className="flex justify-center pt-10 font-semibold  text-slate-400 items-center flex-col">
        <p> There is no Car, Come back soon...</p>
        <BsEmojiWinkFill className="text-4xl mt-6 text-blue-500"/>
      </div>
      )
    return ( 
        <div className="flex flex-col justify-center items-center">
         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-20 gap-5">
           {slice.map((item) => {
              return (
                   <div className=" shadow-md hover:shadow-xl cursor-pointer transition rounded-xl max-w-[400px] flex flex-col gap-6" key={item.id}>
                   <div className="flex justify-between px-3 pt-3 ">
                      <p className="font-semibold">{item.name}</p>
                       <button onClick={(id) => onLikeClick(id)} className="flex gap-2 items-center">
                          <RiHeart3Fill className={isLike && `text-red-600` }/>
                          <p>{like}</p>
                       </button>
                   </div>
                   <div className="flex justify-center pb-3">
                      <img src={item.image} alt="" />
                   </div>
                   <div className="flex justify-around items-center  text-slate-500 pb-3">
                     <div className="flex items-center gap-2">
                        <RiGasStationFill/>
                        <p>{item.gas}L</p>
                     </div>
                     <div className="flex items-center gap-2">
                        <BsFillPersonFill/>
                         <p>{item.people} People</p>
                     </div>
                   </div>
                   <div className="flex justify-around items-center pb-3">
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
                 <div className="flex justify-center pt-4">
                         <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-800 transition" onClick={() => loadmore()}>show more</button>
                  </div>
        </div>
       
     );
}
 
export default Products;
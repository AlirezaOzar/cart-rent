import "./Drawer.css";
import { useState } from "react";
import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineClose, AiFillCar} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import {CiLogin} from "react-icons/ci"
import {MdFavoriteBorder} from "react-icons/md";



const Drawer = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

     // toggle burger menu change
     const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    return ( 
        <div className="md:hidden">
           <div className="burger-menu" onClick={updateMenu}>
            <div className={isMenuClicked ? "" : "p-2 border rounded-full dark:bg-slate-100"}>
              <div className="text-2xl text-slate-500 dark:text-slate-500 hover:text-blue-600 transition">{isMenuClicked ? null : <BiMenuAltRight/> }</div>
            </div>
           </div>
           <div>
            <div className={menu_class}>
               <div className="flex flex-col justify-start py-10 px-3">
                  <div onClick={() => updateMenu(setIsMenuClicked)}>
                    <AiOutlineClose className="text-slate-400 text-2xl"/>
                  </div>
                  <ul className="flex justify-center items-center flex-col gap-4 mt-10">
                    <NavLink to="/login" className="flex justify-between items-center gap-4 font-semibold hover:bg-slate-200 w-full text-center py-3 px-3 rounded">
                        <CiLogin className="text-slate-500 text-3xl"/>
                        <p className="font-semibold text-slate-500">Login</p>
                    </NavLink>
                    <li className="flex justify-between items-center gap-4 font-semibold hover:bg-slate-200 w-full text-center py-3 px-3 rounded">
                        <MdFavoriteBorder className="text-slate-500 text-3xl"/>
                        <p className="font-semibold text-slate-500">Favorite</p>
                    </li>
                    <NavLink to="/cart:id" className="flex justify-between items-center gap-4 font-semibold hover:bg-slate-200 w-full text-center py-3 px-3 rounded">
                        <AiFillCar className="text-slate-500 text-3xl"/>
                        <p className="font-semibold text-slate-500">Car Rent</p>
                    </NavLink>
                  </ul>
               </div>
            </div>
           </div>           
        </div>
     );
}
 
export default Drawer;
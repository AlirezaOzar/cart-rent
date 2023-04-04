import {RiSearch2Line, RiHeart3Fill, RiSettings5Fill} from "react-icons/ri"
import {IoMdNotifications} from "react-icons/io";
import image from "../assets/img/Image.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="w-full border-b flex justify-between items-center px-2 md:px-6 py-4 bg-white">
            <div className="flex items-center">
                <NavLink to="/">
                  <div>
                    <h2 className="text-3xl text-blue-600 font-semibold cursor-pointer">MORENT</h2>
                  </div>
                </NavLink>
                <div className=" relative hidden md:flex">
                    <input type="search" className=" rounded-2xl border border-slate-300 ml-4 md:w-[300px] pl-10 px-3 py-2 outline-none"placeholder="Search something here"/>
                    <RiSearch2Line className="absolute top-2 left-6 text-2xl text-slate-400"/>
                </div>
            </div>
            <div>
                <div className="flex gap-4 cursor-pointer items-center">
                    <div className="p-2 border rounded-full hidden md:flex">
                      <RiHeart3Fill className="text-2xl text-slate-500 hover:text-red-500 transition"/>
                    </div>
                    <div className="p-2 border rounded-full hidden md:flex">
                        <IoMdNotifications className="text-2xl text-slate-500 hover:text-blue-600 transition"/>
                    </div>
                    <div className="p-2 border rounded-full">
                        <RiSettings5Fill className="text-2xl text-slate-500 hover:text-blue-600 transition"/>
                    </div>
                    <div className="rounded-full w-[40px] h-[40px]">
                        <img src={image} className="rounded-full h-full w-full"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;
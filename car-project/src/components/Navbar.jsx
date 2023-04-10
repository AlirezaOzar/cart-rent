import {RiSearch2Line, RiHeart3Fill, RiSettings5Fill, RiMoonFill ,RiSunFill} from "react-icons/ri"
import {IoMdNotifications} from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import React, { Component } from 'react';
import {ImUser} from "react-icons/im";
import Drawer from "./Drawer/Drawer";



const Navbar = () => {
    const [theme, setTheme] = useState(null)

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: light)').matches){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    },[])

    useEffect(() => {
        if(theme === "light"){
           document.documentElement.classList.add("dark")
        }else{
           document.documentElement.classList.remove("dark")
        }
       },[theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return ( 
        <div className="realtive w-full dark:shadow-2xl dark:border-none  flex justify-center items-center px-2 py-10 md:px-6  bg-white dark:bg-blue-950 duration-500">
          <div className="backdrop-blur-lg bg-white/30 flex justify-between fixed bg-white w-full dark:shadow-2xl dark:border-none shadow items-center px-2 md:px-6 pt-10 pb-5 dark:bg-blue-950 duration-500">
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
                    <button className="p-2 border rounded-full flex dark:bg-slate-100">
                     {theme === "dark" ?   <RiMoonFill className="text-2xl text-slate-500 hover:text-blue-500 transition" onClick={handleThemeSwitch}/> : <RiSunFill className="text-2xl text-slate-500  transition" onClick={handleThemeSwitch}/>}
                    </button>
                    <div className="p-2 border rounded-full hidden md:flex dark:bg-slate-100">
                      <RiHeart3Fill className="text-2xl text-slate-500 dark:text-slate-500 hover:text-red-500 transition"/>
                    </div>
                    <div className="p-2 border rounded-full hidden md:flex dark:bg-slate-100">
                        <IoMdNotifications className="text-2xl text-slate-500 dark:text-slate-500 hover:text-blue-600 transition"/>
                    </div>
                    <NavLink to="/login" className="p-2 border rounded-full hidden md:flex dark:bg-slate-100">
                        <ImUser className="text-2xl text-slate-500 dark:text-slate-500 hover:text-blue-600 transition"/>
                    </NavLink>
                    <div>
                      <Drawer/>
                    </div>
                </div>
              
            </div>
          </div>
        </div>
     );
}
 
export default Navbar;
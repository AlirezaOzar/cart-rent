import { useState } from "react";
import {RiSearch2Line} from "react-icons/ri";
import {AiFillCar} from "react-icons/ai";
import { useProductActions } from "../Context/ProductProvider";

const Search = () => {
    const dispatch = useProductActions();
    const [value, setValue] = useState("");
    
    
    const changeHandler = (e) => {
        dispatch({ type: "search" , event: e })
        setValue(e.target.value)
    }

    return ( 
         <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex items-center gap-3 pt-4">
            <AiFillCar className="text-blue-700 text-3xl"/>
            <label className="font-semibold text-sm text-slate-500">Search car</label>
          </div>
          <input 
             type="search" 
             value={value} 
             onChange={changeHandler}
             className="rounded border border-slate-300 text-sm w-[200px] md:w-[170px]  px-3 py-2 outline-none"
             placeholder="Search..."
              />    
         </div>
     );
}
 
export default Search;
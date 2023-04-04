import { useState } from "react";
import {RiSearch2Line} from "react-icons/ri";
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
          <div className="flex items-center gap-3">
            <span className="bg-blue-700 text-blue-700 rounded-full w-[8px] h-[8px] inline-block"></span>
            <label className="font-semibold">Search car</label>
          </div>
          <input 
             type="search" 
             value={value} 
             onChange={changeHandler}
             className="rounded border border-slate-300 text-sm w-[200px] md:w-[300px]  px-3 py-2 outline-none"
             placeholder="Search..."
              />    
         </div>
     );
}
 
export default Search;
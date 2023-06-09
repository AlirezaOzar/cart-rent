import { useState } from "react";
import { useProductActions } from "../Context/ProductProvider";
import Select from "react-select";
import Filtercomponent from "../common/Filtercomponent";
import Search from "./Search";

const options = [
    {value: "", label:"All"},
    {value: "Santafe", label:"Santafe"},
    {value: "Jeep", label:"Jeep"},
    {value: "Nissan", label:"Nissan"},
]
const sortOptions = [
    {value: "Highest", label:"Highest"},
    {value: "Lowest", label:"Lowest"},
  
]

const Filter = () => {
    const [value , setValue] = useState("");
    const [sort, setSort] = useState("");
    const dispatch = useProductActions();


    const changeHandler = (selectedOption) => {
        dispatch({type:"filter", selectedOption})
        dispatch({type:"sort", sortedOption: sort})
        setValue(selectedOption)
    }

    const sortHandler = (sortedOption) => {
        dispatch({type:"sort", sortedOption})
        setSort(sortedOption)
    }
    return ( 
        <div className="flex flex-col items-center md:gap-10  py-7 px-4 mt-5 rounded-lg bg-white dark:text-black">
           <Filtercomponent value={value} options={options} onChange={changeHandler} title="Sort by Car"/>   
           <Filtercomponent value={sort} options={sortOptions} onChange={sortHandler} title="Sort by price"/>    
           <Search/>
        </div>
     );
}
 
export default Filter;
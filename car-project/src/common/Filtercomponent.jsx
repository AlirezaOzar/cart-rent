import Select from "react-select";
import {MdPriceChange } from "react-icons/md";
import {AiFillCar} from "react-icons/ai";

const Filtercomponent = ({value, onChange, options,title}) => {
    return ( 
      <div className="flex items-center justify-center pt-5 gap-3 flex-col md:flex-row">
        <div className="flex items-center gap-3">
            {title === "Sort by Car" ?  <AiFillCar className="text-blue-700 text-3xl"/> : <MdPriceChange className="text-blue-700 text-3xl"/>}
            <p className="font-semibold text-slate-500 text-sm">{title}</p>
          </div>
         <Select value={value} options={options} onChange={onChange} className="w-[200px] md:w-[200px]"/>
      </div>     
     );
}
 
export default Filtercomponent;
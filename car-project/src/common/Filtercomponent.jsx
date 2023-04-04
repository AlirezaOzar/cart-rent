import Select from "react-select";

const Filtercomponent = ({value, onChange, options,title}) => {
    return ( 
      <div className="flex items-center justify-center pt-5 gap-3 flex-col md:flex-row">
        <div className="flex items-center gap-3">
            <span className="bg-blue-700 text-blue-700 rounded-full w-[8px] h-[8px] inline-block"></span>
            <p className="font-extrabold">{title}</p>
          </div>
         <Select value={value} options={options} onChange={onChange} className="w-[200px] md:w-[300px]"/>
      </div>     
     );
}
 
export default Filtercomponent;
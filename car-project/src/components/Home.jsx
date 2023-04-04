import image2 from  "../assets/img/image 7.png";
import carImg from "../assets/img/image 8.png";


const Home = () => {
    return ( 
        <main className="flex flex-col md:flex-row justify-around pt-10 mx-3 gap-6 md:gap-0">
            <div className=" bg-blue-500 max-w-[640px] xl:min-w-[640px] rounded px-7 py-4">
                <h2 className="text-white text-3xl max-w-[250px] font-semibold">The Best Platform for Car Rental</h2>
                <p className="max-w-[250px] text-white">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                <button className=" rounded-lg border-none bg-blue-400 text-white px-5 py-1 mt-2 hover:bg-blue-700 transition">Rent car</button>
                 <div className="flex justify-center items-center">
                   <img src={image2} alt="" />
                 </div>                
            </div>
            <div className=" bg-blue-400 max-w-[640px] xl:min-w-[640px] rounded px-7 py-4">
                <h2 className="text-white text-3xl max-w-[250px] font-semibold">The Best Platform for Car Rental</h2>
                <p className="max-w-[250px] text-white">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                <button className=" rounded-lg border-none bg-blue-800 text-white px-5 py-1 mt-2 hover:bg-blue-600 transition">Rent car</button>
                 <div className="flex justify-center items-center">
                   <img src={carImg} alt="" />
                 </div>
            </div>
        </main>
     );
}
 
export default Home;
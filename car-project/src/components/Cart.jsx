import VisaImg from "../assets/img/Visa.png";
import PayPal from "../assets/img/PayPal.png";
import Bitcoin from "../assets/img/Bitcoin (1).png";
import { NavLink } from "react-router-dom";
import LayerImg from "../assets/img/ic-security-safety.png";
import image from "../assets/img/Image.png";
import reviews from "../assets/img/Reviews.png";
import image2 from "../assets/img/Profill.png";
import data from "../commentData";
import { useState } from "react";


const Cart = () => {
 const [noneElement, setNoneElement] = useState(1);

 const loadmore = () => {
    setNoneElement(noneElement + noneElement)
 }

 const slice = data.currData.slice(0,noneElement);
 

    return ( 
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 px-4 mt-10 gap-4">
            <div>
                <div className="max-w-[852px] shadow-lg rounded-lg p-4 bg-white">
                    <h2 className="font-semibold">Biling info</h2>
                    <div className="flex justify-between">
                        <p className="text-sm text-slate-400">Please enter your billing info</p>
                        <p className="text-sm text-slate-400">Step 1 of 4</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-5">
                        <div className="flex flex-col text-sm gap-3">
                            <label className="font-semibold">Name</label>
                            <input type="text" className=" outline-none rounded-lg px-5 py-2 bg-slate-100 lg:max-w-[385px]" placeholder="Your name"/>
                        </div>
                        <div className="flex flex-col text-sm gap-3">
                            <label className="font-semibold">Phone Number</label>
                            <input type="number" className=" outline-none rounded-lg px-5 py-2 bg-slat10200 lg:max-w-[385px]" placeholder="Your Phone"/>
                        </div>
                        <div className="flex flex-col text-sm gap-3">
                            <label className="font-semibold">Address</label>
                            <input type="text" className=" outline-none rounded-lg px-5 py-2 bg-slate-100 lg:max-w-[385px]" placeholder="Your Address"/>
                        </div>
                        <div className="flex flex-col text-sm gap-3">
                            <label className="font-semibold">Town/City</label>
                            <input type="text" className=" outline-none rounded-lg px-5 py-2 bg-slate-100 lg:max-w-[385px]" placeholder="Your Town"/>
                        </div>
                    </div>
                </div>
                <div className="max-w-[852px] shadow-lg rounded-lg p-4 bg-white mt-3">
                    <h2 className="font-semibold">Rental Info</h2>
                    <div className="flex justify-between">
                        <p className="text-sm text-slate-400">Please select your rental date</p>
                        <p className="text-sm text-slate-400">Step 2 of 4</p>
                    </div>
                    <div className="pt-5">
                        <div className="flex items-center gap-2">          
                              <span className="bg-blue-700 text-blue-700 rounded-full w-[8px] h-[8px] inline-block"></span>
                              <p className="text-sm font-semibold">Pick-Up</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-5">
                        <div>
                            <div className="flex flex-col text-sm gap-3">
                                <label className="font-semibold">Locations</label>
                                <input type="text" className=" outline-none rounded-lg px-5 py-2 bg-slate-100 lg:max-w-[385px]" placeholder="Select your city"/>
                            </div>
                            <div className="flex flex-col text-sm gap-3 pt-3">
                                <label className="font-semibold">Date</label>
                                <input type="date" className=" outline-none rounded-lg px-5 py-2 bg-slate-100 lg:max-w-[385px]" placeholder="select your date"/>
                            </div>
                        </div>
                        <div>
                          <div className="flex flex-col text-sm gap-3">
                                <label className="font-semibold">Time</label>
                                <input type="time" className=" outline-none rounded-lg px-5 py-2 bg-slate-100 lg:max-w-[385px]" placeholder="select your time"/>
                          </div>
                        </div>
                    </div>
                    <div className="pt-10">
                    <div className="pt-5">
                        <div className="flex items-center gap-2">          
                              <span className="bg-blue-700 text-blue-700 rounded-full w-[8px] h-[8px] inline-block"></span>
                              <p className="text-sm font-semibold">Drop-OFF</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-5">
                        <div className="flex flex-col text-sm gap-3">
                            <label className="font-semibold">Location</label>
                            <input type="text" className=" outline-none rounded-lg px-5 py-2 bg-slate-100 lg:max-w-[385px]" placeholder="Enter your city"/>
                        </div>
                        <div className="flex flex-col text-sm gap-3">
                            <label className="font-semibold">Date</label>
                            <input type="date" className=" outline-none rounded-lg px-5 py-2 bg-slate-100 lg:max-w-[385px]" placeholder="Enter your date"/>
                        </div>
                        <div className="flex flex-col text-sm gap-3">
                            <label className="font-semibold">Time</label>
                            <input type="time" className=" outline-none rounded-lg px-5 py-2 bg-slate-100 lg:max-w-[385px]" placeholder="Your Address"/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="max-w-[852px] shadow-lg rounded-lg p-4 bg-white mt-3">
                 <h2 className="font-semibold">Payment Method</h2>
                    <div className="flex justify-between">
                        <p className="text-sm text-slate-400">Please enter your payment method</p>
                        <p className="text-sm text-slate-400">Step 3 of 4</p>
                    </div>
                    <div className="max-w-[804px] rounded-lg p-4 bg-slate-200 mt-4">
                    <div className="pt-5 flex justify-between">
                        <div className="flex items-center gap-2">          
                              <span className="bg-blue-700 text-blue-700 rounded-full w-[8px] h-[8px] inline-block"></span>
                              <p className="text-sm font-semibold">Credit-Cart</p>
                        </div>
                        <div>
                            <img src={VisaImg} alt="" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-5">
                        <div className="flex flex-col text-sm gap-3">
                            <label className="font-semibold">Card Number</label>
                            <input type="number" className=" outline-none rounded-lg px-5 py-2 bg-whit10lg:max-w-[385px]" placeholder="Card Number"/>
                        </div>
                        <div className="flex flex-col text-sm gap-3">
                            <label className="font-semibold">Expration Date</label>
                            <input type="date" className=" outline-none rounded-lg px-5 py-2 bg-white 10:max-w-[385px]" placeholder="Expration Date"/>
                        </div>
                        <div className="flex flex-col text-sm gap-3">
                            <label className="font-semibold">Cart Holder</label>
                            <input type="text" className=" outline-none rounded-lg px-5 py-2 bg-white 10:max-w-[385px]" placeholder="Cart Holder"/>
                        </div>
                        <div className="flex flex-col text-sm gap-3">
                            <label className="font-semibold">CVC</label>
                            <input type="text" className=" outline-none rounded-lg px-5 py-2 bg-white 10:max-w-[385px]" placeholder="CVC"/>
                        </div>
                    </div>
                    </div>
                    <div className="max-w-[804px] rounded-lg p-4 bg-slate-200 mt-4 flex justify-between">
                        <div>
                            <input type="radio" />
                            <label className="font-10mibold pl-3">PayPal</label>
                        </div>
                        <div>
                            <img src={PayPal} alt="" />
                        </div>
                    </div>
                    <div className="max-w-[804px] rounded-lg p-4 bg-slate-200 mt-4 flex justify-between">
                        <div>
                            <input type="radio" />
                            <label className="font-10mibold pl-3">Bitcoin</label>
                        </div>
                        <div>
                            <img src={Bitcoin} alt="" />
                        </div>
                    </div>
                </div>
                <div className="max-w-[852px] shadow-lg rounded-lg p-4 bg-white mt-3">
                <h2 className="font-semibold">Confirmation</h2>
                    <div className="flex justify-between">
                        <p className="text-sm text-slate-400 max-w-[198px] md:max-w-[436px]">We are getting to the end. Just few clicks and your rental is ready!</p>
                        <p className="text-sm text-slate-400">Step 4 of 4</p>
                    </div>
                    <div className="max-w-[804px] rounded-lg p-4 bg-slate-200 mt-4 flex justify-between">
                        <div>
                            <input type="checkbox" />
                            <label className="fo10-semibold pl-3 text-sm">I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
                        </div>
                    </div>
                    <div className="max-w-[804px] rounded-lg p-4 bg-slate-200 mt-4 flex justify-between">
                        <div>
                            <input type="checkbox"/>
                            <label className="fon10semibold pl-3 text-sm">I agree with our terms and conditions and privacy policy.</label>
                        </div>
                    </div>
                      <NavLink to="/cart:id/buy">
                        <button className=" bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition mt-5">Rent Now</button>
                      </NavLink>
                      <div className="mt-4">
                        <img src={LayerImg} alt="" />
                      </div>
                      <div className="flex flex-col mt-4">
                        <p className="text-md font-semibold">All your data are safe</p>
                        <p className="text-sm text-slate-400">We are using the most advanced security to provide you the best experience ever.</p>
                    </div>
                </div>
            </div>
             <div>
                 <div className="max-w-[692px] shadow-lg rounded-lg p-4 bg-white">
                    <div className="flex mt-4 items-center gap-3">
                        <p className="text-md font-semibold">Reviews</p>
                        <p className="bg-blue-600 text-white px-5 py-1 rounded-lg text-sm">13</p>
                    </div>    
                 <div>                
                    <div className="flex justify-between items-center pt-3">
                      <div className="flex gap-3">
                        <div>
                          <div><img src={image} alt="" /></div>
                        </div>
                       <div>
                          <h2 className="font-semibold">Alexander</h2>
                          <p className="text-sm text-slate-400">CEO at Bukalapak</p>
                       </div>
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">21 July 2022</p>
                        <div><img src={reviews} alt=""/></div>
                      </div>
                    </div>
                    <div className="text-sm text-slate-400 pt-4">
                     We are very happy with the service from the MORENT App.
                     Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition,
                     the service provided by the officers is also very friendly and very polite.
                    </div>
                </div>    
                  {slice.map((item) => {
                    return (
                        <div className="pt-4">                
                        <div className="flex justify-between items-center pt-3">
                          <div className="flex gap-3">
                            <div>
                              <img src={item.image} alt="" className="w-full"/>
                            </div>
                           <div>
                              <h2 className="font-semibold">{item.name}</h2>
                              <p className="text-sm text-slate-400">{item.title}</p>
                           </div>
                          </div>
                          <div>
                            <p className="text-sm text-slate-400">21 July 2022</p>
                            <div><img src={reviews} alt=""/></div>
                          </div>
                        </div>
                        <div className="text-sm text-slate-400 pt-4">{item.comment}</div>    
                    </div>  
                    )
                  })}
                  <div className="flex justify-center pt-4">
                         <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-800 transition" onClick={() => loadmore()}>show more</button>
                  </div>
                </div> 
             
            </div> 
            </div>
        </div>
     );
}
 
export default Cart;
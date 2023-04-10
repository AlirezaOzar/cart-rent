import {BsDiscord, BsInstagram, BsTwitter, BsFacebook} from "react-icons/bs";



const Footer = () => {
    return ( 
        <div className="bg-white dark:bg-blue-950  mx-auto">
            <div className="border-b dark:border-t pb-10 flex flex-col items-center md:flex-row justify-center md:justify-around pt-10 px-3">
                <div className="max-w-[292px]">
                   <h2 className="text-3xl text-blue-600 font-semibold pb-4">MORENT</h2>
                   <p className="text-slate-400">Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 pt-10 gap-6 cursor-pointer">
                    <ul className="flex flex-col gap-3">
                        <label className="font-semibold dark:text-slate-300">About</label>
                        <li className="text-slate-400 hover:text-blue-500">How it works</li>
                        <li className="text-slate-400 hover:text-blue-500">Featured</li>
                        <li className="text-slate-400 hover:text-blue-500">Partnership</li>
                        <li className="text-slate-400 hover:text-blue-500">Bussiness Relation</li>
                    </ul>
                    <ul className="flex flex-col gap-3">
                        <label className="font-semibold dark:text-slate-300">Community</label>
                        <li className="text-slate-400 hover:text-blue-500">Events</li>
                        <li className="text-slate-400 hover:text-blue-500">Blogs</li>
                        <li className="text-slate-400 hover:text-blue-500">Podcast</li>
                        <li className="text-slate-400 hover:text-blue-500">Invite a friend</li>
                    </ul>
                    <ul className="flex flex-col gap-3 items-start">
                        <label className="font-semibold dark:text-slate-300">Socials</label>
                        <li className="text-slate-400 flex items-center gap-2 hover:text-blue-500">
                            <p>Discord</p>
                            <BsDiscord/>
                        </li>
                        <li className="text-slate-400 flex items-center gap-2 hover:text-red-500">
                            <p>Instagram</p>
                            <BsInstagram/>
                        </li>
                        <li className="text-slate-400 flex items-center gap-2 hover:text-blue-500">
                            <p>Facebook</p>
                            <BsFacebook/>
                        </li>
                        <li className="text-slate-400 flex items-center gap-2 hover:text-blue-300">
                            <p>Twitter</p>
                            <BsTwitter/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t pt-4 flex flex-col-reverse md:flex-row justify-around gap-5 px-3 pb-10">
              <div className="font-semibold text-sm dark:text-slate-300">©2022 MORENT. All rights reserved</div>
              <div className="font-semibold flex gap-4 text-sm justify-between dark:text-slate-300">
                <p>Terms & Condition</p>
                <p>Privacy & Policy</p>
              </div>
            </div>
        </div>
     );
}
 
export default Footer;
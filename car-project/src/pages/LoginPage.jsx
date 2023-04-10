import Layout from "../Layout/Layout";
import carImg from "../assets/img/image 8.png";
import img from "../assets/img/stylish-elegant-woman-car-salon_1157-20980.jpg"
const LoginPage = () => {
    return ( 
        <Layout>
           <div className="w-full h-[800px] flex flex-col md:flex-row">
             <div className="w-full lg:w-2/4 h-full bg-gray-50 dark:bg-blue-950 flex flex-col justify-center items-center gap-6">
                <h1 className="text-4xl font-medium dark:text-slate-300">Welecome back</h1>
                <p className="text-gray-400 text-sm md:text-lg">Welecom back ! please enter your details...</p>
                <div className="flex flex-col gap-6">
                       <div className="flex flex-col text-sm gap-3 pb-5">
                            <label className="font-semibold text-sm dark:text-slate-300">Email</label>
                            <input type="email" className=" outline-none rounded-lg px-5 py-4 text-black bg-slate-100 md:min-w-[285px] lg:max-w-[385px]" placeholder="Enter your email..."/>
                        </div>
                        <div className="flex flex-col text-sm gap-3">
                            <label className="font-semibold text-sm dark:text-slate-300">password</label>
                            <input type="password" className=" outline-none rounded-lg text-black px-5 py-4 bg-slate-100 md:min-w-[285px] lg:min-w-[385px]" placeholder="Enter your password..."/>
                        </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-20">
                    <div className="flex gap-2">
                        <label className="text-blue-700 font-semibold text-sm dark:text-slate-300">Remember for 30 days</label>
                        <input type="checkbox" />
                    </div>
                    <h2 className="font-semibold text-sm dark:text-slate-300">Forgot password ?</h2>
                </div>
             </div>
             <div className="hidden lg:flex lg:w-2/4 h-full">
                <div className="h-full">
                    <img src={img} alt=""  className="h-full"/>
                </div>
             </div>
           </div>
        </Layout>
     );
}
 
export default LoginPage;
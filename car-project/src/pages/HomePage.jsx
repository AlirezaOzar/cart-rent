import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Products from "../components/Products";
import Search from "../components/Search";
import Layout from "../Layout/Layout";

const HomePage = () => {
    return ( 
        <Layout>
           <div  className="max-w-[1350px] mx-auto">
             <Home/>
              <Filter/>
              <Products/>
           </div>
        </Layout>
     );
}
 
export default HomePage;
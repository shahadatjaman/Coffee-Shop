import Slider from "../components/Home/Slider";
import CategorySlide from "../components/Home/CategoryItems/index";
import PopularProducts from "../components/Home/PopularProducts/index";
const Home = () => {

    return (
        <>
         {/* <Navbarr isLogged={isLogged}/> */}
        <Slider/>
        <CategorySlide/>
        <PopularProducts />
        </>
    );
}



export default Home;
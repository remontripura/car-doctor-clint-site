import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import About from "../About/About";
import OurService from "../OurService/OurService";
import Contact from "../Contact/Contact";
import OurProduct from "../OurProduct/OurProduct";
import ChooseUs from "../ChooseUs/ChooseUs";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Car-Doctor | Home</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <OurService></OurService>
            <Contact></Contact>
            <OurProduct></OurProduct>
            <ChooseUs></ChooseUs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
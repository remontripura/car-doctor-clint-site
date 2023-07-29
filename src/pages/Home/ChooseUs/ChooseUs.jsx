import HeadingName from "../../../components/HeadingName";
import HeadingTitle from "../../../components/HeadingTitle";

// image import
import img1 from "../../../assets/images/products/1.svg"
import img2 from "../../../assets/images/products/2.svg"
import img3 from "../../../assets/images/products/3.svg"
import img4 from "../../../assets/images/products/4.svg"
import img5 from "../../../assets/images/products/5.svg"
import img6 from "../../../assets/images/products/6.svg"


const ChooseUs = () => {
    return (
        <section className="sectionStyle lg:px-0 px-5">
        <div className="text-center">
            <HeadingTitle title="Core Feature" />
            <HeadingName title="Why Choose Us" description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
        </div>
        <div className="grid lg:grid-cols-6 gap-5">
            <div className="flex flex-col justify-center items-center p-8 bg-slate-300 transition duration-300 shadow-lg shadow-slate-500 hover:bg-[#FF3811] rounded-md hover:text-white">
                <img src={img1} alt="" />
                <p className="font-bold mt-2">Expert Team</p>
            </div>
            <div className="flex flex-col justify-center items-center p-8 bg-slate-300 transition duration-300 shadow-lg shadow-slate-500 hover:bg-[#FF3811] rounded-md hover:text-white">
                <img src={img2} alt="" />
                <p className="font-bold mt-2">Expert Team</p>
            </div>
            <div className="flex flex-col justify-center items-center p-8 bg-slate-300 transition duration-300 shadow-lg shadow-slate-500 hover:bg-[#FF3811] rounded-md hover:text-white">
                <img src={img3} alt="" />
                <p className="font-bold mt-2">Expert Team</p>
            </div>
            <div className="flex flex-col justify-center items-center p-8 bg-slate-300 transition duration-300 shadow-lg shadow-slate-500 hover:bg-[#FF3811] rounded-md hover:text-white">
                <img src={img4} alt="" />
                <p className="font-bold mt-2">Expert Team</p>
            </div>
            <div className="flex flex-col justify-center items-center p-8 bg-slate-300 transition duration-300 shadow-lg shadow-slate-500 hover:bg-[#FF3811] rounded-md hover:text-white">
                <img src={img5} alt="" />
                <p className="font-bold mt-2">Expert Team</p>
            </div>
            <div className="flex flex-col justify-center items-center p-8 bg-slate-300 transition duration-300 shadow-lg shadow-slate-500 hover:bg-[#FF3811] rounded-md hover:text-white">
                <img src={img6} alt="" />
                <p className="font-bold mt-2">Expert Team</p>
            </div>
        </div>
        </section>
    );
};

export default ChooseUs;
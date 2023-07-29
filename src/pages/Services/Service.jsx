import Banner from "../../components/Banner";
import img1 from '../../assets/images/services/1.jpg'
import img2 from '../../assets/images/homeCarousel/2.jpg';
import { serviceData, serviceStep } from "../../Data";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from '../../assets/icons/logo.svg'


const icon = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path d="M24.375 17.8125V14.5312C24.375 13.4124 23.9305 12.3393 23.1394 11.5481C22.3482 10.757 21.2751 10.3125 20.1562 10.3125H18.2812C17.9083 10.3125 17.5506 10.1643 17.2869 9.90062C17.0232 9.6369 16.875 9.27921 16.875 8.90625V7.03125C16.875 5.91237 16.4305 4.83931 15.6394 4.04814C14.8482 3.25697 13.7751 2.8125 12.6562 2.8125H10.3125M11.25 20.625V21.5625M15 17.8125V21.5625M18.75 15V21.5625M13.125 2.8125H7.03125C6.255 2.8125 5.625 3.4425 5.625 4.21875V25.7812C5.625 26.5575 6.255 27.1875 7.03125 27.1875H22.9688C23.745 27.1875 24.375 26.5575 24.375 25.7812V14.0625C24.375 11.0788 23.1897 8.21733 21.08 6.10755C18.9702 3.99776 16.1087 2.8125 13.125 2.8125V2.8125Z" stroke="white" stroke-width="1.5" />
</svg>






const Service = () => {
    return (
        <section className="max-w-7xl mx-auto px-5">
            <Banner title="Service Details"></Banner>
            <div className="lg:flex mt-20 gap-5">
                <div className="lg:w-8/12">
                    <img className="rounded" src={img1} alt="" />
                    <div className="my-10">
                        <h2 className="font-bold text-2xl">Unique Car Engine Service</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        {
                            serviceData.map(data => <div key={data.id} className="p-10 border-1 border-t-2 border-[#FF3811] rounded-md">
                                <h2 className="font-bold">{data.title}</h2>
                                <p>{data.description}</p>
                            </div>)
                        }
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>

                    <div className="my-10">
                        <h2 className="font-bold text-2xl">  3 Simple Steps to Process</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                    </div>
                    <div className="grid grid-cols-3 gap-9">
                        {
                            serviceStep.map(data => <div key={data.id} className="flex flex-col justify-center items-center space-y-2 shadow-md shadow-slate-300 py-5">
                                <h2 className="p-3 w-12 flex justify-center text-white font-bold rounded-full bg-[#FF3811]">{data.no}</h2>
                                <h2 className="font-bold uppercase">{data.title}</h2>
                                <h2>{data.description}</h2>
                            </div>)
                        }
                    </div>
                    <div className="my-10">
                        <img className="rounded" src={img2} alt="" />
                    </div>
                </div>
                <div className="lg:w-4/12 space-y-5">
                    <div className="p-8 bg-slate-200 space-y-3 rounded-sm">
                        <h2 className="font-bold text-[20px]">Service</h2>
                        <ul className="space-y-2">
                            <li className="list-style">
                                <p>Full Car Repire</p>
                                <Link><FaArrowRightLong /></Link>
                            </li>
                            <li className="list-style">
                                <p>Engine Repire</p>
                                <Link><FaArrowRightLong /></Link>
                            </li>
                            <li className="list-style">
                                <p>Automatic Service</p>
                                <Link><FaArrowRightLong /></Link>
                            </li>
                            <li className="list-style">
                                <p>Engine Oil Change</p>
                                <Link><FaArrowRightLong /></Link>
                            </li>
                            <li className="list-style">
                                <p>Battery Charge</p>
                                <Link><FaArrowRightLong /></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="p-8 bg-black space-y-3 rounded-sm text-white">
                        <h2 className="font-bold text-[20px]">Download</h2>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div>
                                    {icon}
                                </div>
                                <div>
                                    <h2 className="font-bold">Our Brochuri</h2>
                                    <p><small>Download</small></p>
                                </div>
                            </div>
                            <div className="p-3 rounded hover:bg-[#FF3811]">
                                <Link to="#"><FaArrowRightLong /></Link>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div>
                                    {icon}
                                </div>
                                <div>
                                    <h2 className="font-bold">Company Details</h2>
                                    <p><small>Download</small></p>
                                </div>
                            </div>
                            <div className="p-3 rounded hover:bg-[#FF3811]">
                                <Link to="#"><FaArrowRightLong /></Link>
                            </div>
                        </div>

                    </div>
                    <div className="px-8 py-12  bg-black  rounded text-white flex flex-col justify-center items-center">
                        <div className="mb-5">
                            <img src={logo} alt="" />
                        </div>
                        <div className="mb-8">
                            <h2 className="font-bold">Need Help? We are here to help you</h2>
                        </div>
                        <div className="bg-white p-8 text-black rounded-md text-center">
                            <h2 className="text-[18px] font-bold">Car Doctor <span className="text-[#FF3811]">Special</span></h2>
                            <p className="font-bold">Save up to <span className="text-[#FF3811]">60% off</span></p>
                        </div>
                        <Link className="button-style -mt-5">Get a Quate</Link>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold">Price: $250.00</h2>
                        <button className="w-full bg-[#FF3811] py-3 rounded mt-3"><Link className="font-bold text-white">Proceed Checkout</Link></button>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
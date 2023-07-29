import { LuCalendarClock } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
            <div className="sectionStyle selection bg-black px-10 py-20 rounded text-white lg:flex justify-between items-center">
                <div className="flex items-center">
                    <p><LuCalendarClock className="text-3xl"/></p>
                    <div className="ml-5">
                        <p>We are open to Monday - Sunday</p>
                        <p className="font-bold text-2xl">7.00 am - 9.00pm</p>
                    </div>
                </div>
                <div className="flex items-center my-10 lg:my-0">
                    <p><FiPhoneCall className="text-3xl"/></p>
                    <div className="ml-5">
                        <p>Have a Question?</p>
                        <p className="font-bold text-2xl">016453-04539</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <p><FaLocationDot className="text-3xl"/></p>
                    <div className="ml-5">
                        <p>Need a Repair? Our Address</p>
                        <p className="font-bold text-2xl">Khagrachari Narikel Bagan</p>
                    </div>
                </div>
            </div>
    );
};

export default Contact;
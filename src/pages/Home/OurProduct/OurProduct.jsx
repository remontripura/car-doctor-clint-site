import HeadingName from "../../../components/HeadingName";
import HeadingTitle from "../../../components/HeadingTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';


import swiper1 from '../../../assets/images/homeCarousel/1.jpg';
import swiper2 from '../../../assets/images/homeCarousel/2.jpg';
import swiper3 from '../../../assets/images/homeCarousel/3.jpg';
import swiper4 from '../../../assets/images/homeCarousel/4.jpg';
import swiper5 from '../../../assets/images/homeCarousel/4.jpg';

import icon1 from '../../../assets/icons/facebook.png'
import icon2 from '../../../assets/icons/instagram.png'
import icon3 from '../../../assets/icons/linkedin.png'
import icon4 from '../../../assets/icons/twiter.png'


const OurProduct = () => {
    return (
        <section className="sectionStyle lg:px-0 px-5">
            <div className="text-center">
                <HeadingTitle title="Team" />
                <HeadingName title="Meet Our Team" description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            </div>
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}

                    navigation={true} modules={[Navigation]}
                    // modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={swiper3} alt="" />
                        <div className="text-center">
                            <h2 className="font-bold text-[20px]">Car Engine Plug</h2>
                            <p>Engine Expert</p>
                        </div>
                        <div className="flex justify-center gap-4 mt-2">
                            <img className="w-8 h-8" src={icon1} alt="" />
                            <img className="w-8 h-8" src={icon4} alt="" />
                            <img className="w-8 h-8" src={icon3} alt="" />
                            <img className="w-8 h-8" src={icon2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper1} alt="" />
                        <div className="text-center">
                            <h2 className="font-bold text-[20px]">Car Engine Plug</h2>
                            <p>Engine Expert</p>
                        </div>
                        <div className="flex justify-center gap-4 mt-2">
                            <img className="w-8 h-8" src={icon1} alt="" />
                            <img className="w-8 h-8" src={icon4} alt="" />
                            <img className="w-8 h-8" src={icon3} alt="" />
                            <img className="w-8 h-8" src={icon2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper2} alt="" />
                        <div className="text-center">
                            <h2 className="font-bold text-[20px]">Car Engine Plug</h2>
                            <p>Engine Expert</p>
                        </div>
                        <div className="flex justify-center gap-4 mt-2">
                            <img className="w-8 h-8" src={icon1} alt="" />
                            <img className="w-8 h-8" src={icon4} alt="" />
                            <img className="w-8 h-8" src={icon3} alt="" />
                            <img className="w-8 h-8" src={icon2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper3} alt="" />
                        <div className="text-center">
                            <h2 className="font-bold text-[20px]">Car Engine Plug</h2>
                            <p>Engine Expert</p>
                        </div>
                        <div className="flex justify-center gap-4 mt-2">
                            <img className="w-8 h-8" src={icon1} alt="" />
                            <img className="w-8 h-8" src={icon4} alt="" />
                            <img className="w-8 h-8" src={icon3} alt="" />
                            <img className="w-8 h-8" src={icon2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper4} alt="" />
                        <div className="text-center">
                            <h2 className="font-bold text-[20px]">Car Engine Plug</h2>
                            <p>Engine Expert</p>
                        </div>
                        <div className="flex justify-center gap-4 mt-2">
                            <img className="w-8 h-8" src={icon1} alt="" />
                            <img className="w-8 h-8" src={icon4} alt="" />
                            <img className="w-8 h-8" src={icon3} alt="" />
                            <img className="w-8 h-8" src={icon2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper5} alt="" />
                        <div className="text-center">
                            <h2 className="font-bold text-[20px]">Car Engine Plug</h2>
                            <p>Engine Expert</p>
                        </div>
                        <div className="flex justify-center gap-4 mt-2">
                            <img className="w-8 h-8" src={icon1} alt="" />
                            <img className="w-8 h-8" src={icon4} alt="" />
                            <img className="w-8 h-8" src={icon3} alt="" />
                            <img className="w-8 h-8" src={icon2} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default OurProduct;
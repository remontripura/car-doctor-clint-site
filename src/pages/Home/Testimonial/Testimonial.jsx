import HeadingName from "../../../components/HeadingName";
import HeadingTitle from "../../../components/HeadingTitle";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';


const Testimonial = () => {
    return (
        <section className="sectionStyle lg:px-0 px-5">
            <div className="text-center">
                <HeadingTitle title="Testimonial" />
                <HeadingName title="What Customer Says" description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            </div>
            <div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}

                    navigation={true} modules={[Navigation]}
                    // modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="mx-[100px]">
                        <div>
                            <div className="flex justify-between">
                                <img className="w-16 rounded-full" src="https://i.ibb.co/tY4pRrS/user2.jpg" alt="" />
                                <div>
                                    <h2>Awlad Hossain</h2>
                                    <p>Businessman</p>
                                </div>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mx-[100px]">
                        <div>
                            <div className="flex">
                                <img className="w-16 rounded-full" src="https://i.ibb.co/tY4pRrS/user2.jpg" alt="" />
                                <div>
                                    <h2>Awlad Hossain</h2>
                                    <p>Businessman</p>
                                </div>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
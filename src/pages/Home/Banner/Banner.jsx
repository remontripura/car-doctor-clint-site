import bannerImage from '../../../assets/images/banner/1.jpg'


const Banner = () => {
    return (
        <div className='sectionStyle'>
            <div className="bg-gray-800 lg:mx-0 mx-5">
                <div className="mx-auto px-4 py-6 md:py-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">Welcome to our Garage</h2>
                            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mt-4">Discover amazing products and services.</p>
                            <a href="#" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg">Get Started</a>
                        </div>
                        <div className="md:w-1/2 mt-6 md:mt-0">
                            <img className="w-full h-auto rounded-lg shadow-md" src={bannerImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;



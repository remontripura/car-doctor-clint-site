

const Banner = ({ title }) => {
    return (
        <section className="gradient-background mx-auto bg-cover bg-center h-72 relative" style={{ backgroundImage: "url('https://i.ibb.co/khHbd2d/checkout.png')" }}>
            <p className="text-4xl h-64 text-white font-bold ml-[100px] flex items-center">{title}</p>
            <button className="clip absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#FF3811] px-10 py-2 text-white">Home/{title}</button>
        </section>
    );
};

export default Banner;

import { useEffect, useState } from "react";
import HeadingName from "../../../components/HeadingName";
import HeadingTitle from "../../../components/HeadingTitle";

const OurService = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <section className="sectionStyle lg:px-0 px-5">
            <div className="text-center">
                <HeadingTitle title="Service" />
                <HeadingName title="Our Service Area" description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                {
                    service.map((data, index) =>
                        <div key={index}>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="px-8 pt-10">
                                    <img src={data.img} alt="" className="rounded h-60" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{data.title}</h2>
                                    <p className="font-bold text-red-500">Price: {data.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default OurService;
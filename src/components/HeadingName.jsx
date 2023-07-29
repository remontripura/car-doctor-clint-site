

const HeadingName = ({title, description}) => {
    return (
        <div className="lg:w-2/4 mx-auto my-5">
            <div className="text-center font-bold text-4xl mb-3">{title}</div>
            <div className="text-slate-500 text-center">{description}</div>
        </div>
    );
};

export default HeadingName;
import aboutImgOne from '../../../assets/images/about_us/person.jpg'
import aboutImgTwo from '../../../assets/images/about_us/parts.jpg'
import HeadingTitle from '../../../components/HeadingTitle';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='sectionStyle section lg:px-0 px-5'>
            <div className='lg:flex gap-10'>
                <div className='lg:w-1/2 relative'>
                    <img className='w-3/4 rounded' src={aboutImgOne} alt="" />
                    <img className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" src={aboutImgTwo} alt="" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <HeadingTitle title="About Us" />
                    <h2 className='text-5xl font-bold'>We are qualified & of experience in this field</h2>
                    <div className='space-y-3'>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    </div>
                    <div>
                        <Link className='px-5 py-2 rounded bg-[#FF3811] text-white font-semibold'>Get More Info</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
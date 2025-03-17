import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { testimonialsData } from '../data/dummy';
import { TextFade } from './ui/TextFadeUp';
import { motion } from 'framer-motion';
import { cardVariants } from '../constants/data';

// Define the type for testimonial data
export interface Testimonial {
    avatar: string;
    name: string;
    handle: string;
    text: string;
    hashtag: string;
}

// Define props for NextArrow and PrevArrow
interface ArrowProps {
    onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps) => (
    <button
        className="absolute top-1/2 -right-4 xl:-right-[50px] transform -translate-y-1/2 bg-gray-300 text-white rounded-full p-2 md:p-3 shadow-lg cursor-pointer hover:bg-gray-400 transition-all"
        onClick={onClick}
    >
        <ChevronRight size={24} />
    </button>
);

const PrevArrow = ({ onClick }: ArrowProps) => (
    <button
        className="absolute z-50 top-1/2 -left-4 xl:-left-[50px] transform -translate-y-1/2 bg-gray-300 text-white rounded-full p-2 md:p-3 shadow-lg cursor-pointer hover:bg-gray-400 transition-all"
        onClick={onClick}
    >
        <ChevronLeft size={24} />
    </button>
);

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <TextFade direction="up">
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="text-3xl mt-4 font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                           What our customers say
                        </motion.div>
                        </TextFade>
                    <TextFade direction="up">
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="max-w-lg mx-auto mt-4 text-lg text-gray-600" >
                                Hear from our satisfied customers about their experiences with our products and services.
                        </motion.div>
                        </TextFade>
                    <p >
                    </p>
                </div>

                <div className="mt-12 relative">
                    <Slider {...settings}>
                        {testimonialsData.map((testimonial, index) => (
                            <div key={index} className="px-4 mb-4 md:mb-8">
                                <div className="bg-white rounded-xl shadow-lg p-8 h-full md:h-72 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                    <div className="flex items-center text-left space-x-4">
                                        <img
                                            className="w-12 h-12 rounded-full object-cover"
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                        />
                                        <div>
                                            <p className="text-lg font-semibold text-gray-900">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {testimonial.handle}
                                            </p>
                                        </div>
                                    </div>
                                    <blockquote className="mt-6">
                                        <div className="flex justify-center my-1">
                                            <Star size={20} className='text-amber-400' />
                                            <Star size={20} className='text-amber-400' />
                                            <Star size={20} className='text-amber-400' />
                                            <Star size={20} className='text-amber-400' />
                                            <StarHalf size={20} className='text-amber-400' />
                                        </div>
                                        <p className="text-base text-gray-700 italic">
                                            "{testimonial.text}"
                                        </p>
                                        <p className="mt-4 text-sm text-sky-500 font-medium">
                                            {testimonial.hashtag}
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
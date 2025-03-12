import React from 'react';
import { Card } from './ui/card';
import { TextFade } from './ui/TextFadeUp';
import { motion } from 'framer-motion'; // Import Framer Motion
import { cardVariants } from '../constants/data';


interface HeroPageProps {
    title?: string;
    subtitle?: string;
    ctaText?: string;
    ctaUrl?: string;
    image?: string;
}

const featuredSolutions = [
    {
        title: "AI-Powered Analytics",
        description: "Leverage advanced AI algorithms to gain actionable insights from your data.",
        link: "/contact"
    },
    {
        title: "Cloud Integration",
        description: "Seamlessly integrate your business operations with our cloud solutions.",
        link: "/products"
    },
    {
        title: "Customer Engagement",
        description: "Enhance customer satisfaction with our innovative engagement tools.",
        link: "/faqs"
    }
];


const HeroPage: React.FC<HeroPageProps> = ({
    title = "For your personal brand identity",
    subtitle = "Transform your business with our innovative solutions",
    ctaText = "Explore our products",
    ctaUrl = "/products",
    image = "/card5.jpg"
}) => {
    return (
        <div className="min-h-screen w-full z-40 bg-gradient-to-br from-[#3E868E] to-[#e9cb85] relative overflow-hidden">
            {/* Hero Overlay */}
            <div className="absolute inset-0 z-10 bg-black/50" />

            {/* Hero Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={image}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Hero Content */}
            <div className=" relative container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen text-center">
                {/* Hero Text */}
                <div className="relative z-10 max-w-3xl space-y-6">
                    <TextFade direction='up'>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            {title} just
                            <p> Tap<span className='text-[#D1B896]'>Solve</span></p>
                        </h1>
                    </TextFade>
                    <TextFade direction='up'>
                        <p className="text-xl md:text-xl text-white/90 mb-8">
                            {subtitle}
                        </p></TextFade>

                    {/* CTA Button */}
                    <a
                        href={ctaUrl}
                        className="inline-block px-6 py-3 bg-white text-[#3E868E] font-semibold rounded-lg 
                        hover:bg-blue-100 transition-all duration-300 text-base shadow-lg hover:shadow-xl"
                    >
                        {ctaText}
                    </a>
                </div>

                {/* Featured Card */}
                <div className="hidden md:flex justify-around gap-6">
                    {featuredSolutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }} // Animate when 50% of the card is in view
                            className="relative z-10 mt-16 w-full max-w-md">
                            <Card className="bg-white/10 backdrop-blur-lg transition-all duration-200 border-white/20 rounded-xl overflow-hidden shadow-2xl">
                                <div className="p-8">
                                    <h3 className="text-2xl font-semibold text-white mb-4">
                                        {solution.title}
                                    </h3>
                                    <p className="text-white/90 text-lg">
                                        {solution.description}
                                    </p>
                                    <a
                                        href={solution.link}
                                        className="mt-6 inline-block px-6 py-3 bg-white/20 text-white font-semibold rounded-lg 
                        hover:bg-white/30 transition-all duration-300 cursor-pointer"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroPage;
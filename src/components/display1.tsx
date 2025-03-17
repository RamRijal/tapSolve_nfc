import { Link } from "react-router-dom";
import { TextFade } from "./ui/TextFadeUp";
import { motion } from "framer-motion";
import { cardVariants, nfcBusinessCardFeatures } from "../constants/data";

const Features = () => {
    return (
        <div className="p-8 py-12 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Flex container for image and content */}
                <div className="flex flex-col items-center lg:flex-row gap-8 relative">
                    {/* Image on the left */}
                    <div className="w-full lg:w-1/2 flex justify-center relative group">
                        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px]">
                            <img
                                loading="lazy"
                                src="/Mockup3.png" // Replace with your image URL
                                alt="NFC Business Card"
                                className="w-full h-full object-cover  rounded-lg"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 flex flex-col bg-gradient-to-b from-black/20 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg items-center justify-center gap-4 cursor-pointer">
                                <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold p-4 sm:p-8 text-center">
                                    Want to get started with us?
                                </p>
                                <Link to="/products">
                                    <button className="bg-[#1a6169] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#164b51] transition-colors cursor-pointer">
                                        Explore Products
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Content on the right */}
                    <div className="w-full lg:w-1/2 text-left">
                        <TextFade direction="up">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a6169] mb-4">
                                {nfcBusinessCardFeatures[0].title}
                            </h1>
                        </TextFade>
                        <motion.p
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="text-sm sm:text-base text-gray-700 mb-6"
                        >
                            {nfcBusinessCardFeatures[0].subtitle} {nfcBusinessCardFeatures[0].description}
                        </motion.p>

                        {/* Mapped list data */}
                        <div className="space-y-4">
                            {nfcBusinessCardFeatures[0].list.map((feature, index) => (
                                <motion.div
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    key={index}
                                    className="flex items-start p-3 border-l-4 border-[#1a6169]"
                                >
                                    <div>
                                        <h2 className="text-lg sm:text-xl font-bold text-[#1a6169] mb-1">
                                            {feature.title}
                                        </h2>
                                        <p className="text-sm sm:text-base text-gray-700">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
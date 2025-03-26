import { motion } from "framer-motion";
import { TextFade } from "./ui/TextFadeUp"; // Ensure you have this component for text fade-up animation
import { cardVariants, products } from "../data/data";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const HeroProducts = () => {
    return (
        <div className="p-6 md:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 items-center mb-12">
                    {/* Empty div to balance the grid */}
                    <div className="hidden lg:block"></div>

                    {/* Centered Title and Subtitle */}
                    <div className="flex justify-center lg:justify-center">
                        <TextFade direction="up">
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                className="text-center lg:text-left"
                            >
                                <p className="text-5xl mt-4 font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                                    Our <span className="text-[#D1B896]">Products</span>
                                </p>
                                <p className="text-sm md:text-base text-center text-gray-500 font-medium mt-3">Discover our top picks just for you.</p>
                            </motion.div>
                        </TextFade>
                    </div>

                    {/* View All Button on the Right */}
                    <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
                        <a href="/products">
                            <button className="bg-[#1a6169] flex items-center text-white px-4 py-2 rounded-md hover:bg-[#144a50] transition-colors duration-300">
                                View All&nbsp;<ChevronRight size={20}/>
                            </button>
                        </a>
                    </div>
                </div>

                {/* Grid layout for products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
                    {products.slice(0, 3).map((product) => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <div className="bg-white cursor-pointer text-left rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                {/* Product Image */}
                                <div className="overflow-hidden">
                                    <img
                                        loading="lazy"
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-600 hover:scale-110 hover:rotate-2"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="p-4">
                                    <p className="text-xs mb-2 bg-gray-400 w-fit p-1 px-2.5 rounded-2xl text-white">
                                        {product.category}
                                    </p>
                                    <div className="flex justify-between items-center"><h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-2">
                                        {product.name}
                                    </h2>
                                        <p className="text-base sm:text-2xl font-bold text-green-700 mb-2">
                                            {product.price}
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        {product.description.slice(0, 100)}...
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroProducts;
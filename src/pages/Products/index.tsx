import { Link } from 'react-router-dom';
import { cardVariants, products } from '../../data/data';
import { motion } from 'framer-motion';
import { TextFade } from '../../components/ui/TextFadeUp';

const ProductsPage = () => {
    return (
        <div className="p-4 sm:p-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Heading Section */}
                <div className="max-w-2xl mx-auto text-center">
                    <TextFade direction='up'>
                        <motion.h2
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mt-4">
                            Our Products
                        </motion.h2>
                    </TextFade>
                    <TextFade direction='up'>
                        <motion.p
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible" className="max-w-xl mx-auto mt-2 mb-8 text-sm sm:text-base leading-relaxed text-gray-500">
                            Explore our collection of innovative NFC-enabled digital business cards, designed to elevate your professional networking experience.
                        </motion.p>
                    </TextFade>
                </div>

                {/* Grid layout for products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
                    {products.map((product) => (
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
                                           ${product.price}
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        {product.description.slice(0, 70)}...
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

export default ProductsPage;
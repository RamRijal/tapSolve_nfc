import { Link } from 'react-router-dom';
import { products } from '../../constants/data';

const ProductsPage = () => {
    return (
        <div className="p-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl mt-4 font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Our NFC Cards</h2>
                    <p className="max-w-xl mx-auto mt-2 mb-8 text-base leading-relaxed text-gray-500">Explore our collection of innovative NFC-enabled digital business cards, designed to elevate your professional networking experience.</p>
                </div>

                {/* Grid layout for products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <div className="bg-white cursor-pointer text-left rounded-lg shadow-md overflow-hidden transform transition-transform duration-400 hover:scale-105">
                                {/* Product Image */}
                                <div className="overflow-hidden">
                                    <img
                                        loading="lazy"
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-64 object-cover transition-transform duration-600 hover:scale-115 hover:rotate-5"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="p-4">
                                    <p className="text-xs mb-2 bg-gray-400 w-fit p-1 px-2.5 rounded-2xl text-white">{product.category}</p>
                                    <h2 className="text-xl font-bold text-gray-700 mb-2">{product.name}</h2>
                                    <p className="text-lg text-gray-600 mb-2">{product.price}</p>
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
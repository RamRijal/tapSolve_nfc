import { SetStateAction, useEffect, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Modal from 'react-modal';
import { Link, useParams } from 'react-router-dom';
import { products } from '../../../data/data';
import { MinusIcon, Plus, X } from 'lucide-react';
import { useOrder } from '../../../context/orderContext';

// Modal styles
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '90%',
        maxHeight: '90%',
        overflow: 'auto',
        border: 'none',
        background: 'transparent',
        zIndex: 1000, // Ensure modal is above navbar
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 999, // Ensure overlay is above navbar
    },
};
// Set the app element for react-modal
Modal.setAppElement('#root');

const ProductDetailPage = () => {
    const { id } = useParams();
    const {addToOrder} =useOrder();

    const product = products.find((p) => p.id === Number(id));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(product?.images[0] || '');
    const [mainImage, setMainImage] = useState(product?.images[0] || '');
    const [quantity, setQuantity] = useState(1); // Local quantity state

    // Handle increment
    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    // Handle decrement
    const handleDecrement = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);
    };

    // Handle quantity change from input
    const handleQuantityChange = (value: number) => {
        if (value >= 1) {
            setQuantity(value);
        }
    };


    useEffect(() => {
        if (product) {
            setSelectedImage(product.images[0]);
            setMainImage(product.images[0]);
        }
    }, [product]);

    // Handle thumbnail click
    const handleThumbnailClick = (image: SetStateAction<string>) => {
        setSelectedImage(image);
        setMainImage(image);
    };

    // Handle modal close
    const closeModal = () => {
        setIsModalOpen(false);
    };
   
    // Get similar products (same category)
    const similarProducts = products.filter(
        (p) => p.category === product?.category && p.id !== product.id
    );

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        The product you are looking for does not exist. Please check the URL or try searching for another product.
                    </p>
                    <a href="/products" className="mt-6 inline-block px-6 py-3 bg-[#1a6169] text-white font-medium rounded-md hover:bg-[#2e7780] transition-colors">
                        Go Back to Products
                    </a>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="p-4 sm:p-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb Navigation */}
                    <nav className="text-sm my-4">
                        <ol className="flex space-x-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>/</li>
                            <li>
                                <Link to="/products" className="text-gray-400 hover:underline">
                                    Products
                                </Link>
                            </li>
                            <li>/</li>
                            <li className="text-[#1a6169]">{product.name}</li>
                        </ol>
                    </nav>

                    {/* Product Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                        {/* Image Gallery */}
                        <div className="space-y-2 flex flex-col sm:flex-row gap-4 sm:gap-6">
                            {/* Thumbnails */}
                            <div className="grid grid-cols-4 sm:grid-cols-1 w-full sm:w-1/4 h-full gap-4">
                                {product.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="cursor-pointer"
                                        onClick={() => handleThumbnailClick(image)}
                                    >
                                        <img
                                            loading="lazy"
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-18 sm:h-28 lg:h-29 object-cover rounded-lg shadow-md"
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Main Image */}
                            <div
                                className="cursor-zoom-in w-full sm:w-3/4"
                                onClick={() => setIsModalOpen(true)}
                            >
                                <img
                                    loading="lazy"
                                    src={mainImage}
                                    alt={product.name}
                                    className="w-full h-72 sm:h-64 md:h-96 object-cover rounded-lg shadow-md"
                                />
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-4 text-left">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                                    {product.name}
                                </h1>
                                <p className="text-2xl sm:text-3xl text-[#1a6169] mt-2 sm:mt-0">
                                    ${product.price}
                                </p>
                            </div>
                            <p className="text-gray-700 my-4 sm:my-6 text-sm sm:text-base">
                                {product.description}
                            </p>
                            <div className="flex items-center">
                                <p className="text-base font-semibold text-gray-600">Category:&nbsp;</p>
                                <p className="text-gray-800  text-lg">
                                    {product.category}
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="text-base font-semibold text-gray-600">Quantity:&nbsp;</p>
                                <button
                                    onClick={() => handleDecrement()}
                                    className="bg-gray-300 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                                >
                                    <MinusIcon size={20} />
                                </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
                                    className="bg-gray-200  p-2 border-0 w-24 text-center text-lg font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                />
                                <button
                                    onClick={() => handleIncrement()}
                                    className="bg-gray-300 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                                >
                                    <Plus size={20} />
                                </button>
                            </div>
                            <button onClick={()=>addToOrder({...product,quantity})} className="px-6 py-3 bg-[#1a6169] text-white rounded-lg hover:bg-[#1d4448] transition-all duration-300 cursor-pointer">
                                Order
                            </button>
                        </div>
                    </div>
                </div>

                {/* Modal for Zoomed Image */}
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Zoomed Image"
                >
                    <div className="relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
                            aria-label="Close modal"
                        >
                            <X />
                        </button>
                        <Zoom>
                            <img
                                loading="lazy"
                                src={selectedImage}
                                alt="Zoomed Image"
                                className="w-full h-auto rounded-lg"
                            />
                        </Zoom>
                    </div>
                </Modal>
            </div>

            {/* Similar Products Section */}
            <div className="w-full bg-gray-200">
                <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
                        Similar Products
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {similarProducts.map((similarProduct) => (
                            <Link
                                key={similarProduct.id}
                                to={`/products/${similarProduct.id}`}
                                className="bg-white cursor-pointer text-left rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
                            >
                                {/* Product Image */}
                                <div className="overflow-hidden">
                                    <img
                                        loading="lazy"
                                        src={similarProduct.images[0]}
                                        alt={similarProduct.name}
                                        className="w-full h-48 sm:h-64 object-cover transition-transform duration-600 hover:scale-110 hover:rotate-2"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="p-4">
                                    <p className="text-xs mb-2 bg-gray-400 w-fit p-1 px-2.5 rounded-2xl text-white">
                                        {similarProduct.category}
                                    </p>
                                    <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-2">
                                        {similarProduct.name}
                                    </h2>
                                    <p className="text-base sm:text-lg text-gray-600 mb-2">
                                        {similarProduct.price}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailPage;
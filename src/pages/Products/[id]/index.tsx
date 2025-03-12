import { SetStateAction, useEffect, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Modal from 'react-modal';
import { Link, useParams } from 'react-router-dom';
import { products } from '../../../constants/data';
import { X } from 'lucide-react';

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

    // Find the product by ID
    const product = products.find((p) => p.id === id);

    // State for modal and selected image
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(product?.images[0] || '');
    const [mainImage, setMainImage] = useState(product?.images[0] || '');

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
            <div className="text-center text-gray-500">
                <h1 className="text-4xl font-bold">Product Not Found</h1>
                <p className="text-lg">The product you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <>  <div className="p-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb Navigation */}
                <nav className="text-sm my-4">
                    <ol className="flex space-x-2 ">
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
                    <div className="space-y-6 flex gap-2">
                        {/* Thumbnails */}
                        <div className="grid grid-cols-1 w-1/4 h-full gap-4">
                            {product.images.map((image, index) => (
                                <div
                                    key={index}
                                    className="cursor-pointer"
                                    onClick={() => handleThumbnailClick(image)}
                                >
                                    <img
                                        loading='lazy'
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-32 h-28 object-cover rounded-lg shadow-md"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Main Image */}
                        <div
                            className="cursor-zoom-in"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <img
                                loading='lazy'
                                src={mainImage}
                                alt={product.name}
                                className="w-[500px] h-96 object-cover rounded-lg shadow-md"
                            />
                        </div>


                    </div>

                    {/* Product Info */}
                    <div className="space-y-4 text-left">
                        <div className="flex justify-between items-center">
                            <h1 className="text-5xl font-bold">{product.name}</h1>
                            <p className="text-3xl text-[#1a6169]">{product.price}</p>
                        </div>
                        <p className="text-gray-700 my-6">{product.description}</p>
                        <div className="flex items-center">
                            <p className='text-base font-semibold text-gray-600'>Category:&nbsp;</p>
                            <p className="text-white bg-gray-300 w-fit p-1 px-4 rounded-2xl text-sm">{product.category}</p>
                        </div>
                        <button className="px-6 py-3 bg-[#1a6169] text-white rounded-lg hover:bg-[#1d4448] transition-all duration-300">
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
                            loading='lazy'
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
                <div className=" py-12 max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8">Similar Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                                        className="w-full h-64 object-cover transition-transform duration-600 hover:scale-125 hover:rotate-5"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="p-4 ">
                                    <p className="text-xs mb-2 bg-gray-400 w-fit p-1 px-2.5 rounded-2xl text-white">
                                        {similarProduct.category}
                                    </p>
                                    <h2 className="text-xl font-bold text-gray-700 mb-2">
                                        {similarProduct.name}
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-2">
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
import { MinusIcon, Plus } from 'lucide-react';
import { useState } from 'react';

const Order = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Product Name',
            category: 'Category',
            price: 29.99,
            quantity: 1,
            image: '/bg.jpg',
        },
        // Add more items as needed
    ]);

    const handleQuantityChange = (id: number, newQuantity: number) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
            )
        );
    };

    const handleDecrement = (id: number) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
            )
        );
    };

    const handleIncrement = (id: number) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    return (
        <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Heading Section */}
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                        Your Order
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-sm sm:text-base leading-relaxed text-gray-500">
                        Explore our collection of innovative NFC-enabled digital business cards, designed to elevate your professional networking experience.
                    </p>
                </div>

                {/* Items List */}
                <div className="max-w-6xl mx-auto space-y-6">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 gap-6"
                        >
                            {/* Product Image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-36 h-36 sm:w-36 sm:h-36 object-cover rounded-lg"
                            />

                            {/* Product Details */}
                            <div className="flex-1 flex flex-col sm:flex-row justify-between w-full gap-4">
                                <div className="flex flex-col items-start gap-2">
                                    <h1 className="text-2xl font-bold text-gray-900">{item.name}</h1>
                                    <p className="text-sm font-medium text-gray-600">{item.category}</p>
                                    <p className="flex items-center text-sm font-medium text-gray-600">Original Price:&nbsp;<p className="text-xl font-semibold text-gray-800">
                                        ${item.price.toFixed(2)}
                                    </p> </p>
                                    
                                    <p className="flex items-center text-sm font-medium text-gray-600">Total Price:&nbsp;
                                        <h1 className='text-2xl font-bold text-green-700'>${item.price * item.quantity}</h1>
                                    </p>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => handleDecrement(item.id)}
                                        className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                                    >
                                        <MinusIcon size={20} />
                                    </button>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                                        className="bg-gray-100 rounded-lg p-2 border-0 w-16 text-center text-lg font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    />
                                    <button
                                        onClick={() => handleIncrement(item.id)}
                                        className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                                    >
                                        <Plus size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Order;
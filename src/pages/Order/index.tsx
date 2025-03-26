import { useState } from 'react';
import { MinusIcon, Plus, Trash2 } from 'lucide-react';
import { useOrder } from '../../context/orderContext';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

const Order = () => {
    const { orders, updateQuantity, removeFromOrder } = useOrder();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        if (orders.length > 0) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        // Add your checkout logic here
        console.log("Proceeding to checkout with orders:", orders);
        handleClose();
        // You might want to redirect to a checkout page or process payment here
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
                    {orders?.map((item) => (
                        <div key={item.id} className="flex items-center text-left bg-white p-6 rounded-xl shadow-lg gap-6">
                            <img src={item.image} alt={item.name} className="w-36 h-36 object-cover rounded-lg" />

                            <div className="flex-1 flex flex-col sm:flex-row justify-between w-full gap-4">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <h1 className="text-3xl font-bold text-gray-900 ">{item.name}</h1>
                                        <p className="flex text-xs bg-gray-300 w-fit p-1 items-center  px-3 font-semibold rounded-2xl text-white">{item.category}</p>
                                    </div>
                                    <p className="text-lg font-base text-gray-800">
                                        Original Price:&nbsp;
                                        <span className='font-base text-xl'>
                                            ${item.price.toFixed(2)}
                                        </span>
                                    </p>
                                    <p className="text-lg font-base text-gray-800">
                                        Quantity:&nbsp;
                                        <span className='font-base text-xl'>
                                            {item.quantity}
                                        </span>
                                    </p>
                                    <p className="text-xl font-base text-gray-800">
                                        Total:&nbsp;
                                        <span className='font-bold text-3xl text-green-700'>
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </span>
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                                        <MinusIcon size={20} />
                                    </button>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                                        className="w-16 text-center border rounded-lg p-2"
                                    />
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                                        <Plus size={20} />
                                    </button>
                                    <button onClick={() => removeFromOrder(item.id)} className="p-2 text-red-500 hover:text-red-600  cursor-pointer">
                                        <Trash2 />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {orders.length > 0 && (
                <div className="flex justify-center">
                    <button
                        onClick={handleOpen}
                        className="px-6 py-3 bg-[#1a6169] text-white text-xl rounded-lg hover:bg-[#1d4448] transition-all duration-300 cursor-pointer my-8"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}

            {/* MUI Confirmation Dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirm Order"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to proceed with this order?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{
                        color: '#1a6169',
                        backgroundColor: 'white',
                        fontWeight:500,
                        
                    }}>Cancel</Button>
                    <Button
                        onClick={handleConfirm}
                        autoFocus
                        sx={{
                            backgroundColor: '#1a6169',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#1d4448',
                            }
                        }}
                    >
                        Yes, Proceed
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Order;
import { createContext, ReactNode, useContext, useState } from "react";

interface OrderItem {
    id: number;
    name: string;
    category: string;
    quantity: number;
    image: string;
    price: number;
}

export interface OrderContextType {
    orders: OrderItem[];
    addToOrder: (item: OrderItem) => void;
    updateQuantity: (id: number, quantity: number) => void;
    removeFromOrder: (id: number) => void;
}

export const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {

    const [orders, setOrders] = useState<OrderItem[]>([])
    // ADD ORDERS
    const addToOrder = (item: OrderItem) => {
        setOrders((prev) => {
            const existingOrder = prev.find((order) => order.id === item.id);
            if (existingOrder) {
                return prev.map((order) =>
                    order.id === item.id ? { ...order, quantity: order.quantity + 1 } : order
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    // UPDATE ORDERS
    const updateQuantity = (id: number, quantity: number) => {
        setOrders((prev) => prev.map((order) => order.id === id ? { ...order, quantity: Math.max(1, quantity) } : order))
    }

    // REMOVE ORDERS
    const removeFromOrder = (id: number) => {
        setOrders((prev) => prev.filter((order) => order.id !== id))
    }

    return (
        <OrderContext.Provider value={{ orders, addToOrder, updateQuantity, removeFromOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => {
    const context = useContext(OrderContext);

    if (!context) {
        throw new Error("useOrder must be used within an OrderProvider");
    }
    return context;
};
import { useContext } from "react";
import { OrderContext, OrderContextType } from "../context/orderContext";

export const useOrder = () => {
    const context = useContext<OrderContextType | undefined>(OrderContext);

    if (!context) {
        throw new Error("useOrder must be used within an OrderProvider");
    }
    return context;
};

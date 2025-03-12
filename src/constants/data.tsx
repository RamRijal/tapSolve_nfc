export const products = [
    {
        id: '1',
        image: "/card1.jpg", // Replace with your NFC card image URL
        name: "Executive NFC Card",
        description: "A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.",
        price: "$29.99",
        category: "PVC",
        images: [
            '/card2.jpg', // Thumbnail 1
            '/card3.jpg', // Thumbnail 2
            '/card1.jpg', // Main image
            
        ],
    },
    {
        id: '2',
        image: "/card2.jpg", // Replace with your NFC card image URL
        name: "Designer NFC Card",
        description: "A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.",
        price: "$34.99",
        category: "Metal",
        images: [
            '/card2.jpg', // Thumbnail 1
            '/card1.jpg', // Main image
            '/card3.jpg', // Thumbnail 2
            
        ],
    },
    {
        id: '3',
        image: "/card3.jpg", // Replace with your NFC card image URL
        name: "Minimalist NFC Card",
        description: "A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.",
        price: "$24.99",
        category: "Wooden",
        images: [
            '/card1.jpg', // Main image
            '/card3.jpg', // Thumbnail 2
            '/card2.jpg', // Thumbnail 1
            
        ],
    },
    {
        id: '4',
        image: "/card4.jpg", // Replace with your NFC card image URL
        name: "Eco-Friendly NFC Card",
        description: "A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.",
        price: "$27.99",
        category: "PVC",
        images: [
            '/card3.jpg', // Thumbnail 2
            '/card1.jpg', // Main image
            '/card2.jpg', // Thumbnail 1
            
        ],
    },
    {
        id: '5',
        image: "/card5.jpg", // Replace with your NFC card image URL
        name: "Metallic NFC Card",
        description: "A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.",
        price: "$39.99",
        category: "Wooden",
        images: [
            '/card2.jpg', // Thumbnail 1
            '/card1.jpg', // Main image
            '/card3.jpg', // Thumbnail 2
            
        ],
    },
    {
        id: '6',
        image: "/bg.jpg", // Replace with your NFC card image URL
        name: "Transparent NFC Card",
        description: "A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.",
        price: "$32.99",
        category: "Metal",
        images: [
            '/card1.jpg', // Main image
            '/card2.jpg', // Thumbnail 1
            '/card3.jpg', // Thumbnail 2
            
        ],
    },
];

export const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }, // Fade in and move up
};
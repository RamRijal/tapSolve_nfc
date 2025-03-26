export const products = [
    {
        id: 1,
        image: "/card1.jpg", // Replace with your NFC card image URL
        name: "Executive NFC Card",
        description: "A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.",
        price: 29.99,
        category: "PVC",
        images: [
            '/card2.jpg', // Thumbnail 1
            '/card3.jpg', // Thumbnail 2
            '/card1.jpg', // Main image

        ]
        , quantity: 1
    },
    {
        id: 2,
        image: "/card2.jpg", // Replace with your NFC card image URL
        name: "Designer NFC Card",
        description: "A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.",
        price: 34.99,
        category: "Metal",
        images: [
            '/card2.jpg', // Thumbnail 1
            '/card1.jpg', // Main image
            '/card3.jpg', // Thumbnail 2

        ]
        ,
        quantity: 1

    },
    {
        id: 3,
        image: "/card3.jpg", // Replace with your NFC card image URL
        name: "Minimalist NFC Card",
        description: "A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.",
        price: 24.99,
        category: "Wooden",
        images: [
            '/card1.jpg', // Main image
            '/card3.jpg', // Thumbnail 2
            '/card2.jpg', // Thumbnail 1

        ],
        quantity: 1
    },
    {
        id: 4,
        image: "/card4.jpg", // Replace with your NFC card image URL
        name: "Eco-Friendly NFC Card",
        description: "A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.",
        price: 27.99,
        category: "PVC",
        images: [
            '/card3.jpg', // Thumbnail 2
            '/card1.jpg', // Main image
            '/card2.jpg', // Thumbnail 1

        ],
        quantity: 1
    },
    {
        id: 5,
        image: "/card5.jpg", // Replace with your NFC card image URL
        name: "Metallic NFC Card",
        description: "A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.",
        price: 39.99,
        category: "Wooden",
        images: [
            '/card2.jpg', // Thumbnail 1
            '/card1.jpg', // Main image
            '/card3.jpg', // Thumbnail 2

        ],
        quantity: 1
    },
    {
        id: 6,
        image: "/bg.jpg", // Replace with your NFC card image URL
        name: "Transparent NFC Card",
        description: "A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.A high-end NFC card with advanced features.",
        price: 32.99,
        category: "Metal",
        images: [
            '/card1.jpg', // Main image
            '/card2.jpg', // Thumbnail 1
            '/card3.jpg', // Thumbnail 2

        ],
        quantity: 1
    },
];


export const nfcBusinessCardFeatures = [
    {
        title: "Our features",
        subtitle: "Revolutionize your networking with our cutting-edge",
        description: "NFC-Enabled Digital Business Card. Leveraging Near Field Communication (NFC) technology with vCard, our digital business cards provide seamless connectivity and unmatched convenience, tailored for modern professionals.",
        list: [
            {
                title: "Swift Contact Sharing",
                description: "Exchange contact information instantly by tapping your NFC-enabled smartphone against our digital business card. Eliminate manual input and ensure accurate, immediate contact sharing.",
            },
            {
                title: "Flawless Connectivity",
                description: "Merge offline and online networking with our seamless NFC technology and vCard. Connect instantly and maintain a professional presence both in-person and online.",
            },
            {
                title: "Effortless Distribution",
                description: "Share your digital business card effortlessly, removing the need for traditional paper cards. Simplify your networking process and reduce waste with a simple tap or scan.",
            },
            {
                title: "Forward-Thinking Networking",
                description: "Stay ahead of the curve by adopting our NFC-Enabled Digital Business Card solution. Embrace the future of networking and stay aligned with the latest technological advancements.",
            },
        ],
    },
];


export const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }, // Fade in and move up
};
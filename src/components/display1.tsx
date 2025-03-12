import { Link } from "react-router-dom";
import { TextFade } from "./ui/TextFadeUp";
import { motion } from "framer-motion";
import { cardVariants } from "../constants/data";

const nfcBusinessCardFeatures = [
    {
        title: "NFC-Enabled Digital Business Card",
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

const App = () => {
    // Animation variants for Framer Motion
   
    return (
        <div className="p-8 py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Flex container for image and content */}
                <div className="flex flex-col items-center lg:flex-row gap-8 relative">
                    {/* Image on the left */}
                    <div className="lg:w-1/2 flex justify-center relative group">
                        <div className="relative w-[500px] h-[600px]">
                            <img
                                loading="lazy"
                                src="/bg.jpg" // Replace with your image URL
                                alt="NFC Business Card"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 flex flex-col bg-gradient-to-b from-black/20 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg  items-center justify-center gap-4 cursor-pointer">
                                <p className="text-white text-5xl font-semibold p-12">Want to get started with us?</p>
                                <Link to="/products">
                                    <button className="bg-[#1a6169] text-white px-6 py-3 rounded-full hover:bg-[#164b51] transition-colors cursor-pointer">
                                        Explore Products
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Content on the right */}
                    <div className="lg:w-1/2 text-left">
                        <TextFade direction="up">
                            <h1 className="text-4xl font-extrabold text-[#1a6169] mb-4">
                                {nfcBusinessCardFeatures[0].title}
                            </h1>
                        </TextFade>
                        <motion.p
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="text-base text-gray-700 mb-6">
                            {nfcBusinessCardFeatures[0].subtitle} {nfcBusinessCardFeatures[0].description}
                        </motion.p>

                        {/* Mapped list data */}
                        <div
                            className="space-y-4">
                            {nfcBusinessCardFeatures[0].list.map((feature, index) => (
                                <motion.div
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible" key={index} className="flex items-start p-3 border-l-4 border-[#1a6169]">
                                    {/* <CircleCheckBig size={40} className="mr-2 text-[#1a6169] mt-1" /> */}
                                    <div>
                                        <h2 className="text-xl font-bold text-[#1a6169] mb-1">
                                            {feature.title}
                                        </h2>
                                        <p className="text-base text-gray-700">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

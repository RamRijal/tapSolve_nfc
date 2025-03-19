import { motion } from "framer-motion";
import { cardVariants } from "../data/data";
import { TextFade } from "./ui/TextFadeUp";

// Dummy data for "How It Works" steps
const howItWorksData = [
    {
        id: 1,
        icon: "/connect.svg", // Replace with your icon URL
        title: "Contactless NFC Chip",
        description: "Tap your card on a phone and share your contact details.",
    },
    {
        id: 2,
        icon: "/qr.svg", // Replace with your icon URL
        title: "QR Code",
        description: "Scan the QR code to access and save contact information easily.",
    },
    {
        id: 3,
        icon: "/share.svg", // Replace with your icon URL
        title: "Shareable Link",
        description: "Share your digital card’s direct link, accessible from anywhere.",
    },
];

const HowItWorks = () => {
    return (
        <div className="p-6 md:py-16 bg-gray-100 ">
            <div className="max-w-7xl mx-auto">
                <TextFade direction="up">
                    <motion.p
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="text-5xl mt-4 font-bold  leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        How it <span className="text-[#D1B896]">works</span>
                        <p className="text-lg font-medium my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere non harum </p>
                    </motion.p>
                </TextFade>
                {/* Grid layout for steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                    {howItWorksData.map((step) => (
                        <div
                            key={step.id}
                            className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-500 hover:scale-105 hover:shadow-lg">
                            {/* Step Icon */}
                            <img
                                src={step.icon}
                                alt={step.title}
                                className="w-24 h-24 mx-auto my-4 mb-8"
                            />

                            {/* Step Title */}
                            <h2 className="text-2xl font-semibold text-[#1a6169] mb-2">
                                {step.title}
                            </h2>

                            {/* Step Description */}
                            <p className="text-gray-700">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;

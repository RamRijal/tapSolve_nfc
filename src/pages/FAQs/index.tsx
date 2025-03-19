import React from 'react';
import { Card } from '../../components/ui/card';
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '../../components/ui/accordion'; // Adjust the import path based on your project structure
import { motion } from 'framer-motion'; // Import Framer Motion
import './index.css';
import { cardVariants } from '../../data/data';
// Dummy FAQ data
const faqData = [
    {
        question: "What is TapSolve?",
        answer: "TapSolve is a platform that provides innovative solutions to transform your business and streamline operations."
    },
    {
        question: "How do I get started?",
        answer: "You can get started by signing up on our platform and exploring the available solutions tailored to your needs."
    },
    {
        question: "Is there a free trial?",
        answer: "Yes, we offer a free trial for new users to experience our platform before committing to a subscription."
    },
    {
        question: "What support options are available?",
        answer: "We provide 24/7 customer support via email, chat, and phone to assist you with any issues or questions."
    },
    {
        question: "How do I get started?",
        answer: "You can get started by signing up on our platform and exploring the available solutions tailored to your needs."
    },
    {
        question: "Is there a free trial?",
        answer: "Yes, we offer a free trial for new users to experience our platform before committing to a subscription."
    },
    {
        question: "What support options are available?",
        answer: "We provide 24/7 customer support via email, chat, and phone to assist you with any issues or questions."
    }
];

const FAQs: React.FC = () => {
    return (
        <div id='faqs' className="h-full p-8 bg-gray-200 px-4 mx-auto sm:px-6 lg:px-8 ">
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                className="max-w-2xl mx-auto text-center">
                <h2 className="text-5xl mt-4 font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Frequently asked<span className="text-[#D1B896]"> questions </span></h2>
                <p className="max-w-xl mx-auto mt-2 mb-8 text-base leading-relaxed text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            </motion.div>
            <Card className="max-w-3xl mx-auto px-6 bg-white shadow-lg rounded-lg">
                <Accordion type="single" collapsible className="w-full ">
                    {faqData.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-normal text-lg hover:no-underline cursor-pointer">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-left font-normal text-base ">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Card>
        </div>
    );
};

export default FAQs;
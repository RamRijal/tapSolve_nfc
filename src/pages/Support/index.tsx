import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';

const SupportPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Page Title */}
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Support Center</h1>
                <p className="text-gray-600 mb-8">
                    Welcome to the NFC Card E-Commerce Support Center. We're here to help you with any questions or issues you may have.
                </p>

                {/* FAQ Section */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full mb-8">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-medium">
                            How do I activate my NFC card?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            To activate your NFC card, follow the instructions provided in the packaging or visit our activation page.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-medium">
                            What should I do if my NFC card isn't working?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            Ensure your device supports NFC and that NFC is enabled. If the issue persists, contact our support team.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-medium">
                            Can I return or exchange my NFC card?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            Yes, you can return or exchange your NFC card within 30 days of purchase. Please review our return policy for details.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* Contact Section */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <p className="text-gray-600">
                            Email: <a href="mailto:support@nfccardstore.com" className="text-blue-600 hover:underline">support@nfccardstore.com</a>
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <p className="text-gray-600">Phone: +1 (800) 123-4567</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                        <p className="text-gray-600">Live Chat: Available during business hours (9 AM - 5 PM EST)</p>
                    </div>
                </div>

                {/* Support Form Section */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Submit a Support Request</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <Input type="text" placeholder="Name" required />
                        <Input type="email" placeholder="Email" required />
                    </div>
                    <Input type="text" placeholder="Subject" required />
                    <Textarea placeholder="Message" rows={5} required />
                    <Button type="submit" className="w-full sm:w-auto">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SupportPage;
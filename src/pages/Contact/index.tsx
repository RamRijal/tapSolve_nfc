import React, { useState } from 'react';
import { contactInfo } from '../../data/dummy';
import { FormSchema } from '../../schema/formSchema';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Update form data
        setFormData({ ...formData, [name]: value });

        // Validate and clear errors for the current field
        const updatedFormData = { ...formData, [name]: value };
        const result = FormSchema.safeParse(updatedFormData);

        if (result.success) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' })); // Clear error for this field
        } else {
            const newErrors = result.error.flatten().fieldErrors as Record<string, string[]>;
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: newErrors[name]?.[0] || '', // Keep other errors
            }));
        }
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const result = FormSchema.safeParse(formData);

        if (!result.success) {
            const newErrors = result.error.flatten().fieldErrors;
            setErrors(
                {
                    name: newErrors.name?.[0] || '',
                    email: newErrors.email?.[0] || '',
                    phone: newErrors.phone?.[0] || '',
                    company: newErrors.company?.[0] || '',
                    message: newErrors.message?.[0] || '',
                }
            )
            toast.error("Please fix the errors before submitting.");
            return;
        }
        else {
            // If validation is successful, clear errors
            setErrors({
                name: '',
                email: '',
                phone: '',
                company: '',
                message: '',
            });

            toast.success("Form submitted successfully")
        }

        // EmailJS Service Details
        const serviceID = "service_aps9t9q";
        const templateID = "template_21tmugq";
        const publicKey = "uQquI93iDqkpafrIA";

        // Sending email using EmailJS
        emailjs.send(serviceID, templateID, formData, publicKey)
            .then(() => {
                toast.success("Message sent successfully!");
                // Reset form fields after successful email
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: '',
                });
            })
            .catch((error) => {
                toast.error("Failed to send email.");
                console.error("Error sending email:", error);
            });
    }
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-12">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Contact Us</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">We'd love to hear from you! Reach out to us using the information below or send us a message.</p>
                </div>

                <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                    <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="overflow-hidden bg-white rounded-xl shadow-md">
                                <div className="p-6 ">
                                    {info.icon}
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="mt-6 text-lg font-medium text-gray-900">
                                            {detail.text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 overflow-hidden bg-white rounded-xl shadow-md">
                        <div className="px-6 py-12 sm:p-12">
                            <h3 className="text-3xl font-semibold text-center text-gray-900">Send Us a Message</h3>

                            <form onSubmit={handleSubmit} method="POST" className="mt-14">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 text-left">
                                    <div>
                                        <label htmlFor="name" className="text-base font-medium text-gray-900">Your Name&nbsp;<span className='text-red-700 text-xl'>*</span></label>
                                        <div className="mt-2.5 relative">
                                            <input onChange={handleChange} value={formData.name} type="text" name="name" id="name" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}

                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="text-base font-medium text-gray-900">Email Address&nbsp;<span className='text-red-700 text-xl'>*</span></label>
                                        <div className="mt-2.5 relative">
                                            <input onChange={handleChange} value={formData.email} type="email" name="email" id="email" placeholder="Enter your email address" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="text-base font-medium text-gray-900">Phone Number&nbsp;<span className='text-red-700 text-xl'>*</span></label>
                                        <div className="mt-2.5 relative">
                                            <input onChange={handleChange} value={formData.phone} type="tel" name="phone" id="phone" placeholder="Enter your phone number" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="text-base font-medium text-gray-900">Company Name&nbsp;<span className='text-red-700 text-xl'>*</span></label>
                                        <div className="mt-2.5 relative">
                                            <input onChange={handleChange} value={formData.company} type="text" name="company" id="company" placeholder="Enter your company name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                            {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}

                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="text-base font-medium text-gray-900">Message</label>
                                        <div className="mt-2.5 relative">
                                            <textarea onChange={handleChange} value={formData.message} name="message" id="message" placeholder="Enter your message" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"></textarea>
                                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}

                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <button type="submit" className="inline-flex cursor-pointer items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-[#caaa7e] border border-transparent rounded-md focus:outline-none hover:bg-[#b99d76] focus:bg-[#c6a678]">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

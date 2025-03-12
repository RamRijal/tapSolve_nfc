import { ChevronUp } from 'lucide-react';
import React from 'react';

interface FooterProps {
    copyrightYear?: number;
    companyName?: string;
    links?: Array<{
        text: string;
        href: string;
    }>;
}

const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: '/facebook.svg' },
    { name: 'Twitter', href: 'https://twitter.com', icon: '/twitter.svg' },
    { name: 'Instagram', href: 'https://instagram.com', icon: '/instagram.svg' },
];

const Footer: React.FC<FooterProps> = ({
    copyrightYear = new Date().getFullYear(),
    companyName = 'TapSolve App',
    links = [
        { text: 'Home', href: '/' },
        { text: 'Products', href: '/products' },
        { text: 'FAQs', href: '#faqs' },
        { text: 'Support', href: '/support' },
        { text: 'Contact', href: '/contact' }
    ]
}) => {
    return (
        <footer className="bg-[#1A6169] text-white text-left">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <img src="/WhiteFullLogo.png" className='h-16 w-auto' alt="" />
                        <p className="text-sm text-white/80">
                            Elevate your networking experience with our state-of-the-art NFC Integrated Digital Business Card.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-white/90 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Follow Us</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="text-white/90 hover:text-white transition-colors duration-200"
                                >
                                    <img
                                        loading="lazy"
                                        src={social.icon}
                                        alt={social.name}
                                        className="w-6 h-6"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Subscribe</h3>
                        <p className="text-sm text-white/80">
                            Subscribe to our newsletter for the latest updates and offers.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-[#D1B896] text-white rounded-lg hover:bg-[#bfa988] transition-all duration-300 cursor-pointer"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright Information */}
                <div className="text-center text-sm text-white/80 border-t border-white/20 pt-8">
                    <p>&copy; {copyrightYear} {companyName}. All rights reserved.</p>
                </div>

                {/* Back to Top Button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed z-50 bottom-4 right-4 px-3 py-3 bg-[#caaa7e] text-white rounded-full shadow-lg hover:bg-[#e3c294] transition-all duration-300"
                >
                    <ChevronUp />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
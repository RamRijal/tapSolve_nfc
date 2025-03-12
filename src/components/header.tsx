import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react'; // Import a hamburger menu icon
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from './ui/drawer';

interface HeaderProps {
    logoSrc?: string;
    logoAlt?: string;
}

const navItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Support", link: "/support" },
    { label: "Contact", link: "/contact" },
];

const Header: React.FC<HeaderProps> = ({
    logoSrc = '/BlackFullLogo.png',
    logoAlt = 'Company Logo'
}) => {
    const currentPath = window.location.pathname; // Get the current route
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
    const [isScrolled, setIsScrolled] = useState(false); // State to track scroll

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled down
            if (window.scrollY > 32) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className={`sticky top-0 z-10 flex justify-between items-center md:px-6 px-4 py-3  ${isScrolled ? 'backdrop-blur-2xl bg-black/50' : ''}`}>
            {/* Logo Section */}
            <div className="shrink-0 items-center flex">
               <a href="/"> <img
                    src={isScrolled ? '/WhiteFullLogo.png' : logoSrc} // Change logo based on scroll state
                    alt={logoAlt}
                    className="max-h-[45px] md:max-h-[60px] w-auto object-contain"
                />
                </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex bg-white/60 backdrop-blur-lg border-white/20 p-6 px-10 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.1)]">
                <ul className="flex justify-center items-center gap-8 font-semibold">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.link}
                                className={`relative text-lg group transition-colors duration-200 ${currentPath === item.link
                                    ? "text-[#ffc778] text-xl " // Active state color
                                    : isScrolled
                                        ? "text-white" // Scrolled state color
                                        : "text-gray-800 " // Default and hover color
                                    }`}
                            >
                                {item.label}
                                <div className={`absolute -bottom-2 w-0 h-0.5  group-hover:w-full transition-all duration-300 ${isScrolled ? 'bg-white/40' : 'bg-[#ebd1ad]'} `} />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Hamburger Menu */}
            <div className={`lg:hidden`}>
                <Drawer>
                    <DrawerTrigger>
                        <Menu className={`h-8 w-8 ${isScrolled ? 'text-gray-200 ' : 'text-gray-600'}`} />
                        {/* Change icon color based on scroll state / Hamburger icon */}
                    </DrawerTrigger>
                    <DrawerContent className="bg-white/10 backdrop-blur-lg border-white/20 text-gray-200 rounded-t-2xl">
                        <div className="p-6">
                            <ul className="flex flex-col gap-6 font-semibold">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.link}
                                            className={`relative text-lg  group transition-colors duration-200 ${currentPath === item.link ? "text-[#D1B896] text-xl" // Active state color
                                                : "text-gray-100 hover:text-[#9f9f9f]" // Default and hover color
                                                }`}
                                        >
                                            {item.label}
                                            <div className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-white/20 group-hover:w-full transition-all duration-300" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <DrawerClose className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/20 transition-all duration-300">
                            <span className="text-gray-800">Close</span>
                        </DrawerClose>
                    </DrawerContent>
                </Drawer>
            </div>

            {/* Call-to-Action Button */}
            <button
                onClick={() => window.location.href = '/order-now'}
                className="hidden lg:block px-5 py-3 text-white rounded-2xl bg-[#1a6169] hover:bg-[#1d4448] transition-all duration-300 font-semibold shadow-[0_0_25px_rgba(26,97,105,0.3)]"
            >
                Order Now
            </button>
        </header>
    );
};

export default Header;
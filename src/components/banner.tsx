
const Banner = () => {
    return (
        <section className="relative py-8 md:py-0">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
                <img src="/card5.jpg" className="w-full h-full object-cover" alt="Background" />
                <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-black/40"></div>
            </div>

            <div className="relative px-4 mx-auto rounded-md bg-opacity-80 max-w-7xl ">
                <div className="2xl:pl-24">
                    <div className="grid grid-cols-1 gap-y-12 md:grid-cols-1 xl:grid-cols-2  2xl:gap-x-20">
                        <div className="text-center md:py-8 xl:py-12 md:text-center">
                            <h1 className="text-4xl font-bold leading-relaxed text-white">Ready to collaborate with us?</h1>
                            <p className="text-xl font-medium text-gray-100">“Whether you have a question, a project idea, or just want to say hello, we'd love to hear from you. Reach out today and let's start a conversation!”</p>
                            <a href="/contact" title="" className="inline-flex items-center justify-center px-6 py-3 mt-4 text-base font-semibold text-white transition-all duration-200 bg-[#1A6169] shadow-lg rounded-md hover:bg-[#2e6d74]" role="button">Contact Us</a>
                        </div>
                    </div>
                    <div className="relative hidden xl:flex">
                        <img className="md:absolute -rotate-30 md:bottom-0 xl:right-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-0 h-[800px] bg-transparent" src="/Mockup3.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
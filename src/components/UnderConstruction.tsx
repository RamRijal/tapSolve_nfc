import React from 'react';

const UnderConstruction: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4">
            <div className="text-center items-center flex flex-col">
                <img loading='lazy' alt='' src='/notfound.svg' className='h-60'/>
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Page is not available!</h1>
                <p className="text-lg text-gray-600 mb-8">
                    We're working hard to bring you something amazing. Stay tuned!
                </p>
                
                <a href="/" className="mt-6 inline-block px-6 py-3 bg-[#D1B896] text-white font-medium rounded-md hover:bg-[#D1B896] transition-colors">
                    Go Back to Home
                </a>
            </div>
        </div>
    );
};

export default UnderConstruction;

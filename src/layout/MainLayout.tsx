import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
           {children}
            <Footer />
        </>
    );
};

export default MainLayout;

import { ReactNode } from 'react';
import Navbar from './PageFragments/Navbar';
import Footer from './Footer';

interface AppLayoutProps {
    children: ReactNode;
    className?: string;
}

const AppLayout = ({ children, className }: AppLayoutProps) => {
    return (
        <main className={`relative`}>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
};

export default AppLayout;
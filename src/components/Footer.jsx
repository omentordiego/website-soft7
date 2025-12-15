import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-8">
                    <img src="/logo.png" alt="soft7" className="h-12 mx-auto" />
                </div>
                <div className="text-text-muted text-sm">
                    &copy; {new Date().getFullYear()} soft7. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-8">
                    <img src="/logo.png" alt="soft7" className="h-12 mx-auto" />
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-text-muted text-sm">
                    <p>&copy; {new Date().getFullYear()} soft7. Todos os direitos reservados.</p>
                    <div className="hidden md:block w-1 h-1 bg-white/20 rounded-full"></div>
                    <Link to="/privacy-policy" className="hover:text-white transition-colors">
                        Política de Privacidade
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

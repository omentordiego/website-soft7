import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Button = ({
    children,
    href,
    variant = 'primary',
    className = '',
    icon: Icon,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all relative overflow-hidden group";

    const variants = {
        primary: "bg-gradient-to-r from-primary to-accent text-white border border-white/20 hover:shadow-[0_0_40px_rgba(81,47,235,0.6)] shadow-[0_0_20px_rgba(81,47,235,0.3)]",
        secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-primary hover:shadow-[0_0_20px_rgba(81,47,235,0.2)] backdrop-blur-sm",
        outline: "border border-primary text-primary hover:bg-primary/10"
    };

    const sizes = "px-8 py-3.5 text-base md:text-lg";

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            href={href}
            className={`${baseStyles} ${variants[variant]} ${sizes} ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            {...props}
        >
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-white/20 translate-y-full skew-y-12 group-hover:-translate-y-full transition-transform duration-700 ease-in-out" />

            <span className="relative z-10 flex items-center gap-2">
                {children}
                {Icon && <Icon size={20} className="group-hover:translate-x-1 transition-transform" />}
            </span>
        </Component>
    );
};

export default Button;

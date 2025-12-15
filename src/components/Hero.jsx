import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
                {/* Abstract Grid Line */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-accent font-medium">
                        🚀 Automação de nova geração
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                        Nós construímos <br />
                        <span className="text-gradient">fluxos de IA personalizados</span> <br />
                        para sua empresa.
                    </h1>

                    <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                        Tenha funcionários de IA feitos 100% sob medida para o seu negócio e automatize todas as tarefas manuais e repetitivas.
                    </p>

                    <Button
                        href="https://app.sollertis.com.br"
                        variant="primary"
                        icon={ArrowRight}
                        className="shadow-[0_0_40px_rgba(79,125,255,0.3)]"
                    >
                        Quero saber mais
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

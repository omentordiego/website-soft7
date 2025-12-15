import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { id: 1, title: "Diagnóstico", desc: "Você nos conta onde sua operação trava." },
    { id: 2, title: "Customização", desc: "Criamos um fluxo de IA sob medida." },
    { id: 3, title: "Instalação", desc: "Testamos e integramos tudo." },
    { id: 4, title: "Lucro", desc: "Sua empresa roda mais leve e eficiente." },
];

const Process = () => {
    return (
        <section className="py-24 bg-bg-dark" id="processo">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">Como funciona</h2>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[25px] left-0 w-full h-0.5 bg-white/10" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative text-center group"
                            >
                                <div className="w-14 h-14 mx-auto bg-bg-dark border-2 border-primary rounded-full flex items-center justify-center font-bold text-lg mb-6 relative z-10 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {step.id}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-text-muted text-sm">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;

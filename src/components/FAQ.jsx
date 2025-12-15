import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    { q: "Meu negócio é muito específico. IA serve para mim?", a: "Sim. A IA soft7 não é um pacote fechado; é um sistema treinado especificamente nas regras e processos do seu negócio." },
    { q: "O que exatamente um 'Workflow' faz?", a: "Ele substitui o humano na frente do computador: lê e-mails, extrai dados de PDF, preenche planilhas, envia mensagens e toma decisões baseadas em lógica." },
    { q: "Vocês atendem pequenas e grandes empresas?", a: "Sim. A automação escala conforme sua demanda, seja para 10 ou 10.000 processos por dia." },
    { q: "Como eu começo?", a: "Agendando uma consultoria gratuita. Vamos mapear seus gargalos e propor a solução ideal." }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-24 bg-bg-dark" id="faq">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Perguntas Frequentes</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-bg-card border border-white/5 rounded-2xl overflow-hidden shadow-sm hover:border-white/10 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(location => (location === index ? null : index))}
                                className="w-full p-6 flex items-center justify-between text-left"
                            >
                                <span className="font-semibold text-lg">{faq.q}</span>
                                <span className="text-primary">
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-text-muted leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

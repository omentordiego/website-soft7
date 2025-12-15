import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Network, Check, X } from 'lucide-react';

const AdvancedAI = () => {
    return (
        <section className="py-24 bg-bg-card/30 relative overflow-hidden" id="workflows">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-20">
                    <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-text-muted text-sm font-medium mb-8 backdrop-blur-sm">
                        IA Avançada
                    </span>
                    <p className="text-text-muted text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
                        A melhor Inteligência Artificial não substitui pessoas. Ela substitui o
                        trabalho que custa caro demais para ser feito manualmente por elas.
                    </p>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight leading-tight max-w-4xl">
                        Workflows em IA para cortar seu <br className="hidden md:block" />
                        custo e aumentar seu lucro
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="px-6 py-2 rounded-full bg-bg-card border border-white/5 text-text-muted text-sm">
                            Workflows com IA
                        </span>
                        <span className="px-6 py-2 rounded-full bg-bg-card border border-white/5 text-text-muted text-sm">
                            Automatização
                        </span>
                        <span className="px-6 py-2 rounded-full bg-bg-card border border-white/5 text-text-muted text-sm">
                            Resultados reais
                        </span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
                    {/* Generic */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 p-8 rounded-3xl bg-bg-card border border-white/5 opacity-50 hover:opacity-100 transition-opacity"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Bot size={32} className="text-text-muted" />
                            <h3 className="text-2xl font-bold text-text-muted">ChatGPT / Gemini</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <X className="text-red-500 shrink-0 mt-1" size={20} />
                                <span className="text-text-muted">Requer prompt manual toda vez</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="text-red-500 shrink-0 mt-1" size={20} />
                                <span className="text-text-muted">Não conhece os dados da sua empresa</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="text-red-500 shrink-0 mt-1" size={20} />
                                <span className="text-text-muted">Apenas gera texto, não executa ações</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="text-red-500 shrink-0 mt-1" size={20} />
                                <span className="text-text-muted">Resultados genéricos e superficiais</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* soft7 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 p-8 rounded-3xl bg-bg-card border border-primary/50 relative overflow-hidden shadow-[0_0_50px_rgba(79,125,255,0.15)]"
                    >
                        <div className="absolute top-0 right-0 bg-primary/20 p-20 blur-[80px] rounded-full" />

                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <Network size={32} className="text-accent" />
                            <h3 className="text-2xl font-bold">Workflows soft7</h3>
                        </div>
                        <ul className="space-y-4 relative z-10">
                            <li className="flex items-start gap-3">
                                <Check className="text-accent shrink-0 mt-1" size={20} />
                                <span>Roda sozinho 24/7 (Autônomo)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-accent shrink-0 mt-1" size={20} />
                                <span>Integrado 100% ao seu banco de dados</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-accent shrink-0 mt-1" size={20} />
                                <span>Executa tarefas (envia e-mails, cria docs)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-accent shrink-0 mt-1" size={20} />
                                <span>Aprende e evolui com o seu negócio</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AdvancedAI;

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, ShieldCheck, BrainCircuit, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const benefits = [
    {
        icon: TrendingUp,
        title: "Escale sem novas contratações",
        description: "Sua empresa não precisa aumentar a equipe para crescer. Multiplique sua capacidade produtiva com agentes de IA."
    },
    {
        icon: Clock,
        title: "Diminua tarefas repetitivas",
        description: "Foque no que importa e deixe a IA cuidar da rotina monótona e burocrática do dia a dia."
    },
    {
        icon: ShieldCheck,
        title: "Operação à prova de erros",
        description: "Elimine falhas humanas em processos padronizados. A IA executa com precisão cirúrgica 24/7."
    },
    {
        icon: BrainCircuit,
        title: "Time mais estratégico",
        description: "Tire seu time do operacional e coloque na estratégia. Aproveite o potencial humano para inovar."
    }
];

const Benefits = () => {
    return (
        <section className="py-24 bg-bg-card/50 relative overflow-hidden" id="beneficios">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Por que <span className="text-gradient">automatizar?</span></h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">
                        Transforme custos operacionais em investimento estratégico com nossos workflows inteligentes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_10px_40px_-10px_rgba(79,125,255,0.2)]"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-bg-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-primary/30">
                                <item.icon className="text-primary" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-text-muted leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button
                        href="https://wa.me/5534984251064?text=Opa%2C%20fala%20Isa%21%20Vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20a%20empresa%21"
                        variant="secondary"
                        icon={ArrowRight}
                    >
                        Quero saber mais
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Benefits;

import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Megaphone, Users, FileText, Briefcase, BarChart3, CheckCircle2 } from 'lucide-react';

const categories = [
    {
        title: "Vendas",
        icon: Briefcase,
        items: ["Onboarding de clientes", "Geração de contratos", "Follow-up automático", "Pesquisa de leads"]

    },
    {
        title: "Recursos Humanos",
        icon: Users,
        items: ["Onboarding automático", "Triagem de currículos", "Agendamento de entrevistas", "Processamento de reembolsos"]
    },
    {
        title: "Administração",
        icon: FileText,
        items: ["Extração de dados (OCR)", "Resumos de e-mails", "Triagem de documentos", "Controle de pagamentos"]
    },
    {
        title: "Marketing",
        icon: Megaphone,
        items: ["Análise de campanhas", "Triagem de e-mails", "Agendamentos inteligentes", "Briefing inicial"]
    },
    {
        title: "Gestão",
        icon: BarChart3,
        items: ["Transcrição de reuniões", "Análise de performance", "Relatórios semanais", "Gestão de tarefas no CRM"]
    }
];

const Automation = () => {
    return (
        <section className="py-24 bg-bg-dark relative" id="automacoes">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        O que é possível <span className="text-gradient">automatizar?</span>
                    </h2>
                    <p className="text-text-muted text-lg">
                        Todas as tarefas repetitivas e manuais da sua empresa.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-bg-card p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-all hover:shadow-[0_0_30px_rgba(46,255,138,0.1)]"
                        >
                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                                    <cat.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold">{cat.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {cat.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-text-muted">
                                        <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button
                        href="https://app.sollertis.com.br"
                        variant="secondary"
                    >
                        👉 Quero saber mais
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Automation;

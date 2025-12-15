import React from 'react';
import { User2 } from 'lucide-react';

const team = [
    { name: "Ângelo Cerqueira", role: "Fundador & Especialista IA", desc: "Líder técnico, arquiteto de soluções de automação complexas." },
    { name: "Letícia Amorim", role: "Inovação & Impacto", desc: "Visão estratégica de negócios e escalabilidade." },
    { name: "Mariana Alcântara", role: "Expansão & Estratégia", desc: "Customer success e implementação ágil." },
];

const Team = () => {
    return (
        <section className="py-24 bg-bg-card/20" id="quem-somos">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Quem Somos</h2>

                <div className="flex flex-wrap justify-center gap-10">
                    {team.map((member, index) => (
                        <div key={index} className="w-full md:w-80 group">
                            <div className="w-full aspect-[4/5] bg-bg-card rounded-2xl mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                {/* Placeholder for member photo */}
                                <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                                    <User2 size={64} className="text-white/20" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                            <p className="text-primary text-sm font-medium mb-3 uppercase tracking-wider">{member.role}</p>
                            <p className="text-text-muted text-sm leading-relaxed">{member.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;

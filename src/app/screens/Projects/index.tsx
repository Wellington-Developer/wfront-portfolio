'use client'

import Paragraph from "@/app/components/Paragraph";
import ProjectCard from "@/app/components/ProjectCard";
import Subtitle from "@/app/components/Subtitle";
import { ChevronLeft, ChevronRight, FolderKanban, HeartPlus, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollState = () => {
        if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
        }
    };

    useEffect(() => {
        updateScrollState();
        const handleResize = () => updateScrollState();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
        const { scrollLeft } = scrollRef.current;
        const newScrollLeft = direction === 'left' ? scrollLeft - 340 : scrollLeft + 340;
        scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });

        setTimeout(updateScrollState, 300);
        }
    };

    return (
        <div id="projects" className="scroll-mt-24 mt-[100px] md:mt-[120px]">
            <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div className="flex flex-col space-y-2 max-w-[550px]">
                    <Subtitle text="Projetos em Destaque" />
                    <Paragraph text="Uma seleção de trabalhos que refletem minha jornada, desafios superados e o impacto gerado por cada solução desenvolvida." />
                </div>
                <div className="flex gap-2">
                <button
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    className={`p-2 rounded ${canScrollLeft ? 'text-amber-500 hover:bg-white/10' : ''} transition cursor-pointer`}
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    className={`p-2 rounded ${canScrollRight ? 'text-amber-500 hover:bg-white/10' : ''} transition cursor-pointer`}
                >
                    <ChevronRight className="h-5 w-5" />
                </button>
                </div>
            </div>

            <div>
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-hidden scroll-smooth snap-x snap-mandatory pb-4"
                >
                    <ProjectCard
                        title="33Doctor"
                        description="Responsável pelo design e desenvolvimento deste site de agendamento de consultas"
                        icon={HeartPlus}
                        imageUrl="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        link="https://www.33doctor.com.br"
                    />
                    <ProjectCard
                        title="Rebobinador Express"
                        description="Responsável pelo design desse banco de dados para dados de bobinagem de motores elétricos."
                        icon={Settings}
                        imageUrl="https://images.unsplash.com/photo-1554825959-e9a6670d4f18?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        link="https://apps.apple.com/br/app/rebobinadorexpress/id6453854731"
                    />
                    <ProjectCard
                        title="IMB"
                        description="Responsável pelo design e desenvolvimento desta imobiliária"
                        icon={FolderKanban}
                        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        link="https://www.lotimobiliaria.com.br"
                    />
                </div>
            </div>
        </div>
    </div>
)};

export default Projects;
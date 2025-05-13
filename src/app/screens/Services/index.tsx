import Paragraph from "@/app/components/Paragraph";
import Subtitle from "@/app/components/Subtitle";
import { Code, Database, Figma, LayoutDashboard, Server } from "lucide-react";

const Services = () => {
    return (
        <div id="services" className="scroll-mt-24 max-w-5xl mx-auto md:px-0 mt-[100px] md:mt-[120px]">
            <div className="mb-8 flex justify-center items-center flex-col">
                <Subtitle text="Serviços" />
                <Paragraph text="Aí, olha o que sei fazer!" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 hover:border-amber-500 transition">
                <div className="flex items-center gap-3 mb-3">
                    <Code className="h-6 w-6 text-amber-500" />
                    <h3 className="text-xl font-semibold">Interfaces com React.js</h3>
                </div>
                <p className="text-neutral-400">
                    Criação de interfaces ricas, acessíveis e escaláveis utilizando React e melhores práticas de desenvolvimento.
                </p>
                </div>

                <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 hover:border-amber-500 transition">
                <div className="flex items-center gap-3 mb-3">
                    <Figma className="h-6 w-6 text-amber-500" />
                    <h3 className="text-xl font-semibold">Design de interfaces</h3>
                </div>
                <p className="text-neutral-400">
                    Crio interfaces intuitivas, funcionais e visualmente alinhadas à identidade de cada projeto.
                </p>
                </div>
                <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 hover:border-amber-500 transition">
                <div className="flex items-center gap-3 mb-3">
                    <LayoutDashboard className="h-6 w-6 text-amber-500" />
                    <h3 className="text-xl font-semibold">Sites institucionais</h3>
                </div>
                <p className="text-neutral-400">
                    Desenvolvimento de sites leves, responsivos e otimizados para conversão e SEO.
                </p>
                </div>
                <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 hover:border-amber-500 transition">
                <div className="flex items-center gap-3 mb-3">
                    <Server className="h-6 w-6 text-amber-500" />
                    <h3 className="text-xl font-semibold">Apps escaláveis</h3>
                </div>
                <p className="text-neutral-400">
                    Soluções robustas para empresas que buscam escalar com qualidade e confiabilidade.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Services;
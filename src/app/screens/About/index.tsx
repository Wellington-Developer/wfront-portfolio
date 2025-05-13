import Paragraph from "@/app/components/Paragraph";
import SocialButton from "@/app/components/SocialButton";
import Subtitle from "@/app/components/Subtitle";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const About = () => {
    return (
        <div className="flex max-w-5xl flex-col md:flex-row mx-auto mt-[100px] md:mt-[120px] gap-8 items-center bg-gray-950 p-4 md:p-8 rounded-xl text-white font-sans bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]">
            <div className="max-w-full flex-1">
                <span className="text-xs uppercase text-amber-500">Quem sou</span>
                <Subtitle text="Wellington Santos" className="mt-2" />
                <div className="my-6">
                    <Paragraph text="Sou desenvolvedor web com 7 anos de experiência, especializado em React.js e Next.js. Atualmente, atuo em um dos maiores bancos do Brasil, onde sou responsável pelo desenvolvimento do sistema de PIX para empresas — uma aplicação crítica, segura e de alta performance." />
                    <br/>
                    <Paragraph text="Tenho foco em entregar soluções escaláveis, com código limpo e alinhado às necessidades reais do negócio. Agora, estou disponível para projetos freelance, ajudando empresas a transformarem ideias em produtos digitais de verdade." />
                </div>

                <div className="flex gap-4 mt-4 flex-wrap">
                    <SocialButton icon={Github} href="https://github.com/Wellington-Developer" label="Github" className="text-red-400" />
                    <SocialButton icon={Linkedin} href="https://br.linkedin.com/in/wellington-santos-6a2670214" label="Linkedin" className="text-blue-400" />
                    <SocialButton icon={Instagram} href="https://www.instagram.com/_wellington.ss_/" label="Instagram" className="text-orange-500" />
                </div>
            </div>

            <div className="max-w-full flex-1 max-h-full">
                <Image alt="about-image" width={800} height={600} src="https://scontent-gru2-2.cdninstagram.com/v/t51.2885-15/476235895_17853356664383945_2968555160789251088_n.webp?efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=105&_nc_oc=Q6cZ2QFUHp2yTmJUrrwViXtgcOmcTHXkfD-WZacv0-tiPictXRHj_rmIB3ZqasSmsM48XSs&_nc_ohc=HxK7g51bUmwQ7kNvwGZ0lEA&_nc_gid=zo8cciwSPekTGuP3ZDspzA&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzU2MDE0NTU3MjQ2MTE1MDI1MA%3D%3D.3-ccb7-5&oh=00_AfLRd5F9blycSs2tXTgcYmcJ4wsDAqo1O-ZWz7qke1vhiw&oe=6826FC8A&_nc_sid=7a9f4b" className="rounded-md" />
            </div>
        </div>
    )
}

export default About;
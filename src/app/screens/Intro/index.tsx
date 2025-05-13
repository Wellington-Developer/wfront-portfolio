import Button from "@/app/components/Button";
import Paragraph from "@/app/components/Paragraph";
import SocialButton from "@/app/components/SocialButton";
import Title from "@/app/components/Title";
import { Github, Linkedin, Phone } from 'lucide-react';
import Image from "next/image";

function Intro() {
    return (
        <div id="intro" className="scroll-mt-24 flex flex-col md:flex-row items-center w-full gap-8 max-w-5xl mx-auto">
            <div className="space-y-6 flex-1">
                <div className="mb-2">
                    <span className="text-md uppercase text-amber-500">Bem vindo!</span>
                </div>
                <Title title="Transformo ideias em experiências digitais de alto impacto" />
                <Paragraph text="Se você busca um profissional confiável, com visão de produto e foco em resultado, vamos conversar." />
                <div className="flex gap-4 flex-wrap">
                    <Button icon={Phone} label="Entre em contato" link="https://api.whatsapp.com/send/?phone=12988427404&text&type=phone_number&app_absent=0"/>
                    <SocialButton href="https://github.com/Wellington-Developer" icon={Github} label="GitHub" />
                    <SocialButton href="https://br.linkedin.com/in/wellington-santos-6a2670214" icon={Linkedin} label="LinkedIn" />
                </div>
            </div>

            <div className="relative flex justify-center flex-1">
                <Image
                    src="https://scontent-gru2-2.cdninstagram.com/v/t51.2885-15/490117008_17862977520383945_3137780500907418369_n.webp?efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=105&_nc_oc=Q6cZ2QHNs3w6XnmIKhWUdWI8ZvSE3Dwn6iOv7UwBHkQIpoSxb5X8ogJ65c9WXrXNrgadDo4&_nc_ohc=bdbGODk2vfsQ7kNvwHP2j4j&_nc_gid=4qE2TORMxCfw2ZaHVT9uAA&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzYxMDg0MjAyNDIxMzMyOTc1Mg%3D%3D.3-ccb7-5&oh=00_AfJB3_WSM46NVGiqBlii_oTTV11WrND7PMhD6EJ8f-XBWw&oe=6826C62D&_nc_sid=7a9f4b"
                    alt="portfolio-intro"
                    height={400}
                    width={4000}
                    className="object-cover rounded-md max-w-auto max-h-[300px] md:max-h-full"
                />
            </div>
        </div>
    )
}

export default Intro;
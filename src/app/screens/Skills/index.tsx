import { Github, Linkedin, Mail, Phone, Code, Braces, Palette, Server, GitBranch, PenTool, Database, LayoutDashboard } from "lucide-react";
import Subtitle from "@/app/components/Subtitle";
import Paragraph from "@/app/components/Paragraph";

const skills = [
  { name: "React.js", icon: Code },
  { name: "Next.js", icon: LayoutDashboard },
  { name: "TypeScript", icon: Braces },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Node.js", icon: Server },
  { name: "Figma", icon: PenTool },
  { name: "REST / APIs", icon: Database },
  { name: "Git / GitHub", icon: GitBranch },
];

const Skills = () => {
    return (
        <div id="skills" className="scroll-mt-24 flex flex-col max-w-5xl mx-auto space-y-4 mt-[100px] md:mt-[120px]">
            <div className="mb-[24px]">
                <Subtitle text="Habilidades" className="text-center mb-2" />
                <Paragraph text="Tecnologias e ferramentas que domino e utilizo" className="text-center"/>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map(({ name, icon: Icon }) => (
                    <li
                        key={name}
                        className="flex items-center gap-2 justify-center bg-neutral-900 text-white border border-neutral-700 rounded-lg py-3 px-4 text-sm font-medium shadow-sm hover:border-amber-500 transition"
                    >
                        <Icon className="h-5 w-5 text-amber-500" />
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Skills;
import { LucideIcon } from "lucide-react";
import Image from "next/image";

const ProjectCard = ({ title, description, icon: Icon, imageUrl, link }: { title: string; description: string; icon: LucideIcon; imageUrl: string, link: string }) => (
  <a href={link} target="_blank" className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow transition hover:border-amber-500 hover:shadow-lg w-[320px] snap-start shrink-0 cursor-pointer">
    <div className="h-[240px] w-full relative">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-t-xl"
      />
    </div>
    <div className="p-5">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="h-5 w-5 text-amber-500" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-neutral-400 text-sm">{description}</p>
    </div>
  </a>
);

export default ProjectCard;
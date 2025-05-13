import { LucideIcon } from "lucide-react";

const Button = ({ label, onClick, icon: Icon, link }: { label: string; onClick?: () => void; icon?: LucideIcon, link?: string }) => {
  return (
    <a href={link}>
      <button
        onClick={onClick}
        className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-lg transition shadow hover:cursor-pointer hover:bg-amber-500 hover:text-white"
      >
        {Icon && <Icon className="h-5 w-5" />}
        {label}
      </button>
    </a>
  );
};

export default Button;
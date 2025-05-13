const SocialButton = ({ href, icon: Icon, label, className }: { href: string; icon: any; label: string; className?: string }) => {

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded hover:bg-white hover:text-black hover:cursor-pointer transition"
    >
      <Icon className={`h-4 w-4 ${className ?? ''}`} /> {label}
    </a>
  );
};

export default SocialButton;
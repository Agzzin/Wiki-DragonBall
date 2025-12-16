import { Search } from "lucide-react"; 
import type { LucideIcon } from "lucide-react";

type HeaderProps = {
  title: string;
  icon: LucideIcon;
  colorHeaderIcon: string;
  colorIcon: string;
  subtitle: string
};

export default function Header({ title, icon: Icon, colorHeaderIcon, colorIcon, subtitle }: HeaderProps) {
  return (
    <header className="p-6! px-4! pl-16! border-b border-slate-700/20">
      
      <section className="flex items-center gap-5 mb-16!">
       
        <section 
          className="flex items-center justify-center w-16 h-16 shrink-0 rounded-2xl"
          style={{ backgroundColor: colorHeaderIcon }}
        >
          <Icon size={34} color={colorIcon} />
        </section>
        
        <section className="flex flex-col">
          <h1 className="text-4xl font-black leading-tight text-white">
            {title}
          </h1>
          <p className="text-slate-400 text-lg">{subtitle}</p>
        </section>
      </section>

      <section className="relative w-full">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar personagens..."
          className="w-full bg-slate-900/60 border border-slate-600/30 rounded-2xl pl-12! pr-4! py-3.5!    text-white text-base outline-none transition-all duration-300 hover:border-slate-500/50 focus:border-orange-400 focus:bg-slate-900/80 placeholder:text-slate-500"
        />
      </section>
    </header>
  );
}

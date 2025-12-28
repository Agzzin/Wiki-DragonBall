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
          <h1 className="text-3xl font-black leading-tight text-white">
            {title}
          </h1>
          <p className="text-slate-400 text-lg">{subtitle}</p>
        </section>
      </section>

     
    </header>
  );
}

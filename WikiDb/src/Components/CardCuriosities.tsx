import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

type CardCuriositiesProps = {
  icon: LucideIcon;
  title: string;
  paragraph: string;
  items: number;
  backgroundColor: string; 
  chevron: LucideIcon;
  link: LinkProps;
};

export function CardCuriosities({
  icon: Icon,
  title,
  paragraph,
  items,
  backgroundColor,
  chevron: Chevron,
  link,
}: CardCuriositiesProps) {
  return (
    <section
      className={`h-85! rounded-3xl text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${backgroundColor}`}
    >
      <Link {...link} className="no-underline block h-full">
        <div className="p-6! h-full flex flex-col justify-between">
          <div className="bg-white/30 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
            <Icon size={30} color="#fff" />
          </div>

          <h3 className="text-white text-lg mb-2">{title}</h3>

          <p className="text-white/50 text-base mb-4 max-w-xs">
            {paragraph}
          </p>

          <div className="flex items-center justify-between max-w-xs">
            <span className="text-white/50 text-sm">{items} itens</span>

            <div className="bg-white/30 rounded-full w-12 h-12 flex items-center justify-center">
              <Chevron size={25} color="#fff" />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

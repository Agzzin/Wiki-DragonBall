import type { LucideIcon } from "lucide-react";
import "../CardCuriosities.css";

type CardCuriositiesProps = {
  icon: LucideIcon;
  title: string;
  paragraph: string;
  items: number;
  backgroundColor: string;
  chevron: LucideIcon;
};

export function CardCuriosities({
  icon: Icon,
  title,
  paragraph,
  items,
  backgroundColor,
  chevron: Chevron,
}: CardCuriositiesProps) {
  return (
    <section style={{ backgroundColor }} className="box">
      <section className="box-padding">
        <section className="box-icon">
          <Icon size={30} color="#fff" className="icon-box" />
        </section>
        <h3 className="box-title">{title}</h3>
        <p className="box-p">{paragraph}</p>
        <section className="box-itens">
          <span className="box-span">{items} itens</span>
          <section className="box-chevron">
            <Chevron size={25} color="#fff" className="icon-chevron" />
          </section>
        </section>
      </section>
    </section>
  );
}

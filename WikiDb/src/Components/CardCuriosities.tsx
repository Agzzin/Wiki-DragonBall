import type { LucideIcon } from "lucide-react";
import "../../src/ComponentStyles/CardCuriosities.css";
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
      <section style={{ backgroundColor }} className="box">
        <Link {...link} className="card-link">
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
        </Link>
      </section>
   
  );
}

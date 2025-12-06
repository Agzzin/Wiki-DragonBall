import type { LucideIcon } from "lucide-react";
import "../../src/ComponentStyles/CardPerson.css";

type CardPersonProps = {
  race: string;
  image: string | null;
  name: string;
  firstAppearance: string;
  transform: string[] | string;
  icon: LucideIcon;
};

export function CardPerson({
  race,
  image,
  name,
  firstAppearance,
  transform,
  icon: Icon,
}: CardPersonProps) {
  return (
    <section className="container-person">
      <section className="box-race">
        <p className="race">{race}</p>
      </section>
      <section className="image-person">
        {image && <img src={image} className="person-image" />}
      </section>

      <section className="bottom-card">
        <p className="name-gradient">{name}</p>
        <section className="background-shield">
          <Icon className="icon-shield" color="#F05B1B" size={30} />
        </section>
      </section>

      <section className="info-card">
        <p className="appearance">Primeira aparição: {firstAppearance}</p>

        <section className="info-transform">
          {Array.isArray(transform) ? (
            transform.map((t, idx) => (
              <section key={idx} className="box-transform">
                <p className="transform">{t}</p>
              </section>
            ))
          ) : (
            <section className="box-transform">
              <p className="transform">{transform}</p>
            </section>
          )}
        </section>
      </section>
    </section>
  );
}

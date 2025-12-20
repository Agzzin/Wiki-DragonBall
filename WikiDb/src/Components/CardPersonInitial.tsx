import type { LucideIcon } from "lucide-react";

type CardPersonInitialProps = {
  race: string;
  image: string | undefined;
  name: string;
  transform: string[] | string;
  icon: LucideIcon;
  firstAppearance: string;
};

export function CardPersonInitial({
  race,
  image,
  name,
  transform,
  icon: Icon,
  firstAppearance,
}: CardPersonInitialProps) {
  return (
    <section className="relative bg-linear-to-br from-[#1c2739] via-[#192335] to-[#1d283a] border border-white/20 rounded-2xl w-65 max-w-65 h-auto sm:h-105 sm:w-65 sm:max-w-65 sm:aspect-260/420 overflow-hidden flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-[#e95f0d] group mx-auto sm:mx-0">
      <section className="absolute top-3 right-3 z-10 bg-yellow-400/53 border border-yellow-400/80 rounded-xl px-2.5! py-1! flex items-center justify-center gap-1.5">
        <p className="text-black font-semibold text-xs whitespace-nowrap overflow-hidden text-ellipsis">
          {race}
        </p>
      </section>

      <section className="w-full h-[30vh] overflow-hidden rounded-b-xl bg-black/20 sm:aspect-video aspect-video">
        {image && (
          <img
            src={image}
            className="w-full h-full bg-cover block transition-transform duration-700 group-hover:scale-108"
            alt={name}
          />
        )}
      </section>

      <section className="absolute top-48! left-3! right-3! flex items-center justify-between gap-3 px-4 sm:px-5 z-10">
        <p className="text-white text-base sm:text-lg font-black leading-tight m-0 truncate">
          {name}
        </p>
        <section className="bg-orange-500/48 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
          <Icon className="w-7.5 h-7.5 text-orange-500" />
        </section>
      </section>

      <section className="p-5! pb-6! sm:p-4 sm:pb-6 flex flex-col gap-1.5 flex-1 min-h-0">
        <p className="text-white/70 text-sm m-0">
          Primeira aparição: {firstAppearance}
        </p>

        <section className="flex gap-1 flex-wrap pt-1 items-center">
          {Array.isArray(transform) ? (
            transform.map((item, index) => (
              <span key={index} className="bg-yellow-300/30 border border-yellow-400/80 rounded-xl px-1! py-1! flex items-center justify-center gap-1 text-sm">
                {item}
              </span>
            ))
          ) : (
            <span className="bg-yellow-300/30 border border-yellow-400/80 rounded-xl px-2.5! py-1! flex items-center justify-center gap-1.5 text-sm">{transform}</span>
          )}
        </section>
      </section>
    </section>
  );
}

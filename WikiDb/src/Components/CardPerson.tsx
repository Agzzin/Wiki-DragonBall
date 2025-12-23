import { Heart, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export type CardPersonProps = {
  race: string;
  image: string | undefined;
  name: string;
  affiliation: string;
  description: string;
  icon: LucideIcon;
  kiPower: string;
  maxKi: string;
  id: number;
};

export function CardPerson({
  race,
  image,
  name,
  affiliation,
  description,
  icon: Icon,
  kiPower,
  maxKi,
  id,
}: CardPersonProps) {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<number[]>(() =>{
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }

    console.log(saved)
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const HandleFavorite = () => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((favId) => favId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const HandlePressCard = () => {
    navigate("/caracter/details", {
      state: {
        race,
        image,
        name,
        affiliation,
        kiPower,
        description,
        maxKi,
      },
    });
  };

  const isFavorited = favorites.includes(id);
  console.log(isFavorited)

  return (
    <section className="relative bg-linear-to-br from-[#1c2739] via-[#192335] to-[#1d283a] border border-white/20 rounded-2xl w-65 max-w-65 h-auto sm:h-105 sm:w-65 sm:max-w-65 sm:aspect-260/420 overflow-hidden flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-[#e95f0d] group mx-auto sm:mx-0">
      <button
        onClick={HandleFavorite}
        className="absolute top-2 right-53 z-10 bg-[#101721] rounded-full px-1.5! py-1.5! flex items-center justify-center gap-1.5"
      >
        <span className="text-black font-semibold text-xs whitespace-nowrap overflow-hidden text-ellipsis">
          <Heart color={isFavorited ? "#EF4444" : "#fff"} />
        </span>
      </button>

      <section className="absolute top-3 right-3 z-10 bg-yellow-400/53 border border-yellow-400/80 rounded-xl px-2.5! py-1! flex items-center justify-center gap-1.5">
        <p className="text-black font-semibold text-xs whitespace-nowrap overflow-hidden text-ellipsis">
          {race}
        </p>
      </section>

      <section onClick={HandlePressCard}>
        <section className="w-full h-[35vh] overflow-hidden rounded-b-xl bg-black/20 sm:aspect-video aspect-video">
          {image && (
            <img
              src={image}
              className="w-full h-full object-contain block transition-transform duration-700 group-hover:scale-108"
              alt={name}
            />
          )}
        </section>

        <section className="absolute top-50 left-3 right-3 flex items-center justify-between gap-3 px-1! sm:px-5 z-10">
          <p className="text-white text-base sm:text-lg font-black leading-tight m-0 truncate">
            {name}
          </p>
          <section className="bg-orange-500/48 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
            <Icon className="w-7.5 h-7.5 text-orange-500" />
          </section>
        </section>

        <section className="p-5! pb-6! sm:p-4 sm:pb-6 flex flex-col gap-1.5 flex-1 min-h-0">
          <p className="text-white/70 text-sm m-0">Time: {affiliation}</p>

          <section className="flex gap-1 flex-wrap pt-1 items-center">
            Poder:
            <section className="bg-yellow-300/30 border border-yellow-400/80 rounded-xl px-2.5! py-1! flex items-center justify-center gap-1.5 text-sm">
              {kiPower}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

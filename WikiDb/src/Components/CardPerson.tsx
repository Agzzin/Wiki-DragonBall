import { Heart, type LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWikiContext } from "../contexts/AuthContext";

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
  const { toggleFavorite, isFavorite } = useWikiContext();

  const HandleFavorite = () => {
    toggleFavorite(id);
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

  const isFavorited = isFavorite(id);

  return (
    <div className="relative w-64! bg-linear-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <div className="absolute top-2! left-2! z-10">
        <span className="bg-orange-500 text-white text-xs font-bold px-3! py-1! rounded-full">
          {race}
        </span>
      </div>

      <button
        onClick={HandleFavorite}
        className="absolute top-2! right-2! z-10 bg-slate-900/80 p-2! rounded-full hover:bg-slate-900 transition-all"
      >
        <Heart
          className={`w-5! h-5! ${
            isFavorited ? "fill-rose-500 text-rose-500" : "text-slate-400"
          }`}
        />
      </button>

      <div onClick={HandlePressCard}>
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full h-64! object-contain bg-slate-800"
          />
        )}

        <div className="p-4!">
          <h3 className="text-xl font-bold text-white mb-2!">{name}</h3>
          <p className="text-slate-400 text-sm mb-3!">Time: {affiliation}</p>

          <div className="flex items-center gap-2!">
            <Icon className="w-4! h-4! text-orange-500" />
            <span className="text-slate-300 text-sm">Poder:</span>
            <span className="text-orange-400 font-semibold">{kiPower}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
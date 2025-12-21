import { useState } from "react";
import { Heart, Zap } from "lucide-react";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
import type { CardPersonProps } from "../Components/CardPerson";

export default function CaracterPageDetails() {
  const [isFavorite, setIsFavorite] = useState(false);
  const location = useLocation();
  const { race, image, name, affiliation, description, maxKi  } =
    location.state as CardPersonProps;

  return (
    <section>
      <section className="min-h-screen bg-linear-to-b from-orange-600 bg-black to-black p-4! md:p-6! lg:p-8!">
        <section className="pb-16!">
          <Menu />
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <section className="w-full lg:w-auto lg:shrink-0">
              <div className="rounded-3xl overflow-hidden bg-linear-to-b from-slate-900 via-slate-950 to-black shadow-2xl w-full lg:w-96 aspect-3/4 flex items-center justify-center">
                <div className="text-red-200/50 text-center p-8!">
                  <img src={image} className="h-[60vh]" />
                </div>
              </div>
            </section>

            <section className="flex-1 bg-gray-900 rounded-3xl p-6! md:p-8! shadow-2xl">
              <div className="flex items-start justify-between mb-6">
                <div className="flex flex-wrap gap-2">
                  <span className="px-4! py-1.5! bg-orange-900/60 text-orange-300 rounded-md text-sm">
                    {race}
                  </span>
                  <span className="px-4! py-1.5! bg-blue-900/60 text-blue-300 rounded-md text-sm">
                    {affiliation}
                  </span>
                  <span className="px-4! py-1.5! bg-gray-700/60 text-gray-300 rounded-md text-sm">
                    Dragon ball
                  </span>
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-2! hover:bg-gray-800 rounded-lg transition"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      isFavorite ? "fill-white text-white" : "text-gray-500"
                    }`}
                  />
                </button>
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4!">
                  {name}
                </h1>
              </div>

              <div className="mb-8!">
                <p className="text-gray-300 text-base leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="flex justify-center items-center gap-4 mb-10!">
                <div className="bg-gray-800/80 rounded-xl p-8! text-center flex flex-col justify-center items-center">
                  <Zap className="w-5 h-5 text-yellow-400 mx-auto mb-2!" />
                  <p className="text-gray-400 text-xs mb-2!">Poder Maximo</p>
                  <p className="text-white text-lg font-semibold">{maxKi}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
}

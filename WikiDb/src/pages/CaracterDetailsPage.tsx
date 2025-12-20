import { useState } from "react";
import { Heart, Zap, Ruler, Scale } from "lucide-react";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

type CaracterDetailsProps = {
  race: string;
  team: string;
  firstAppearance: string;
  name: string;
  paragraph: string;
  power: string;
  height: number;
  wheight: number;
  transformations: string;
  techniques: string;
  family: string;
};

export default function CaracterPageDetails({
  race,
  team,
  firstAppearance,
  name,
  paragraph,
  power,
  height,
  wheight,
  transformations,
  techniques,
  family,
}: CaracterDetailsProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <section>
      <section className="min-h-screen bg-linear-to-b from-orange-600 bg-black to-black p-4! md:p-6! lg:p-8!">
        <section className="pb-16!">
          <Menu />
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <section className="w-full lg:w-auto lg:flex-shrink-0">
              <div className="rounded-3xl overflow-hidden bg-linear-to-b from-red-500 via-red-600 to-red-800 shadow-2xl w-full lg:w-96 aspect-[3/4] flex items-center justify-center">
                <div className="text-red-200/50 text-center p-8!"></div>
              </div>
            </section>

            <section className="flex-1 bg-gray-900 rounded-3xl p-6! md:p-8! shadow-2xl">
              <div className="flex items-start justify-between mb-6">
                <div className="flex flex-wrap gap-2">
                  <span className="px-4! py-1.5! bg-orange-900/60 text-orange-300 rounded-md text-sm">
                    {race}
                  </span>
                  <span className="px-4! py-1.5! bg-blue-900/60 text-blue-300 rounded-md text-sm">
                    {team}
                  </span>
                  <span className="px-4! py-1.5! bg-gray-700/60 text-gray-300 rounded-md text-sm">
                    {firstAppearance}
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
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2!">
                  {name}
                </h1>
              </div>

              <div className="mb-8!">
                <p className="text-gray-300 text-base leading-relaxed">
                  {paragraph}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-10!">
                <div className="bg-gray-800/80 rounded-xl p-4! text-center">
                  <Zap className="w-5 h-5 text-yellow-400 mx-auto mb-2!" />
                  <p className="text-gray-400 text-xs mb-2!">Poder</p>
                  <p className="text-white text-lg font-semibold">{power}</p>
                </div>

                <div className="bg-gray-800/80 rounded-xl p-4! text-center">
                  <Ruler className="w-5 h-5 text-blue-400 mx-auto mb-2!" />
                  <p className="text-gray-400 text-xs mb-2!">Altura</p>
                  <p className="text-white text-lg font-semibold">{height} cm</p>
                </div>

                <div className="bg-gray-800/80 rounded-xl p-4! text-center">
                  <Scale className="w-5 h-5 text-green-400 mx-auto mb-2!" />
                  <p className="text-gray-400 text-xs mb-2!">Peso</p>
                  <p className="text-white text-lg font-semibold">
                    {wheight} kg
                  </p>
                </div>
              </div>

              <div className="mb-8!">
                <div className="flex items-center gap-2 mb-4!">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <h2 className="text-xl font-semibold text-white">
                    Transformações
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5! py-2! bg-orange-800/80 hover:bg-orange-700/80 text-orange-100 rounded-lg text-sm transition cursor-pointer">
                    {transformations}
                  </span>
                  <span className="px-5! py-2! bg-orange-800/80 hover:bg-orange-700/80 text-orange-100 rounded-lg text-sm transition cursor-pointer">
                    SSJ2
                  </span>
                  <span className="px-5! py-2! bg-orange-800/80 hover:bg-orange-700/80 text-orange-100 rounded-lg text-sm transition cursor-pointer">
                    SSJ Blue
                  </span>
                  <span className="px-5! py-2! bg-orange-800/80 hover:bg-orange-700/80 text-orange-100 rounded-lg text-sm transition cursor-pointer">
                    Ultra Ego
                  </span>
                </div>
              </div>

              <div className="mb-8!">
                <div className="flex items-center gap-2 mb-4!">
                  <svg
                    className="w-5 h-5 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-7-5z" />
                  </svg>
                  <h2 className="text-xl font-semibold text-white">Técnicas</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5! py-2! bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 rounded-lg text-sm transition cursor-pointer">
                    {techniques}
                  </span>
                  <span className="px-5! py-2! bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 rounded-lg text-sm transition cursor-pointer">
                    Final Flash
                  </span>
                  <span className="px-5! py-2! bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 rounded-lg text-sm transition cursor-pointer">
                    Galick Ho
                  </span>
                  <span className="px-5! py-2! bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 rounded-lg text-sm transition cursor-pointer">
                    Resplandor Final
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4!">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <h2 className="text-xl font-semibold text-white">Família</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5! py-2! bg-purple-900/40 hover:bg-purple-800/40 text-purple-300 rounded-lg text-sm transition cursor-pointer">
                    {family}
                  </span>
                  <span className="px-5! py-2! bg-purple-900/40 hover:bg-purple-800/40 text-purple-300 rounded-lg text-sm transition cursor-pointer">
                    Bulma (esposa)
                  </span>
                  <span className="px-5 py-2! bg-purple-900/40 hover:bg-purple-800/40 text-purple-300 rounded-lg text-sm transition cursor-pointer">
                    Trunks (filho)
                  </span>
                  <span className="px-5! py-2! bg-purple-900/40 hover:bg-purple-800/40 text-purple-300 rounded-lg text-sm transition cursor-pointer">
                    Bra (filha)
                  </span>
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

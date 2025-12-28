import Header from "../Components/Header";
import { Tv, Play, X } from "lucide-react";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { useState } from "react";
import { sagas } from "../data/SagasData";
import { Movies } from "../data/MoviesData";

export default function SagasPage() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [activeVideoFilmUrl, setActiveVideoFilmUrl] = useState<string | null>(null);
  const [expandedSaga, setExpandedSaga] = useState<number | null>(null);

  const openPlayer = (tmdbId: string, season: number, episode: number) => {
    setActiveVideoUrl(
      `https://superflixapi.buzz/serie/${tmdbId}/${season}/${episode}`
    );
  };

  const openPlayerFilms = (imdbId: string) => {
    setActiveVideoFilmUrl(`https://superflixapi.buzz/filme/${imdbId}`);
  };

  const closePlayer = () => {
    setActiveVideoUrl(null);
    setActiveVideoFilmUrl(null); 
  };

  const toggleSaga = (sagaId: number) => {
    setExpandedSaga(expandedSaga === sagaId ? null : sagaId);
  };

  return (
    <section className="pt-24! min-h-screen bg-linear-to-b from-slate-900 via-slate-950 to-black text-white font-sans flex flex-col relative">
      <Menu />

      <Header
        subtitle="Explore as jornadas épicas"
        title="Sagas"
        icon={Tv}
        colorHeaderIcon="#60a5fa89"
        colorIcon="#60A5FA"
      />

      <main className="flex-1 px-4! py-8! md:px-8! md:py-12! lg:px-16! lg:py-16!">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6! pl-4! border-l-4 border-amber-500">
            Dragon Ball Animes
          </h2>

          <div className="space-y-4! mb-8!">
            {sagas.map((saga) => (
              <div
                key={saga.id}
                className="bg-slate-900/40 border border-slate-700/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
              >
               
                <div
                  onClick={() => toggleSaga(saga.id)}
                  className="group flex lg:flex-row flex-col hover:bg-slate-900/60 hover:border-amber-400/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-full lg:w-60 lg:min-w-60 lg:h-60 bg-linear-to-br from-emerald-600 to-emerald-500 flex items-center justify-center relative overflow-hidden">
                    <Play
                      className="w-16 h-16 text-white/40 group-hover:text-white/90 group-hover:scale-110 transition-all duration-500"
                      fill="currentColor"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>

                  <div className="p-6 lg:p-8! flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-emerald-900/50 border border-emerald-500/30 text-emerald-300 px-3! py-1! rounded-full text-xs font-semibold mb-4">
                        {saga.series}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4! leading-tight group-hover:text-amber-400 transition-colors">
                        {saga.title}
                      </h3>
                      <p className="text-slate-400 text-base leading-relaxed mb-6! line-clamp-3">
                        {saga.description}
                      </p>
                    </div>

                    <div className="text-slate-500 text-sm flex items-center gap-2 font-medium">
                      <Tv className="w-4 h-4" />
                      <span>{saga.episodes.length} episódios</span>
                    </div>
                  </div>
                </div>

                {expandedSaga === saga.id && (
                  <div className="border-t border-slate-700/50 bg-slate-900/60 p-6!">
                    <h4 className="text-lg font-semibold mb-4 text-amber-400">
                      Episódios
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {saga.episodes.map((episode) => (
                        <button
                          key={episode.number}
                          onClick={(e) => {
                            e.stopPropagation();
                            openPlayer(
                              saga.tmdbId,
                              episode.season,
                              episode.number
                            );
                          }}
                          className="group/ep flex items-center gap-3 p-4 bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 hover:border-amber-500/50 rounded-xl transition-all duration-300 text-left"
                        >
                          <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold group-hover/ep:bg-emerald-600/40 transition-colors">
                            {episode.number}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium truncate group-hover/ep:text-amber-400 transition-colors">
                              {episode.title}
                            </p>
                            <p className="text-slate-500 text-xs">
                              Temporada {episode.season}
                            </p>
                          </div>
                          <Play className="w-5 h-5 text-slate-600 group-hover/ep:text-amber-500 transition-colors shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4!">
            <h2 className="text-2xl md:text-3xl font-bold mb-6! pl-4! border-l-4  border-amber-500">
              Dragon Ball Filmes
            </h2>
            {Movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-slate-900/40 border border-slate-700/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
              >
      
                <div
                  onClick={() => openPlayerFilms(movie.imdbId)}
                  className="group flex lg:flex-row flex-col hover:bg-slate-900/60 hover:border-amber-400/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-full lg:w-60 lg:min-w-60 lg:h-60 bg-linear-to-br from-orange-600 to-orange-500 flex items-center justify-center relative overflow-hidden">
                    <Play
                      className="w-16 h-16 text-white/40 group-hover:text-white/90 group-hover:scale-110 transition-all duration-500"
                      fill="currentColor"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>

                  <div className="p-6 lg:p-8! flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-orange-900/50 border border-orange-500/30 text-orange-300 px-3! py-1! rounded-full text-xs font-semibold mb-4">
                        {movie.series}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4! leading-tight group-hover:text-amber-400 transition-colors">
                        {movie.title}
                      </h3>
                      <p className="text-slate-400 text-base leading-relaxed mb-6! line-clamp-3">
                        {movie.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      {activeVideoUrl && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md">
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
            <button
              onClick={closePlayer}
              className="absolute top-4 right-4 z-110 p-2 bg-black/60 hover:bg-red-600 text-white rounded-full transition-all hover:scale-110"
              title="Fechar Player"
            >
              <X size={28} />
            </button>

            <iframe
              src={activeVideoUrl}
              className="w-full h-full"
              allowFullScreen
              frameBorder="0"
              scrolling="no"
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        </div>
      )}


      {activeVideoFilmUrl && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md">
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
            <button
              onClick={closePlayer}
              className="absolute top-4 right-4 z-110 p-2 bg-black/60 hover:bg-red-600 text-white rounded-full transition-all hover:scale-110"
              title="Fechar Player"
            >
              <X size={28} />
            </button>

            <iframe
              src={activeVideoFilmUrl}
              className="w-full h-full"
              allowFullScreen
              frameBorder="0"
              scrolling="no"
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
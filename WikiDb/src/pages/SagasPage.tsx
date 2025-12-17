import Header from "../Components/Header";
import { Tv, Play } from "lucide-react";
import Menu from '../Components/Menu'
import Footer from "../Components/Footer";
import { useEffect } from "react";

const sagas = [
  {
    id: 1,
    title: "Saga do Torneio de Artes Marciais",
    description:
      "A jornada do jovem Goku começa quando conhece Bulma em busca das Esferas do Dragão. Participa de diversos torneios de artes marciais, enfrentando adversários cada vez mais fortes.",
    episodes: 153,
    series: "Dragon Ball",
    color: "#047857",
  },
];

const series = [
  "Todas",
  "Dragon Ball",
  "Dragon Ball Z",
  "Dragon Ball GT",
  "Dragon Ball Super",
];

export default function SagasPage() {

  useEffect(() => {
    const getSeries = async () =>{
      const response = await fetch('https://superflixapi.run/lista?category=anime&type=tmdb&format=json&order=asc')
      const dataJSON = response.json()

      console.log(dataJSON)
    }
    getSeries()
  })

  return (
    <section className="pt-24! min-h-screen bg-linear-to-b from-slate-900 via-slate-950 to-black text-white font-sans flex flex-col">
      <Menu />
      
      <Header
        subtitle="dkajsdklsakld"
        title="Sagas"
        icon={Tv}
        colorHeaderIcon="#60a5fa89"
        colorIcon="#60A5FA"
      />

      <main className="flex-1 px-4! py-8! md:px-8! md:py-12! lg:px-16! lg:py-16!">
        <section className="mb-8! pb-6! border-b border-slate-800/30">
          <label className="block text-slate-400 text-sm font-medium mb-4!">
            Série
          </label>
          <div className="flex flex-wrap gap-2">
            {series.map((serie, index) => (
              <button
                key={index}
                className={`px-4! py-2! rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                  bg-slate-800/40 border border-slate-700/50 text-slate-400 hover:bg-slate-800/60 hover:text-white hover:border-slate-600
                  ${
                    index === 0
                      ? "bg-amber-500 text-white border-amber-500 hover:bg-amber-400"
                      : ""
                  }`}
              >
                {serie}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6! pl-4! border-l-4 border-amber-500">
            Dragon Ball
          </h2>

          <div className="space-y-4">
            {sagas.map((saga) => (
              <div
                key={saga.id}
                className="group bg-slate-900/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-900/60 hover:border-amber-400/30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex lg:flex-row flex-col">
                  <div className="w-full lg:w-60 lg:min-w-[240px] h-60 lg:h-[240px] bg-linear-to-br from-emerald-600 to-emerald-500 flex items-center justify-center relative">
                    <Play className="w-20 h-20 text-white/40 group-hover:text-white/70 transition-all duration-300" strokeWidth={1.5} />
                  </div>

                  <div className="p-6! lg:p-8! flex-1 flex flex-col justify-between relative">
                    <div>
                      <span className="inline-block bg-emerald-900/50 border border-emerald-500/30 text-emerald-300 px-3! py-1! rounded-full text-xs font-semibold mb-4">
                        {saga.series}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4! leading-tight">
                        {saga.title}
                      </h3>
                      <p className="text-slate-400 text-base leading-relaxed mb-6!">
                        {saga.description}
                      </p>
                      <div className="text-slate-500 text-sm flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M3 9h18" />
                          <path d="M9 21V9" />
                        </svg>
                        <span>{saga.episodes} eps</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-6 lg:top-8 right-6 lg:right-8 bg-amber-900/80 backdrop-blur-sm text-amber-400 w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-lg lg:text-2xl font-bold border-2 border-amber-500/30">
                      #1
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </section>
  );
}

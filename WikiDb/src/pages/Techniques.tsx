import Header from "../Components/Header";
import { Zap } from "lucide-react";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { techniques } from "../data/TechniquesData";


const types = [
  "Todos",
  "Energia",
  "Física",
  "Suporte",
  "Transformação",
  "Fusão",
];

function TechniquesPage() {
  return (
    <section className="pt-24! min-h-screen bg-linear-to-b from-slate-900 via-slate-950 to-black text-white font-sans flex flex-col">
      <Menu />

      <Header
        subtitle="skldasdj"
        title="Tecnicas"
        icon={Zap}
        colorHeaderIcon="#facc1569"
        colorIcon="#FACC15"
      />

      <main className="flex-1 px-4! py-8! md:px-8! md:py-12! lg:px-16! lg:py-16!">
        <section className="mb-12! pb-8! border-b border-slate-800/30">
          <label className="block text-slate-400 text-sm font-medium mb-8!">
            Tipo
          </label>
          <div className="flex flex-wrap gap-2">
            {types.map((type, index) => (
              <button
                key={index}
                className={`px-4! py-2! rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap border
                  bg-slate-800/40 border-slate-700/50 text-slate-400 hover:bg-slate-800/60 hover:text-white hover:border-slate-600
                  ${
                    index === 0
                      ? "bg-amber-500 border-amber-500 text-white hover:bg-amber-400"
                      : ""
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((technique) => (
              <div
                key={technique.id}
                className="group bg-slate-900/40 border border-slate-700/50 rounded-3xl p-6! cursor-pointer transition-all duration-300 hover:bg-slate-900/60 hover:border-amber-400/30 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex items-start gap-4 mb-6!">
                  <div className="w-14 h-14 bg-linear-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold mb-2! leading-tight group-hover:text-amber-400 transition-colors">
                      {technique.name}
                    </h3>
                    <span className="inline-block bg-amber-900/30 border border-amber-500/40 text-amber-400 px-3! py-1! rounded-full text-xs font-semibold">
                      {technique.type}
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-base leading-relaxed mb-6! group-hover:text-slate-300 transition-colors">
                  {technique.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {technique.users.map((user, index) => (
                    <span
                      key={index}
                      className="bg-slate-800/60 border border-slate-700/40 text-slate-300 px-3! py-1.5! rounded-xl text-xs font-medium hover:bg-slate-700 transition-all"
                    >
                      {user}
                    </span>
                  ))}
                  {technique.moreUsers > 0 && (
                    <span className="bg-slate-800/60 border border-slate-700/40 text-slate-500 px-3! py-1.5! rounded-xl text-xs font-medium">
                      +{technique.moreUsers}
                    </span>
                  )}
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

export default TechniquesPage;

import { Search, Swords } from "lucide-react";
import Menu from "../Components/Menu";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function CompareCharacters() {
  return (
    <section className="flex min-h-screen flex-col bg-linear-to-b from-slate-900 via-slate-950 to-black pt-28! px-4!">
      <Menu />
      <section className="mb-12!">
        <Header
          subtitle="klsdajsdjas"
          title="Comparar"
          colorHeaderIcon="#c084fc77"
          colorIcon="#C084FC"
          icon={Swords}
        />
      </section>

      <section className="flex justify-center items-center gap-8 mb-12 flex-wrap">
        {[1, 2, 3].map((num) => (
          <section
            key={num}
            className="w-96 flex flex-col items-center justify-center text-center p-8! bg-slate-800/60 border-2 border-dashed border-slate-700 rounded-2xl transition-all hover:border-slate-600 hover:bg-slate-800/80"
          >
            <section className="flex items-center justify-center w-32 h-32 bg-slate-700/50 rounded-full mb-8 transition-all hover:bg-slate-700/70 hover:scale-105">
              <Search className="w-16 h-16 text-slate-500" />
            </section>
            <h3 className="mb-6! text-lg font-semibold text-slate-300">
              Selecione o Personagem {num}
            </h3>
            <section className="w-full">
              <input
                type="text"
                placeholder="Buscar personagem..."
                className="w-full px-4! py-3! text-sm text-slate-300 bg-slate-800/80 border border-slate-700 rounded-lg outline-none placeholder:text-slate-500 focus:border-indigo-500 focus:bg-slate-800 focus:shadow-indigo-500/10 transition-all"
              />
            </section>
          </section>
        ))}
      </section>

      <section className="flex flex-col items-center justify-center text-center mb-12! w-full pt-16!">
        <section className="flex items-center justify-center w-32 h-32 mb-8! bg-slate-700/30 rounded-full ">
          <Swords className="w-16 h-16 text-slate-500" />
        </section>
        <h2 className="mb-2! text-2xl font-semibold text-white">
          Selecione pelo menos 2 personagens
        </h2>
        <p className="text-lg text-slate-400">
          Escolha os personagens acima para começar a comparação
        </p>
      </section>

      <Footer />
    </section>
  );
}

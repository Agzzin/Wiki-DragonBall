import { Brain } from "lucide-react";
import Menu from "../Components/Menu";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function QuizPage() {
  return (
    <section className="min-h-screen  bg-linear-to-b from-slate-900 via-slate-950 to-black text-white font-sans pt-28!">
      <Menu />

      <section className="quiz-header px-4!">
        <Header
          subtitle="Teste seus conhecimentos"
          title="Quiz"
          colorHeaderIcon="#c084fc77"
          colorIcon="#C084FC"
          icon={Brain}
        />
      </section>

      <section className="w-full flex justify-center items-center px-4! py-8!">
        <section className="bg-linear-to-br from-slate-800 to-slate-900 border border-slate-600 rounded-3xl p-8! md:p-12 text-center shadow-lg w-full max-w-4xl">
          <section className="flex justify-center mb-10!">
            <section className="w-32 h-32 bg-linear-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-lg animate-pulse hover:scale-105 transition-transform">
              <Brain className="w-16 h-16 text-white" strokeWidth={2} />
            </section>
          </section>

          <section className="flex flex-col justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4! text-center">
            Pronto para o desafio?
          </h2>
          <p className="text-base md:text-lg text-slate-300 mb-12! max-w-2xl mx-auto text-center">
            Responda 10 perguntas sobre personagens, sagas e técnicas do
            universo Dragon Ball. Boa sorte!
          </p>

          </section>
          <section className="grid grid-cols-3 gap-4 md:gap-6 mb-12!">
            <section className="bg-slate-800/60 border border-slate-600 rounded-xl p-4! md:p-6! flex flex-col items-center gap-3 transition-all hover:bg-slate-800/80 hover:border-slate-500 hover:-translate-y-1">
              <span className="text-3xl md:text-4xl font-bold text-orange-500">
                10
              </span>
              <span className="text-xs md:text-sm text-slate-400 font-medium">
                Questões
              </span>
            </section>
            <section className="bg-slate-800/60 border border-slate-600 rounded-xl p-4! md:p-6! flex flex-col items-center gap-3 transition-all hover:bg-slate-800/80 hover:border-slate-500 hover:-translate-y-1">
              <span className="text-3xl md:text-4xl font-bold text-blue-400">
                4
              </span>
              <span className="text-xs md:text-sm text-slate-400 font-medium">
                Opções
              </span>
            </section>
            <section className="bg-slate-800/60 border border-slate-600 rounded-xl p-4! md:p-6! flex flex-col items-center gap-3 transition-all hover:bg-slate-800/80 hover:border-slate-500 hover:-translate-y-1">
              <span className="text-3xl md:text-4xl font-bold text-purple-400">
                ∞
              </span>
              <span className="text-xs md:text-sm text-slate-400 font-medium">
                Tentativas
              </span>
            </section>
          </section>

          <button className="w-full max-w-md mx-auto py-4! bg-linear-to-br from-orange-500 to-orange-700 border-none rounded-xl text-white text-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-1 active:translate-y-0 transition-all">
            Iniciar Quiz
          </button>
        </section>
      </section>

      <Footer />
    </section>
  );
}

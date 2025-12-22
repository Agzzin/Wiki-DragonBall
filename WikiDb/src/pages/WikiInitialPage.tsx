import {
  ChevronRight,
  Search,
  Sparkles,
  Users,
  Tv,
  Zap,
  Shield,
  BookOpen,
  Swords,
  Brain,
  Heart,
} from "lucide-react";
import { CardCuriosities } from "../Components/CardCuriosities";
import { CardPersonInitial } from "../Components/CardPersonInitial";
import { Link } from "react-router-dom";

function WikiInitialPage() {

 
  return (
    <section className="">
    <section className="container px-4 w-full max-w-full mx-0">
      <header>
        <section className="bg-linear-to-r from-orange-500 via-orange-600 to-red-600 pt-8! flex flex-col items-center pb-8!">
          <button className="bg-white/17 border-none text-white p-2.5! rounded-full flex items-center hover:bg-white/25 transition-colors mt-8 gap-2.5">
            <Sparkles color="#fff" size={20} />
            <p className="text-center text-white text-xl">
              Enciclopédia Definitiva
            </p>
          </button>

          <section className="pb-12!">
            <h1 className="text-center text-white text-6xl! pb-4!">
              Dragon Ball
            </h1>
            <h1 className="text-center text-yellow-200 text-6xl mb-4">Wiki</h1>
            <p className="text-center text-lg text-orange-100 mb-8">
              Explore o universo de Dragon Ball. Personagens, sagas, técnicas e
              <br />
              mais em um só lugar.
            </p>
          </section>

          <section className="flex flex-col md:flex-row items-center justify-center gap-12! pb-16!">
            <Link to="/caracters" style={{ textDecoration: "none" }}>
              <button className="px-9! py-4! flex items-center justify-center bg-white rounded-lg cursor-pointer border-none gap-2.5">
                <Search color="#f16f10" size={20} />
                <p className="text-orange-600 text-xl font-bold">
                  Explorar Wiki
                </p>
              </button>
            </Link>
            <Link to="/sagas" style={{ textDecoration: "none" }}>
              <button className="group py-4! px-9! bg-black rounded-lg cursor-pointer border-0 transition-all duration-200 ease-in-out hover:bg-orange-600 hover:border hover:border-white/40">
                <p className="text-white text-base font-bold transition-colors duration-200 ease-in-out group-hover:text-black">
                  Ver sagas
                </p>
              </button>
            </Link>
          </section>
        </section>
      </header>

      <main>
        <section className="pt-12! bg-black mx-auto pb-8!">
          <section className="text-center pt-16">
            <h1 className="text-center text-white text-5xl">Explore a Wiki</h1>
            <p className="text-white mb-16! mt-10!">
              Navegue por categorias e descubra tudo sobre o universo Dragon
              Ball
            </p>
            <section className="pl-4 pr-4 pt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 transition-transform duration-300 ease-in-out cursor-pointer pb-30">
              <CardCuriosities
                link={{ to: "caracters" }}
                icon={Users}
                backgroundColor="bg-linear-to-br from-[#FF6A2A] to-[#E63A1F]"
                items={6}
                paragraph="Explore todos os guerreiros, vilões e aliados do universo Dragon Ball"
                title="Personagens"
                chevron={ChevronRight}
              />
              <CardCuriosities
                link={{ to: "/sagas" }}
                icon={Tv}
                backgroundColor="bg-linear-to-br from-[#4C7BFF] to-[#3F5EDB]"
                items={6}
                paragraph="Reviva as aventuras épicas desde Dragon Ball até Super"
                title="Sagas"
                chevron={ChevronRight}
              />
              <CardCuriosities
                link={{ to: "/techniques" }}
                icon={Zap}
                backgroundColor="bg-linear-to-br from-[#FFC21A] to-[#F28A00]"
                items={6}
                paragraph="Kamehameha, Genki Dama e todas as técnicas lendárias"
                title="Técnicas"
                chevron={ChevronRight}
              />
            </section>
          </section>
        </section>

        <section className="bg-black pl-20! pt-24! pr-20! pb-25!">
          <section className="flex flex-col md:flex-row items-center justify-between pb-6 pl-16 pr-16">
            <h1 className="text-white text-4xl">Personagens em Destaque</h1>
            <button className="flex items-center justify-center border-0 bg-transparent">
              <p className="text-orange-400 text-base">Ver todos</p>
              <ChevronRight size={22} color="#EA9B09" />
            </button>
          </section>
          <p className="text-white/50 text-base pb-12! pt-4!">
            Conheça os guerreiros mais icônicos
          </p>
          <section className="flex flex-col md:flex-row items-center justify-center gap-8 pt-16">
            <CardPersonInitial
              race="Sayajin"
              image="https://i.pinimg.com/736x/a5/a7/f9/a5a7f9fad4ce2a546e053c95005e63b0.jpg"
              name="Broly"
              firstAppearance="Dragon Ball Z: O Poder Invencível (1993)"
              transform="Super Saiyajin Lendário"
              icon={Shield}
            />
            <CardPersonInitial

              race="Saiyajin"
              image="https://uploads.alternativanerd.com.br/wp-content/uploads/2018/03/AN_Goku-Intinto-Superior.jpg"
              name="Goku"
              firstAppearance="Dragon Ball (1986)"
              transform={[
                "Super Saiyajin",
                "Super Saiyajin Blue",
                "Ultra Instinto",
              ]}
              icon={Shield}
            />
            <CardPersonInitial
              race="Saiyajin"
              image="https://wallpapers.com/images/hd/majin-vegeta-smile-5g4t1zilgzsodudn.jpg"
              name="Vegeta"
              firstAppearance="Dragon Ball Z (1989)"
              transform={["Super Saiyajin", "Super Saiyajin Blue", "Ultra Ego"]}
              icon={Shield}
            />
            <CardPersonInitial
        
              race="Kaioshin"
              image="https://ovicio.com.br/wp-content/uploads/2019/12/20191201-goku-black-01-1280x720.jpg"
              name="Zamasu"
              firstAppearance="Dragon Ball Super (2015)"
              transform="Super Saiyajin Rosé"
              icon={Shield}
            />
          </section>
        </section>

        <section className="px-5! bg-black">
          <div className="w-full mx-auto text-center">
            <div className="text-center mb-15">
              <h2 className="text-4xl font-bold text-white mb-3">
                Recursos Especiais
              </h2>
              <p className="text-lg text-slate-400 pb-8!">
                Ferramentas interativas para você explorar ainda mais
              </p>
            </div>

            <div className="pr-4! pl-4! grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 pb-32! place-items-center">
              <div className="text-left group relative overflow-hidden cursor-pointer rounded-3xl px-10! py-23! bg-linear-to-br from-purple-600 to-purple-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                <Swords className="w-15! h-15! mb-6 text-white stroke-[1.8]" />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Comparar
                </h3>
                <p className="text-xl text-white/80 leading-normal w-72!">
                  Compare até 3 personagens lado a lado
                </p>
              </div>

              <div className="group relative overflow-hidden cursor-pointer rounded-3xl px-10! py-23! bg-linear-to-br from-pink-500 to-pink-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] text-left">
                <Brain className="w-15 h-15 mb-6 text-white stroke-[1.8]" />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Quiz
                </h3>
                <p className="text-xl text-white/80 leading-normal w-72!">
                  Teste seus conhecimentos sobre Dragon Ball
                </p>
              </div>

              <div className="text-left group relative overflow-hidden cursor-pointer rounded-3xl px-10! py-23! bg-linear-to-br from-red-500 to-red-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                <Heart className="w-15! h-15! mb-6 text-white stroke-[1.8]" />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Favoritos
                </h3>
                <p className="text-xl text-white/80 leading-normal w-72!">
                  Salve seus personagens e sagas favoritos
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-white/20 pt-8! pb-8!">
        <div className="flex items-center justify-center gap-4 pt-8!">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500">
            <BookOpen color="#fff" />
          </div>
          <h1 className="text-white text-xl font-semibold">Dragon Ball Wiki</h1>
        </div>
        <p className="py-12! text-center text-white/60">
          © {new Date().getFullYear()} Dragon Ball Wiki. Todos os direitos
          reservados.
        </p>
      </footer>
    </section>
    </section>
  );
}

export default WikiInitialPage;

import { Shield, Users } from "lucide-react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import { Loading } from "../StyledComponents/loading";
import { CardPerson } from "../Components/CardPerson";
import { useWikiContext } from "../contexts/AuthContext";

export default function CaracterPage() {
  const { GetCaracters, caracters, loading } = useWikiContext();

  useEffect(() => {
    GetCaracters();
    console.log(GetCaracters);
  }, []);

  return (
    <section className="flex min-h-screen flex-col  bg-linear-to-b from-slate-900 via-slate-950 to-black text-white font-sans">
      <Menu />
      <section className="sm: pt-16! flex justify-center items-center"></section>

      <Header
        subtitle="akdjasldkasjdk"
        title="Personagens"
        icon={Users}
        colorHeaderIcon="#fb923c71"
        colorIcon="#FB923C"
      />

      <main className="flex flex-1 items-center justify-center px-4 py-8 mt-16">
        <section className="w-full max-w-7xl">
          <section className="mb-8">
            <section className="mb-6">
              {loading ? (
                <section className="flex justify-center items-center min-h-96">
                  <Loading />
                </section>
              ) : (
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12! sm:gap-5 md:gap-6 justify-items-center">
                  {caracters.map((character) => (
                    <CardPerson
                      id={character.id}
                      maxKi={character.maxKi}
                      description={character.description}
                      kiPower={character.ki}
                      key={character.id}
                      race={character.race}
                      image={character.image}
                      name={character.name}
                      affiliation={character.affiliation}
                      icon={Shield}
                    />
                  ))}
                </section>
              )}
            </section>
          </section>
        </section>
      </main>

      <Footer />
    </section>
  );
}

import { Shield, Users } from "lucide-react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { Loading } from "../StyledComponents/loading";
import { CardPerson } from "../Components/CardPerson";

interface Character {
  id: number;
  name: string;
  race: string;
  affiliation: string;
  image: string;
  description: string;
  ki: string;
}

export default function CaracterPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setTimeout(async () => {
        try {
          const response = await fetch(
            "https://dragonball-api.com/api/characters?limit=9999"
          );
          if (!response.ok) {
            throw new Error("Erro ao carregar personagens");
          }
          const data = await response.json();
          setCharacters(data.items);
        } catch (error) {
          setError(error instanceof Error ? error.message : "Erro desconhecido");
          console.log(erro);
        } finally {
          setLoading(false);
        }
      }, 5000);
    };
    fetchCharacters();
  }, []);

  return (
    <section className="flex min-h-screen flex-col bg-gradient-to-b from-blue-950 to-slate-800 text-white font-sans">
      <Menu />
      <Header
        subtitle="akdjasldkasjdk"
        title="Personagens"
        icon={Users}
        colorHeaderIcon="#fb923c71"
        colorIcon="#FB923C"
      />

      <main className="flex flex-1 items-center justify-center px-4">
        <section className="w-full max-w-7xl">
          <section className="mb-8">
            <section className="mb-6">
              <section className="flex flex-wrap gap-2">
                {loading ? (
                  <Loading />
                ) : (
                  <section className="grid grid-cols-5 gap-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 w-full">
                    {characters.map((character) => (
                      <CardPerson
                        key={character.id}
                        race={character.race}
                        image={character.image}
                        name={character.name}
                        firstAppearance={character.affiliation}
                        icon={Shield}
                        transform={character.ki}
                      />
                    ))}
                  </section>
                )}
              </section>
            </section>
          </section>
        </section>
      </main>

      <Footer />
    </section>
  );
}

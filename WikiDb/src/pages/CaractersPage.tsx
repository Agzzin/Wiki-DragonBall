import { Shield, Users } from "lucide-react";
import "../../src/styles/CaracterPage.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Loading } from "../StyledComponents/loading";
import { CardPerson } from "../components/CardPerson";

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
  const [error, setError] = useState<string | null>(null);

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
        } finally {
          setLoading(false);
        }
      }, 5000);
    };
    fetchCharacters();
  }, []);

  return (
    <section className="container-caracter">
      <Menu />
      <Header
        title="Personagens"
        icon={Users}
        colorHeaderIcon="#fb923c71"
        colorIcon="#FB923C"
      />

      <main className="main">
        <section className="filters-section">
          <section className="filter-group">
            <section className="filter-pills">
              {loading ? (
                <Loading />
              ) : (
                <section className="characters-grid">
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
      </main>

      <Footer />
    </section>
  );
}

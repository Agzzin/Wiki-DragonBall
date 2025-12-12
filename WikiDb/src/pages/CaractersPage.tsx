import { Users } from "lucide-react";
import "../../src/styles/CaracterPage.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Loading } from "../StyledComponents/loading";

interface Character {
  id: number;
  name: string;
  race: string;
  affiliation: string;
  image: string;
  description: string;
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
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
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
            <label className="filter-label">Raça</label>
            <section className="filter-pills">
              {loading ? <Loading /> : <div>carregado</div>}
            </section>
          </section>

          <section className="filter-group">
            <label className="filter-label">Afiliação</label>
            <section className="filter-pills"></section>
          </section>
        </section>

        <section className="characters-section">
          <section className="characters-grid"></section>
        </section>
      </main>

      <Footer />
    </section>
  );
}

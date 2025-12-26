import { useContext, createContext, useState, useEffect } from "react";

export interface Character {
  id: number;
  name: string;
  race: string;
  affiliation: string;
  image: string;
  description: string;
  ki: string;
  maxKi: string;
}

interface WikiContextType {
  loading: boolean;
  caracters: Character[];
  error: string;
  favorites: number[];
  favoriteCharacters: Character[];
  GetCaracters: () => Promise<void>;
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

interface ChildrenProps {
  children: React.ReactNode;
}

const WikiContext = createContext<WikiContextType | null>(null);

export const ContextWikiProvider = ({ children }: ChildrenProps) => {
  const [loading, setLoading] = useState(false);
  const [caracters, setCaracters] = useState<Character[]>([]);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null)

  

  const GetCaracters = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dragonball-api.com/api/characters?limit=9999");
      if (!response.ok) {
        throw new Error("Erro ao carregar personagens");
      }
      const data = await response.json();
      if (data.items && Array.isArray(data.items)) {
        setCaracters(data.items);
      } else {
        setCaracters([]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id];
      
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (id: number) => {
    return favorites.includes(id);
  };

  const favoriteCharacters = caracters.filter((character) =>
    favorites.includes(character.id)
  );

  useEffect(() => {
    GetCaracters();
  }, []);

  return (
    <WikiContext.Provider
      value={{
        GetCaracters,
        loading,
        error,
        caracters,
        favorites,
        favoriteCharacters,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </WikiContext.Provider>
  );
};

export const useWikiContext = () => {
  const context = useContext(WikiContext);
  if (!context) {
    throw new Error("useWikiContext deve ser usado dentro de um ContextWikiProvider");
  }
  return context;
};
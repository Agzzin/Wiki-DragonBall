import { useContext, createContext, useState } from "react";
interface Character {
  id: number;
  name: string;
  race: string;
  affiliation: string;
  image: string;
  description: string;
  ki: string;
}

interface WikiContextType {
  loading: boolean;
  caracters: Character[];
  error: string;
  GetCaracters: () => Promise<void>;
}

interface ChildrenProps {
  children: React.ReactNode;
}

const WikiContext = createContext<WikiContextType | null>(null);

export const ContextWikiProvider = ({ children }: ChildrenProps) => {
  const [loading, setLoading] = useState(false);
  const [caracters, setCaracters] = useState<Character[]>([]);
  const [error, setError] = useState("");

  const GetCaracters = async () => {
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
        if (data.items && Array.isArray(data.items)) {
          setCaracters(data.items);
        } else {
          setCaracters([]);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    }, 5000);
  };

  return (
    <WikiContext.Provider value={{ GetCaracters, loading, error, caracters }}>
      {children}
    </WikiContext.Provider>
  );
};

export const useWikiContext = () => {
  const context = useContext(WikiContext);

  if (!context) {
    throw new Error(
      "useWikiContext deve ser usado dentro de um ContextWikiProvider"
    );
  }
  return context;
};

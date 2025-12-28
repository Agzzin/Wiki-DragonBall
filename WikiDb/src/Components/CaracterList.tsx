import type { Character } from "../contexts/AuthContext";
import { Search } from "lucide-react";

interface CharacterListProps {
  characters: Character[];
  onSelect: (name: string) => void;
}

export function ImageCaracterList({ onSelect, selectedName, selectedImage }: CharacterListProps & { selectedName: string | null; selectedImage: string | null }) {
  return (
    <section className="flex items-center justify-center w-32 h-32 bg-slate-700/50 rounded-full mb-8 transition-all hover:bg-slate-700/70 hover:scale-105">
      {selectedImage ? (
        <img
          onMouseDown={(e) => {
            e.preventDefault();
            onSelect(selectedName || "");
          }}
          src={selectedImage}
          alt={selectedName || "personagem"}
          className="h-[17vh] object-cover rounded-full"
        />
      ) : (
        <Search className="w-8 h-8 text-slate-400" />
      )}
    </section>
  );
}
export function CharacterList({ characters, onSelect }: CharacterListProps) {
  return (
    <ul className="mt-2 max-h-40 overflow-y-auto rounded-lg border border-slate-700 bg-slate-800/70 shadow-md">
      {characters.map((c) => {
        console.log("Personagem na lista:", c);
        return (
          <li
            key={c.id}
            onMouseDown={(e) => {
              e.preventDefault();
              console.log("clicou em ", c.name);
              onSelect(c.name);
            }}
            className="px-4 py-2 bg-slate-700/50 rounded mb-1 cursor-pointer hover:bg-slate-700/70 hover:text-white transition-colors"
          >
            {c.name}
          </li>
        );
      })}
    </ul>
  );
}

import type { Character } from "../contexts/AuthContext";

interface CharacterListProps {
  characters: Character[];
  onSelect: (name: string) => void;
}

export default function CharacterList({ characters, onSelect }: CharacterListProps) {
  return (
    <ul className="mt-2 max-h-40 overflow-y-auto rounded-lg border border-slate-700 bg-slate-800/70 shadow-md">
      {characters.map((c) => {
        console.log("Personagem na lista:", c);

        return (
          <li
            key={c.id}
            onMouseDown={(e) => {
              e.preventDefault()
              console.log('clicou em ' , c.name)
              onSelect(c.name)}} 
            className="px-4 py-2 bg-slate-700/50 rounded mb-1 cursor-pointer hover:bg-slate-700/70 hover:text-white transition-colors"
          >
            {c.name}
          </li>
        );
      })}
    </ul>
  );
}

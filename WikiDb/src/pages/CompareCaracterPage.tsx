import { Swords } from "lucide-react";
import Menu from "../Components/Menu";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useWikiContext } from "../contexts/AuthContext";
import { useState } from "react";
import { CharacterList, ImageCaracterList } from "../Components/CaracterList";

export default function CompareCharacters() {
  const { caracters } = useWikiContext();

  const [searchValues, setSearchValues] = useState(["", "", ""]);
  const [focusedCard, setFocusedCard] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<(string | null)[]>([
    null,
    null,
    null,
  ]);

  const filtered = searchValues.map((searchValue) =>
    caracters.filter((c) =>
      c.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  const handleChange = (index: number, value: string) => {
    const newValues = [...searchValues];
    newValues[index] = value;
    setSearchValues(newValues);
  };

  const handleSelect = (index: number, name: string) => {
    if (searchValues.includes(name)) {
      alert("os personagens não podem se repetir");
    } else {
      const person = caracters.find((c) => c.name === name);
      const newValues = [...searchValues];
      newValues[index] = name;
      setSearchValues(newValues);

      const newSelectedImage = [...selectedImage];
      if (person) {
        newSelectedImage[index] = person.image;
      } else {
        newSelectedImage[index] = null;
      }
      setSelectedImage(newSelectedImage);

      setFocusedCard(null);
    }
  };

  // Pega os personagens selecionados
  const selectedCharacters = searchValues
    .map((name) => caracters.find((c) => c.name === name))
    .filter((c): c is NonNullable<typeof c> => c !== undefined);

  const showComparison = selectedCharacters.length >= 2;

  return (
    <section className="flex min-h-screen flex-col bg-linear-to-b from-slate-900 via-slate-950 to-black pt-28! px-4!">
      <section className="text-white">
        <Menu />
      </section>
      <section className="mb-12!">
        <Header
          subtitle="Compare os poderes dos personagens"
          title="Comparar"
          colorHeaderIcon="#c084fc77"
          colorIcon="#C084FC"
          icon={Swords}
        />
      </section>

      <section className="flex justify-center items-center gap-8 mb-12 flex-wrap">
        {searchValues.map((_, index) => (
          <section
            key={index}
            className="w-96 flex flex-col items-center justify-center text-center p-8! bg-slate-800/60 border-2 border-dashed border-slate-700 rounded-2xl transition-all hover:border-slate-600 hover:bg-slate-800/80"
          >
            <section className="flex items-center justify-center w-32 h-32 bg-slate-700/50 rounded-full mb-8 transition-all hover:bg-slate-700/70 hover:scale-105">
              <ImageCaracterList
                characters={filtered[index]}
                onSelect={(name) => handleSelect(index, name)}
                selectedName={searchValues[index]}
                selectedImage={selectedImage[index]}
              />
            </section>
            <h3 className="mb-6! text-lg font-semibold text-slate-300">
              Selecione o Personagem {index + 1}
            </h3>
            <section className="w-full">
              <input
                type="text"
                placeholder="Buscar personagem..."
                value={searchValues[index]}
                onFocus={() => setFocusedCard(index)}
                onBlur={() => setFocusedCard(null)}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-full px-4! py-3! text-sm text-slate-300 bg-slate-800/80 border border-slate-700 rounded-lg outline-none placeholder:text-slate-500 focus:border-indigo-500 focus:bg-slate-800 focus:shadow-indigo-500/10 transition-all"
              />
              <ul className="mt-2 max-h-40 overflow-y-auto">
                {focusedCard === index && (
                  <ul className="mt-2 max-h-40 overflow-y-auto text-white">
                    <CharacterList
                      characters={filtered[index]}
                      onSelect={(name) => handleSelect(index, name)}
                    />
                  </ul>
                )}
              </ul>
            </section>
          </section>
        ))}
      </section>

      <section className="flex flex-col place-items-center text-center mb-12! w-full pt-16!">
        {showComparison ? (
          <section className="max-w-4xl mx-auto w-full mb-12!">
            <div className="bg-slate-800/60 border-2 border-slate-700 rounded-2xl overflow-hidden w-[120vh]">
              <table className="w-full text-white">
                <thead className="bg-slate-700/50">
                  <tr>
                    <th className="px-6! py-4! text-left">Personagem</th>
                    <th className="px-6! py-4! text-center">Power</th>
                    <th className="px-6! py-4! text-center">Max Power</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCharacters.map((character) => (
                    <tr
                      key={character.id}
                      className="border-t border-slate-700 hover:bg-slate-700/30 transition-colors"
                    >
                      <td className="px-6! py-4!">
                        <div className="flex items-center gap-3">
                          <img
                            src={character.image}
                            alt={character.name}
                            className="w-10 rounded-full object-cover"
                          />
                          <span className="font-semibold">
                            {character.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6! py-4! text-center text-yellow-400 font-bold">
                        {character.ki || "N/A"}
                      </td>
                      <td className="px-6! py-4! text-center text-purple-400 font-bold">
                        {character.maxKi || "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : (
          <section className="flex flex-col items-center justify-center text-center mb-12! w-full pt-16!">
            <section className="flex items-center justify-center w-32 h-32 mb-8! bg-slate-700/30 rounded-full">
              <Swords className="w-16 h-16 text-slate-500" />
            </section>
            <h2 className="mb-2! text-2xl font-semibold text-white">
              Selecione pelo menos 2 personagens
            </h2>
            <p className="text-lg text-slate-400">
              Escolha os personagens acima para começar a comparação
            </p>
          </section>
        )}
      </section>

      <Footer />
    </section>
  );
}

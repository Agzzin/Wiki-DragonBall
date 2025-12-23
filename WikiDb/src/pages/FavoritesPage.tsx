import { Heart, Shield } from "lucide-react";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { CardPerson } from "../Components/CardPerson";
import { useNavigate } from "react-router-dom";
import { useWikiContext } from "../contexts/AuthContext";

export default function FavoritosPage() {
  const navigate = useNavigate();
  const { favoriteCharacters } = useWikiContext();

  return (
    <div className="pt-24! pl-0! min-h-screen bg-linear-to-b from-slate-900 via-slate-950 to-black text-white">
      <div className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6!">
          <div className="flex items-center gap-4 py-8! pl-8!">
            <Menu />
            <div className="w-16 h-16 bg-linear-to-br from-rose-900 to-rose-700 rounded-xl flex items-center justify-center">
              <Heart className="w-8 h-8 text-rose-300" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-4xl font-black">Meus Favoritos</h1>
              <p className="text-slate-400 mt-1">
                {favoriteCharacters.length} {favoriteCharacters.length === 1 ? 'item salvo' : 'itens salvos'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {favoriteCharacters.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12! sm:gap-5 md:gap-6 justify-items-center p-6!">
          {favoriteCharacters.map((character) => (
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
      ) : (
        <section className="flex justify-center items-center">
          <div className="max-w-7xl mx-auto px-6!">
            <div className="flex flex-col items-center justify-center text-center py-24!">
              <div className="w-32 h-32 mb-8! rounded-full border-4 border-slate-700 flex items-center justify-center">
                <Heart className="w-16 h-16 text-slate-600" />
              </div>

              <h2 className="text-3xl font-semibold mb-4!">
                Nenhum favorito ainda
              </h2>

              <p className="text-slate-400 text-xl mb-8! max-w-md leading-relaxed">
                Comece adicionando personagens, sagas ou técnicas aos seus
                favoritos
              </p>

              <button className="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8! py-4! rounded-xl text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              onClick={() => navigate('/caracters')}
              >
                Explorar Personagens
              </button>
            </div>
          </div>
        </section>
      )}
      <section>
        <Footer />
      </section>
    </div>
  );
}
import { Home, Users, Tv, Zap, Scale, HelpCircle, Heart, BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function DragonBallMenu() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-slate-900/95 border-b border-slate-700 fixed w-full top-0 left-0 z-1000 backdrop-blur-sm">
      <section className="max-w-7xl mx-auto px-4!">
        <section className="flex items-center justify-between h-16 md:h-16">
          

          <section className="flex items-center gap-2">
            <section className="w-10 h-10 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-white" />
            </section>
            <span className="text-white font-bold text-xl">DB Wiki</span>
          </section>

          <section className="flex items-center gap-2 lg:gap-2">
            <Link 
              to="/" 
              className={`flex items-center gap-2 px-4! py-2! text-sm font-medium rounded-lg transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-700/50 ${
                isActive('/') 
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                  : ''
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Início</span>
            </Link>

            <Link 
              to="/caracters" 
              className={`flex items-center gap-2 px-4! py-2! text-sm font-medium rounded-lg transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-700/50 ${
                isActive('/caracters') 
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                  : ''
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Personagens</span>
            </Link>

            <Link 
              to="/sagas" 
              className={`flex items-center gap-2 px-4! py-2! text-sm font-medium rounded-lg transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-700/50 ${
                isActive('/sagas') 
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                  : ''
              }`}
            >
              <Tv className="w-4 h-4" />
              <span>Sagas</span>
            </Link>

            <Link 
              to="/techniques" 
              className={`flex items-center gap-2 px-4! py-2! text-sm font-medium rounded-lg transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-700/50 ${
                isActive('/techniques') 
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                  : ''
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Técnicas</span>
            </Link>

            <Link 
              to="/compare-caracters" 
              className={`flex items-center gap-2 px-4! py-2! text-sm font-medium rounded-lg transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-700/50 ${
                isActive('/compare-caracters') 
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                  : ''
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>Comparar</span>
            </Link>

            <Link 
              to="/quiz" 
              className={`flex items-center gap-2 px-4! py-2! text-sm font-medium rounded-lg transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-/50 ${
                isActive('/quiz') 
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                  : ''
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Quiz</span>
            </Link>

            <Link 
              to="/favorites" 
              className={`flex items-center gap-2 px-4! py-2! text-sm font-medium rounded-lg transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-700/50 ${
                isActive('/favorites') 
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                  : ''
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Favoritos</span>
            </Link>
          </section>
        </section>
      </section>
    </nav>
  );
}

export default DragonBallMenu;

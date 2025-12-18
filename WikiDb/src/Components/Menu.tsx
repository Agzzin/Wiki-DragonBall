import { useState } from "react";
import { Home, Users, Tv, Zap, Scale, HelpCircle, Heart, BookOpen, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function DragonBallMenu() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { path: "/", icon: Home, label: "Início" },
    { path: "/caracters", icon: Users, label: "Personagens" },
    { path: "/sagas", icon: Tv, label: "Sagas" },
    { path: "/techniques", icon: Zap, label: "Técnicas" },
    { path: "/compare-caracters", icon: Scale, label: "Comparar" },
    { path: "/quiz", icon: HelpCircle, label: "Quiz" },
    { path: "/favorites", icon: Heart, label: "Favoritos" },
  ];

  return (
    <nav className="bg-slate-900/95 border-b border-slate-700 fixed w-full top-0 left-0 z-50 backdrop-blur-sm">
      <section className="max-w-7xl mx-auto px-4">
        <section className="flex items-center justify-between h-16">
        
          <section className="flex items-center gap-2">
            <section className="w-10 h-10 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-white" />
            </section>
            <span className="text-white font-bold text-xl">DB Wiki</span>
          </section>

          <section className="hidden lg:flex items-center gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4! py-2! text-sm font-medium rounded-lg transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-700/50 ${
                    isActive(item.path)
                      ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                      : ""
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </section>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-2! mr-2! transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </section>

        <section
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <section className="pt-2 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </section>
        </section>
      </section>
    </nav>
  );
}

export default DragonBallMenu;
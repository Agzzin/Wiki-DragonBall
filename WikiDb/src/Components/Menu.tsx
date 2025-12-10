import { Home, Users, Tv, Zap, Scale, HelpCircle, Heart, BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "../../src/ComponentStyles/Menu.css";

function DragonBallMenu() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="menu-nav">
      <section className="menu-container">
        <section className="menu-content">
          <section className="menu-logo">
            <section className="logo-icon">
              <BookOpen className="icon" />
            </section>
            <span className="logo-text">DB Wiki</span>
          </section>

          <section className="menu-items">
            <Link to={'/'} className={`menu-item  ${isActive('/') ? 'active' : ''}`}>
              <Home className="menu-icon" />
              <span className="menu-text">Início</span>
            </Link>

            <Link to={'/caracters'} className={`menu-item  ${isActive('/caracters') ? 'active' : ''}`}>
              <Users className="menu-icon" />
              <span className="menu-text">Personagens</span>
            </Link>

            <Link to={'/sagas'} className={`menu-item  ${isActive('/sagas') ? 'active' : ''}`}>
              <Tv className="menu-icon" />
              <span className="menu-text">Sagas</span>
            </Link>

            <Link to={'/techniques'} className={`menu-item  ${isActive('/techniques') ? 'active' : ''}`}>
              <Zap className="menu-icon" />
              <span className="menu-text">Técnicas</span>
            </Link>

            <Link to={'/compare-caracters'} className={`menu-item  ${isActive('/compare-caracters') ? 'active' : ''}`}>
              <Scale className="menu-icon" />
              <span className="menu-text">Comparar</span>
            </Link>

            <Link to={'/quiz'} className={`menu-item  ${isActive('/quiz') ? 'active' : ''}`}>
              <HelpCircle className="menu-icon" />
              <span className="menu-text">Quiz</span>
            </Link>

            <Link to={'/favorites'} className={`menu-item  ${isActive('/favorites') ? 'active' : ''}`}>
              <Heart className="menu-icon" />
              <span className="menu-text">Favoritos</span>
            </Link>
          </section>
        </section>
      </section>
    </nav>
  );
}

export default DragonBallMenu;

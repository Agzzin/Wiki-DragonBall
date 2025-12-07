import { Home, Users, Tv, Zap, Scale, HelpCircle, Heart, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import "../../src/ComponentStyles/Menu.css";

function DragonBallMenu() {
  return (
    <nav className="menu-nav">
      <section className="menu-container">
        <section className="menu-content">
          {/* Logo */}
          <section className="menu-logo">
            <section className="logo-icon">
              <BookOpen className="icon" />
            </section>
            <span className="logo-text">DB Wiki</span>
          </section>

          <section className="menu-items">
            <Link to={''} className="menu-item">
           
              <Home className="menu-icon" />
              <span className="menu-text">Início</span>
          
            </Link>

            <Link to={''} className="menu-item">
              <Users className="menu-icon" />
              <span className="menu-text">Personagens</span>
            
            </Link>

            <Link to={''} className="menu-item">
           
              <Tv className="menu-icon" />
              <span className="menu-text">Sagas</span>
  
            </Link>

            <Link to={''} className="menu-item">
            
              <Zap className="menu-icon" />
              <span className="menu-text">Técnicas</span>
            
            </Link>

            <Link to={''} className="menu-item">
              <Scale className="menu-icon" />
              <span className="menu-text">Comparar</span>
          
            </Link>

            <Link to={''} className="menu-item">
           
              <HelpCircle className="menu-icon" />
              <span className="menu-text">Quiz</span>
        
            </Link>

            <Link to={''} className="menu-item">
              
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
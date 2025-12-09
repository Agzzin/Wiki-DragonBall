import { Heart } from 'lucide-react';
import '../styles/FavoritePage.css';
import Menu from '../components/Menu'

export default function FavoritosPage() {
  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <div className="favorites-container">
          <div className="header-content">
            <Menu/>
            <div className="icon-wrapper">
              <Heart className="heart-icon filled" />
            </div>
            <div>
              <h1 className="title">Meus Favoritos</h1>
              <p className="subtitle">0 itens salvos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="favorites-container">
        <div className="empty-state">
          <div className="empty-icon-circle">
            <Heart className="empty-heart-icon" />
          </div>
          
          <h2 className="empty-title">
            Nenhum favorito ainda
          </h2>
          
          <p className="empty-description">
            Comece adicionando personagens, sagas ou técnicas aos seus favoritos
          </p>
          
          <button className="explore-button">
            Explorar Personagens
          </button>
        </div>
      </div>
    </div>
  );
}

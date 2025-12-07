// CompareCharacters.jsx
import { Search, Swords } from "lucide-react";
import "../../src/styles/CompareCaracterPage.css";
import Menu from '../components/Menu'
import Header from "../components/Header";

export default function CompareCharacters() {
  return (
    <section className="compare-page">
      <Menu/>
      <section className="compare-header">
        <Header 
          title="Comparar personagens" 
          colorHeaderIcon="#c084fc77" 
          colorIcon="#C084FC" 
          icon={Swords}
        />
      </section>

      <section className="compare-grid">
        <section className="compare-card">
          <section className="card-circle">
            <Search className="circle-icon" />
          </section>
          <h3 className="card-title">Selecione o Personagem 1</h3>
          <section className="search-box">
            <input
              type="text"
              placeholder="Buscar personagem..."
              className="search-input"
            />
          </section>
        </section>

        <section className="compare-card">
          <section className="card-circle">
            <Search className="circle-icon" />
          </section>
          <h3 className="card-title">Selecione o Personagem 2</h3>
          <section className="search-box">
            <input
              type="text"
              placeholder="Buscar personagem..."
              className="search-input"
            />
          </section>
        </section>

        <section className="compare-card">
          <section className="card-circle">
            <Search className="circle-icon" />
          </section>
          <h3 className="card-title">Selecione o Personagem 3</h3>
          <section className="search-box">
            <input
              type="text"
              placeholder="Buscar personagem..."
              className="search-input"
            />
          </section>
        </section>
      </section>
      
      <section className="empty-state">
        <section className="empty-state-icon">
          <Swords className="swords-icon" />
        </section>
        <h2 className="empty-state-title">Selecione pelo menos 2 personagens</h2>
        <p className="empty-state-subtitle">
          Escolha os personagens acima para começar a comparação
        </p>
      </section>
    </section>
  );
}
import { ChevronLeft, Search, User, Users } from "lucide-react";
import '../../src/styles/CaracterPage.css'
import { Link } from "react-router-dom";



const characters = [
    { id: 1, name: 'Goku', race: 'Saiyajin', color: '#ff4444', initial: 'G' },
    { id: 2, name: 'Vegeta', race: 'Saiyajin', color: '#2c5aa0', initial: 'V' },
    { id: 3, name: 'Piccolo', race: 'Namekuseijin', color: '#4a7c59', initial: 'P' },
    { id: 4, name: 'Gohan', race: 'Saiyajin', color: '#8b5a3c', initial: 'G' },
  ];

  const races = ['Todas', 'Saiyajin', 'Humano', 'Namekuseijin', 'Androide', 'Majin', 'Deus', 'Freeza Race', 'Outro'];
  const affiliations = ['Todas', 'Guerreiros Z', 'Vilões', 'Neutros'];



export default function CaracterPage() {
    return(
        <section className="container">
        <header className="c-header">
          <button className="back-button">
            <ChevronLeft size={24} />
            <Link to="/" style={{textDecoration:'none', color:'#94a3b8'}}>
           <p>Voltar</p>
            </Link>
          </button>
          
          <section className="header-content">
            <section className="header-icon">
             <Users size={32}/>
            </section>
            <section className="header-text">
              <h1 className="title">Personagens</h1>
              <p className="subtitle">6 personagens no banco de dados</p>
            </section>
          </section>

          <section className="search-box">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Buscar personagens..." 
              className="search-input"
            />
          </section>
        </header>

        <main className="main">
          <section className="filters-section">
            <section className="filter-group">
              <label className="filter-label">Raça</label>
              <section className="filter-pills">
                {races.map((race, index) => (
                  <button 
                    key={index} 
                    className={`pill ${index === 0 ? 'pill-active' : ''}`}
                  >
                    {race}
                  </button>
                ))}
              </section>
            </section>

            <section className="filter-group">
              <label className="filter-label">Afiliação</label>
              <section className="filter-pills">
                {affiliations.map((affiliation, index) => (
                  <button 
                    key={index} 
                    className={`pill ${index === 0 ? 'pill-active' : ''}`}
                  >
                    {affiliation}
                  </button>
                ))}
              </section>
            </section>
          </section>

          <section className="characters-section">
            <section className="characters-grid">
              {characters.map((character) => (
                <section 
                  key={character.id} 
                  className="character-card"
                  style={{ background: `linear-gradient(135deg, ${character.color}ee 0%, ${character.color}99 100%)` }}
                >
                                    
                </section>
              ))}
            </section>
          </section>
        </main>

        <footer className="footer">
          <p className="footer-text">© 2025 Dragon Ball Characters Database</p>
        </footer>
      </section>
    )
}


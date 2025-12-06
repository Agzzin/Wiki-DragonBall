import Header from "../components/Header"
import { Tv, Play } from "lucide-react"
import '../../src/styles/SagasPage.css'

 const sagas = [
    {
      id: 1,
      title: 'Saga do Torneio de Artes Marciais',
      description: 'A jornada do jovem Goku começa quando conhece Bulma em busca das Esferas do Dragão. Participa de diversos torneios de artes marciais, enfrentando adversários cada vez mais fortes.',
      episodes: 153,
      series: 'Dragon Ball',
      color: '#047857'
    }
  ];

  const series = ['Todas', 'Dragon Ball', 'Dragon Ball Z', 'Dragon Ball GT', 'Dragon Ball Super'];


export default function SagasPage() {
    return(
        <section className="container">
            <Header title="Sagas" icon={Tv}/>

         <main className="main">
          <section className="filters-section">
            <label className="filter-label">Série</label>
            <div className="filter-pills">
              {series.map((serie, index) => (
                <button 
                  key={index} 
                  className={`pill ${index === 0 ? 'pill-active' : ''}`}
                >
                  {serie}
                </button>
              ))}
            </div>
          </section>

          <section className="sagas-section">
            <h2 className="section-title">Dragon Ball</h2>
            
            <div className="sagas-list">
              {sagas.map((saga) => (
                <div key={saga.id} className="saga-card">
                  <div className="saga-thumbnail">
                    <Play className="play-icon" size={80} strokeWidth={1.5} />
                  </div>
                  <div className="saga-content">
                    <div>
                      <span className="saga-badge">{saga.series}</span>
                      <h3 className="saga-title">{saga.title}</h3>
                      <p className="saga-description">{saga.description}</p>
                      <div className="saga-episodes">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2"/>
                          <path d="M3 9h18"/>
                          <path d="M9 21V9"/>
                        </svg>
                        <span>{saga.episodes} eps</span>
                      </div>
                    </div>
                    <div className="saga-number">#1</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="footer">
          <p className="footer-text">© 2025 Dragon Ball Sagas Database</p>
        </footer>
      
     </section> 
    )
    
}
import Header from "../components/Header";
import { Zap } from "lucide-react";
import "../../src/styles/Techniques.css";
import Menu from '../components/Menu'

const techniques = [
  {
    id: 1,
    name: "Kamehameha",

    type: "Energia",
    description:
      "A técnica mais icônica de Dragon Ball. Uma poderosa onda de energia concentrada nas mãos e disparada em forma de raio. Foi criada pelo...",
    users: ["Goku", "Gohan", "Goten", "Cell"],
    moreUsers: 1,
  },
  {
    id: 2,
    name: "Genki Dama",

    type: "Energia",
    description:
      "A Esfera de Energia Vital coleta energia de todos os seres vivos ao redor para criar uma esfera massiva de poder. É a técnica mais poderosa de...",
    users: ["Goku"],
    moreUsers: 0,
  },
];

const types = [
  "Todos",
  "Energia",
  "Física",
  "Suporte",
  "Transformação",
  "Fusão",
];

function TechniquesPage() {
  return (
    <section className="container">
      <Menu/>
      <Header title="Tecnicas" icon={Zap} colorHeaderIcon="#facc1569" colorIcon="#FACC15"/>

      <main className="main">
        <section className="filters-section">
          <label className="filter-label">Tipo</label>
          <div className="filter-pills">
            {types.map((type, index) => (
              <button
                key={index}
                className={`pill ${index === 0 ? "pill-active" : ""}`}
              >
                {type}
              </button>
            ))}
          </div>
        </section>

        <section className="techniques-section">
          <div className="techniques-grid">
            {techniques.map((technique) => (
              <div key={technique.id} className="technique-card">
                <div className="technique-header">
                  <div className="technique-icon">
                    <Zap size={28} strokeWidth={2.5} />
                  </div>
                  <div className="technique-info">
                    <h3 className="technique-name">{technique.name}</h3>

                    <span className="technique-type">{technique.type}</span>
                  </div>
                </div>

                <p className="technique-description">{technique.description}</p>

                <div className="technique-users">
                  {technique.users.map((user, index) => (
                    <span key={index} className="user-tag">
                      {user}
                    </span>
                  ))}
                  {technique.moreUsers > 0 && (
                    <span className="more-users">+{technique.moreUsers}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">© 2025 Dragon Ball Techniques Database</p>
      </footer>
    </section>
  );
}

export default TechniquesPage;

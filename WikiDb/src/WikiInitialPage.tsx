import "./WikiInitialPage.css";

function WikiInitialPage() {
  return (
    <section className="container">
      <header>
        <section className="header">
          <button className="button-encyclopedia">
            <p className="encyclopedia-text">A Enciclopédia Definitiva</p>
          </button>

          <section className="dragon-ball-section">
            <h1 className="h1-dragon-ball">
              Dragon Ball
             
            </h1>
            <h1 className="h1-dragon-balll">Wiki</h1>
            <p className="p-dragon-ball">
              Explore o universo de Dragon Ball. Personagens, sagas, técnicas e
              muito
              <br />
              mais em um só lugar.
            </p>
          </section>

          <section className="button-wiki">
            <button className="b-exploration-wiki"><p className="p-exploration-wiki">Explorar Wiki</p></button>
            <button className="b-exploration-sagas"><p className="p-exploration-sagas">Ver sagas</p></button>
          </section>
        </section>
      </header>

      <main>
        <section>
          <section>
            <h1>Explore a Wiki</h1>
            <p>
              Navegue por categorias e descubra tudo sobre o universo Dragon
              Ball
            </p>
            <section></section>
          </section>
        </section>

        <section>
          <section>
            <h1>Personagens em Destaque</h1>
            <button>Ver todos</button>
          </section>
          <p>Conheça os guerreiros mais icônicos</p>
        </section>
      </main>

      <footer>
        <section>
          <h1>Dragon Ball Wiki</h1>
        </section>
        <p>A enciclopédia definitiva do universo Dragon Ball</p>
      </footer>
    </section>
  );
}

export default WikiInitialPage;

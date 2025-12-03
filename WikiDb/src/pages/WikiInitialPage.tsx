import {
  ChevronRight,
  Search,
  Sparkles,
  Users,
  Tv,
  Zap,
  Shield, 
  BookOpen
} from "lucide-react";
import "../styles/WikiInitialPage.css";
import { CardCuriosities } from "../components/CardCuriosities";
import { CardPerson } from "../components/CardPerson";

function WikiInitialPage() {
  return (
    <section className="container">
      <header>
        <section className="header">
          <button className="button-encyclopedia">
            <Sparkles color="#fff" size={20} />
            <p className="encyclopedia-text">A Enciclopédia Definitiva</p>
          </button>

          <section className="dragon-ball-section">
            <h1 className="h1-dragon-ball">Dragon Ball</h1>
            <h1 className="h1-dragon-balll">Wiki</h1>
            <p className="p-dragon-ball">
              Explore o universo de Dragon Ball. Personagens, sagas, técnicas e
              muito
              <br />
              mais em um só lugar.
            </p>
          </section>

          <section className="button-wiki">
            <button className="b-exploration-wiki">
              <Search color="#f16f10" size={20} />
              <p className="p-exploration-wiki">Explorar Wiki</p>
            </button>
            <button className="b-exploration-sagas">
              <p className="p-exploration-sagas">Ver sagas</p>
            </button>
          </section>
        </section>
      </header>

      <main>
        <section className="wiki-main">
          <section className="explore-wiki">
            <h1 className="explore-wiki-h1">Explore a Wiki</h1>
            <p className="explore-wiki-p">
              Navegue por categorias e descubra tudo sobre o universo Dragon
              Ball
            </p>
            <section className="cards-curisioties">
              <CardCuriosities
                icon={Users}
                backgroundColor="#F05B1B"
                items={6}
                paragraph="Explore todos os guerreiros, vilões e aliados do universo Dragon Ball"
                title="Personagens"
                chevron={ChevronRight}
              />
              <CardCuriosities
                icon={Tv}
                backgroundColor="#436AEF"
                items={6}
                paragraph="Reviva as aventuras épicas desde Dragon Ball até Super"
                title="Sagas"
                chevron={ChevronRight}
              />
              <CardCuriosities
                icon={Zap}
                backgroundColor="#EA9B09"
                items={6}
                paragraph="Kamehameha, Genki Dama e todas as técnicas lendárias"
                title="Técnicas"
                chevron={ChevronRight}
              />
            </section>
          </section>
        </section>

        <section className="emphasis">
          <section className="emphasis-display">
            <h1 className="person-emphasis">Personagens em Destaque</h1>
            <button className="emphasis-button">
              <p className="button-p">Ver todos</p>
              <ChevronRight size={22} color="#EA9B09" />
            </button>
          </section>
          <p className="emphasis-p">Conheça os guerreiros mais icônicos</p>
          <section className="section-cards">
            <CardPerson
              race="Sayajin"
              image={
                "https://i.pinimg.com/736x/a5/a7/f9/a5a7f9fad4ce2a546e053c95005e63b0.jpg"
              }
              name="Broly"
              firstAppearance="Dragon Ball Z: O Poder Invencível (1993)"
              transform="Super Saiyajin Lendário"
              icon={Shield}
            />
            <CardPerson
              race="Saiyajin"
              image="https://uploads.alternativanerd.com.br/wp-content/uploads/2018/03/AN_Goku-Intinto-Superior.jpg"
              name="Goku"
              firstAppearance="Dragon Ball (1986)"
              transform={["Super Saiyajin", "Super Saiyajin Blue", "Ultra Instinto"]}
              icon={Shield}
            />
            <CardPerson
              race="Saiyajin"
              image="https://wallpapers.com/images/hd/majin-vegeta-smile-5g4t1zilgzsodudn.jpg "
              name="Vegeta"
              firstAppearance="Dragon Ball Z (1989)"
              transform={["Super Saiyajin", "Super Saiyajin Blue", "Ultra Ego"]}
              icon={Shield}
            />
            <CardPerson
              race="Kaioshin"
              image="https://ovicio.com.br/wp-content/uploads/2019/12/20191201-goku-black-01-1280x720.jpg"
              name="Zamasu"
              firstAppearance="Dragon Ball Super (2015)"
              transform="Super Saiyajin Rosé"
              icon={Shield}
            />
          </section>
        </section>
      </main>

      <footer>
        <section className="footer-wiki">
          <section className="box-icon-footer">
            <BookOpen color="#fff" size={20}/>
          </section>
          <h1 className="h1-wiki">Dragon Ball Wiki</h1>
        </section>
        <p className="p-wiki">A enciclopédia definitiva do universo Dragon Ball</p>
      </footer>
    </section>
  );
}

export default WikiInitialPage;

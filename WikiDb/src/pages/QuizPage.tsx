import { Brain } from "lucide-react";
import "../../src/styles/QuizPage.css";
import Menu from '../components/Menu';
import Header from "../components/Header";

export default function QuizPage() {
  return (
    <section className="quiz-page">
      <Menu />
      
      <section className="quiz-header">
        <Header 
          title="Quiz Dragon Ball" 
          colorHeaderIcon="#c084fc77" 
          colorIcon="#C084FC" 
          icon={Brain}
        />
      </section>

      <section className="quiz-container">
        <section className="quiz-card">
        
          <section className="quiz-icon-wrapper">
            <section className="quiz-icon-circle">
              <Brain className="quiz-brain-icon" />
            </section>
          </section>

          <h2 className="quiz-title">Pronto para o desafio?</h2>
          <p className="quiz-description">
            Responda 10 perguntas sobre personagens, sagas e técnicas do universo Dragon Ball. Boa sorte!
          </p>

          <section className="quiz-info-grid">
            <section className="quiz-info-card">
              <span className="info-number info-orange">10</span>
              <span className="info-label">Questões</span>
            </section>

            <section className="quiz-info-card">
              <span className="info-number info-blue">4</span>
              <span className="info-label">Opções</span>
            </section>

            <section className="quiz-info-card">
              <span className="info-number info-purple">∞</span>
              <span className="info-label">Tentativas</span>
            </section>
          </section>

          <button className="quiz-start-button">
            Iniciar Quiz
          </button>
        </section>
      </section>
    </section>
  );
}
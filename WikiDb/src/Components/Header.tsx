import { ChevronLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import "../../src/ComponentStyles/Header.css";
import type { LucideIcon } from "lucide-react";

type HeaderProps = {
  title: string;
  icon: LucideIcon;
};

export default function Header({ title, icon: Icon }: HeaderProps) {
  return (
    <header className="c-header">
      <button className="back-button">
        <ChevronLeft size={24} />
        <Link to="/" style={{ textDecoration: "none", color: "#94a3b8" }}>
          <p>Voltar</p>
        </Link>
      </button>

      <section className="header-content">
        <section className="header-icon">{<Icon size={34}/>}</section>
        <section className="header-text">
          <h1 className="title">{title}</h1>
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
  );
}

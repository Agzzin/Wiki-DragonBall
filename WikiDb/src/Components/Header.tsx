    import { Search } from "lucide-react";
    import "../../src/ComponentStyles/Header.css";
    import type { LucideIcon } from "lucide-react";

    type HeaderProps = {
      title: string;
      icon: LucideIcon;
      colorHeaderIcon: string;
      colorIcon: string
    };

    export default function Header({ title, icon: Icon, colorHeaderIcon, colorIcon }: HeaderProps) {
      return (
        <header className="c-header">

          <section className="header-content">
            <section className="header-icon" style={{backgroundColor: colorHeaderIcon}}>{<Icon size={34} color={colorIcon}/>}</section>
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

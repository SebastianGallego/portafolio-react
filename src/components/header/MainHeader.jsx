//Importo las imagenes
import Vector from "@/assets/images/vector.png";
import "bootstrap/dist/css/bootstrap.css";

export default function MainHeader() {
  return (
    <header className="menuHeader d-flex align-items-center">
      <div className="containerLogoName d-flex align-items-center">
        <img src={Vector} className="menuLogo pe-2" />
        <h3 className="menuTitle">Sebastián Gallego</h3>
      </div>

      <nav className="menuNav  justify-content-end">
        <a className="linkNav" href="#sobreMi">
          Sobre mi
        </a>
        <a className="linkNav" href="#skills">
          Skills
        </a>
        <a className="linkNav" href="#hobbies">
          Hobbies
        </a>
        <a className="linkNav" href="#formacion">
          Formación
        </a>
        <a className="linkNav" href="#xp">
          Proyectos
        </a>
        <a className="linkNav" href="#contacto">
          Contacto
        </a>
      </nav>
    </header>
  );
}

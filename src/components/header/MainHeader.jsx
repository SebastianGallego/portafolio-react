//Importo las imagenes
import Vector from "@/assets/images/vector.png";
//import "bootstrap/dist/css/bootstrap.css";
import "@/App.css";
import "@/components/header/MainHeader.css";

export default function MainHeader() {
  return (
    <header className="menuHeader container-fluid d-flex align-items-center">
      <div className="container  menuLogoName d-flex align-items-center">
        <img src={Vector} className="menuLogo " />
        <h3 className="menuTitle">Sebastián Gallego</h3>
      </div>

      <nav className="menuNav container-fluid d-flex gap-4 justify-content-end ">
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

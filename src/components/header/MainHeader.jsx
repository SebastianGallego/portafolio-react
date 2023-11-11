//Importo las imagenes
import Vector from "@/assets/images/vector.png";
//import "bootstrap/dist/css/bootstrap.css";
import "@/main.css";
import "@/components/header/MainHeader.css";

export default function MainHeader() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-black ">
      <div class="container">
        <img src={Vector} className="menuLogo p-2 " />
        <a class="navbar-brand text-light fs-3" href="#">
          Sebastian Gallego
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon bg-warning"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex gap-3 justify-content-evenly"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav ">
            <a
              class=" nav-link text-warning fs-4 active "
              aria-current="page"
              href="#about"
            >
              Sobre mi
            </a>
            <a class="nav-link text-warning fs-4" href="#skills">
              Skills
            </a>
            <a class="nav-link text-warning fs-4" href="#hobbies">
              Hobbies
            </a>
            <a class="nav-link text-warning fs-4" href="#studies">
              Formación
            </a>
            <a class="nav-link text-warning fs-4" href="#xp">
              Proyectos
            </a>
            <a class="nav-link text-warning fs-4" href="#contact">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

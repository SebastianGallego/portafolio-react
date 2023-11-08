import React from "react";
import "@/components/about/MainAbout.css";

export default function MainAbout() {
  return (
    <>
      <section className="sectionAbout" id="sobreMi">
        <div className="aboutContainer text-start">
          <h3 className="aboutTitulo">Sobre mi</h3>
          <p className="aboutParrafo">
            ¡Hola! Soy Sebastián Gallego, tengo 45 años, vivo en Argentina.
          </p>

          <p className="aboutParrafo">
            Soy un profesional apasionado por la tecnología y las tareas
            manuales. Mi formación como Técnico Electromecánico y mis años de
            estudiante de Ingeniería me han proporcionado una base sólida en la
            creación, gestión y mantenimiento de sistemas y procesos.
          </p>

          <p className="aboutParrafo">
            A lo largo de mi carrera, he tenido la oportunidad de trabajar con
            diversas empresas, brindando servicios que abarcan desde el diseño y
            la implementación de sistemas de control industrial hasta el
            mantenimiento de maquinaria especializada.
          </p>

          <p className="aboutParrafo">
            {" "}
            Además, soy un apasionado de la informática y un profesor
            comprometido en compartir mis conocimientos con otros. Como docente
            de informática, he tenido la satisfacción de ayudar a mis alumnos a
            adquirir habilidades digitales fundamentales para el éxito en el
            mundo actual.
          </p>
          <p className="aboutParrafo">
            Mi espíritu creativo también me ha llevado a explorar el mundo del
            diseño web. Como estudiante de programacion, estoy constantemente
            aprendiendo y experimentando con nuevas técnicas y tendencias para
            crear experiencias en línea atractivas y funcionales. En mi
            portafolio, encontrarás ejemplos de mis proyectos y logros en cada
            una de estas áreas.
          </p>
        </div>
      </section>
    </>
  );
}

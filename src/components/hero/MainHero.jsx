import ProfileImg from "@/assets/images/profile.jpg";
import "@/App.css";
import "./MainHero.css";
import CustomBtn from "@/components/customBtn/CustomBtn";

export default function MainHero() {
  return (
    <section className="sectionHero ">
      <div className="containerHero container d-flex  p-4">
        <div className="heroContainerBiografia text-start justify-content-center">
          <h2 className="heroTitulo">
            Hola, Soy Sebastián Gallego - Desarrollador web
          </h2>
          <h3 className="heroSubTitulo">
            {" "}
            Me formé en la Universidad de Quilmes y en la Universidad de Tres de
            Febrero. Actualmente estoy estudiando Desarrollo Web.{" "}
          </h3>

          <div className="d-flex gap-5 text-center">
            <CustomBtn
              text="Github"
              link="https://github.com/SebastianGallego"
              backgroundColor="var(--colorBotones)"
              border="2px solid var(--colorBotones)"
              textColor="var(--colorTexto)"
              icono="github"
            />
          </div>
        </div>
        <img className="heroProfile " src={ProfileImg} />
      </div>
    </section>
  );
}

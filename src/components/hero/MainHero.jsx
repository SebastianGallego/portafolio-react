import ProfileImg from "@/assets/images/profile.jpg";
import "@/main.css";
import "./MainHero.css";
import CustomBtn from "@/components/customBtn/CustomBtn";

export default function MainHero() {
  return (
    <section className="sectionHero container-fluid d-flex justify-content-center">
      <div className="container  d-flex flex-column flex-sm-row p-4 justify-content-center">
        <div className=" d-flex flex-column gap-4 justify-content-center">
          <h2 className="heroTitulo ">
            Hola, Soy Sebastián Gallego - Desarrollador web
          </h2>
          <h2 className="heroSubTitulo  ">
            {" "}
            Me formé en la Universidad de Quilmes y en la Universidad de Tres de
            Febrero. Actualmente estoy estudiando Desarrollo Web.{" "}
          </h2>

          <div className="containter-md d-flex gap-5 align-items-center  flex-column flex-lg-row">
            <CustomBtn
              text="Github"
              link="https://github.com/SebastianGallego"
              backgroundColor="var(--colorOrange)"
              border="2px solid var(--colorOrange)"
              textColor="black"
              icon="github"
            />

            <CustomBtn
              text="Linkedin"
              link="https://www.linkedin.com/in/sebastiangallegocanon/"
              backgroundColor="var(--colorOrange)"
              border="2px solid var(--colorOrange)"
              textColor="black"
              icon="linkedin"
            />

            <CustomBtn
              text="Instagram"
              link="https://www.instagram.com/stavelot1978/"
              backgroundColor="var(--colorOrange)"
              border="2px solid var(--colorOrange)"
              textColor="black"
              icon="instagram"
            />

            <CustomBtn
              text="Curriculum"
              link=""
              backgroundColor="var(--colorOrange)"
              border="2px solid var(--colorOrange)"
              textColor="black"
              icon="filetype-pdf"
            />
          </div>
        </div>
        <div className="">
          <img
            className="heroProfile d-flex d-none d-xxl-block shadow-lg"
            src={ProfileImg}
          />
        </div>
      </div>
    </section>
  );
}

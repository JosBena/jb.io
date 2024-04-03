import { Container, Image } from "react-bootstrap";
import profileImage from "../assets/Placehold.png";

const AboutMeMessage = () => {
  return (
    <>
      <p className="">
        I'm graduated student from NJIT with a major in IT, also specializing in
        game development, illustration, and web design/development.
      </p>
      <p>
        Most of my skills relating to IT come from
        <a
          href="#projects"
          className="text-white fw-bold"
          style={{ textDecoration: "none" }}
        >
          {" "}
          Projects{" "}
        </a>
        I've created and led during my time in University, which has improved my
        leadership, and organizing skills. Some of these projects include
        creating some high-definition models in Houdini, others include modding
        Games and creating games for Unity. I also have experience with creating
        game models in Blender and illustrations in Clipstudio Paint. In regards
        to my skills Related to web design, they come from Projects in
        University and from practice for creating the website for my Porfolio.
        In these projects I've developed both the front-end and back-end of the
        websites using PHP, JavaScript, MySQL, HTML, and CSS frameworks like
        bootstrap. Recently, I've also learned React and how to use it with
        booth Bootstrap and Tailwind.
      </p>
      <p>
        <b>Goals:</b>
      </p>
      <hr></hr>
      <p>
        <b>Short-Term:</b> Obtain more experience with work, while also
        improving my skills in the field of IT, game development, web design,
        and Illustration.
      </p>
      <p>
        <b>Mid-Term:</b> Work in a game development company in the future as the
        industry is currently booming, in which I could not only create the
        games, but also illustrate their art and make 3D/2D models for them.
        Moreover, as I understand How to create VR games I would also like to
        work in the VR industry as Its a booming industry at the moment.
        Furthermore, as I'm able to create websites I would also be able to both
        maintain them and improve them in both ends.
      </p>
      <p>
        <b>Long-term:</b> Create my own studio for videogames and create the
        games that I desire.
      </p>
    </>
  );
};

export const AboutMe = () => {
  return (
    <section id="aboutMe" className="bg-altlight pb-4 comPad">
      <Container fluid>
        <div className="h1 text-center fw-bold">About Me</div>
        <div className="d-flex justify-content-center ">
          <Image src={profileImage} className="img-fluid" />
        </div>
        <div className="bg-dark text-light border border-dark rounded p-3 ">
          <AboutMeMessage />
        </div>
      </Container>
    </section>
  );
};

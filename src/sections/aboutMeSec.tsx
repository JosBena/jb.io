import { Container, Image } from "react-bootstrap";
import profileImage from "../assets/Placehold.png";

export const AboutMe = () => {
  return (
    <section id="aboutMe" className="bg-altlight pb-4 comPad">
      <Container fluid>
        <div className="h1 text-center">About Me</div>
        <div className="d-flex justify-content-center ">
          <Image src={profileImage} className="img-fluid" />
        </div>
        <div className="bg-dark text-light border border-dark rounded p-3 ">
          <p className="">
            I'm graduated student from NJIT with a major in IT, also
            specializing in game development, illustration, and web
            design/development.
          </p>
          <p>
            Most of my skills relating to IT come from projects I've created and
            led, which has improved my leadership, and organizing skills. Some
            of these projects include creating some high-definition models in
            Houdini, others include modding Games and creating games for Unity.
            I also have experience with creating game models in Blender and
            illustrations in Clipstudio Paint. In regards to my skills Related
            to web design come similarly from projects I've created and led. In
            these projects I've developed both the front-end and back-end of the
            websites using PHP, JavaScript, MySQL, HTML, and CSS frameworks like
            bootstrap.
          </p>
          <p>
            My short term goals are to obtain more experience with internships &
            work, while also improving my skills in the field of IT, game
            development, and Illustration. My mid-term goals are to work in a
            game development company in the future as the industry is currently
            booming, in which I could not only create the games, but also
            illustrate their art and make 3D/2D models for them. Moreover, as I
            understand How to create VR games I would also like to work in the
            VR industry as Its a booming industry at the moment. Furthermore, as
            I'm able to create websites I would also be able to both maintain
            them and improve them in both ends. Lastly, My Long-term goal is to
            create my own studio for videogames and create the games that I
            desire.
          </p>
        </div>
      </Container>
    </section>
  );
};

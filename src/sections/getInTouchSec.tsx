import { Container } from "react-bootstrap";
import { LinkBar } from "./linkBar";

export const GetInTouch = () => {
  return (
    <section id="getInTouch" className="p-0  bg-secondary">
      <Container fluid>
        <div className="h1 text-center pt-4 text-white">Get In Touch</div>
        <div className="container-fluid d-flex justify-content-center px-5 bi-webSIconAlt py-2">
          <LinkBar style="container-fluid d-flex justify-content-center px-5 bi-webSIcon my-0" />
        </div>
      </Container>
    </section>
  );
};

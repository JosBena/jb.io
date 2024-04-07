import { Button, Col, Container, Image, Row } from "react-bootstrap";
import profilePic from "../assets/front.png";
import { BrushFill } from "react-bootstrap-icons";
import { HoverButtn } from "../components/hoverButton";

export const Home = () => {
  return (
    <section id="home" className="bg-secondary shadow">
      <div className="container-lg">
        <Row className="my-0 g-4 justify-content-lg-around justify-content-center align-items-center mx-1">
          <Col className="col-6 col-lg-4">
            <Image
              src={profilePic}
              fluid
              alt="Profile Picture"
              className="profCircle"
            ></Image>
          </Col>
          <Col className=" col-8 col-md-6 text-light fw-bold  p-3 pb-4 bg-dark text-center shadow border border-dark rounded-3 mt-0">
            <h1 className="ff-arial">Hello, I'm Josue benavides</h1>
            <Col className="d-flex flex-column text-golden h2-title">
              <div>&#123;Game Dev&#125;</div>
              <div>&lt;Web Designer/&gt;</div>
              <div>
                Artist <BrushFill width={15} height={15}></BrushFill>
              </div>
            </Col>
            <Col className="py-2">
              <span className="text-altlight fw-normal ">
                Ready to Create and Illustrate!
              </span>
            </Col>

            <Col className="d-flex justify-content-center align-items-center flex-column gap-1 gap-lg-2 mt-3 pb-3">
              <HoverButtn
                href="https://drive.google.com/drive/u/5/folders/1Q3qoHalK2yhE1GlfHqyo2LpWaniDzW8h"
                title="Get CV"
              />
              <HoverButtn href="#getintouch" title="Go to my Contacts" />
              <HoverButtn
                href="https://www.linkedin.com/in/jbenav/"
                title="Go to my LinkedIn"
              />
            </Col>
          </Col>
        </Row>
      </div>
    </section>
  );
};

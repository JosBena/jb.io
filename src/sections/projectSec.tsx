import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardSubtitle,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { HoverButtn } from "../components/hoverButton";
import WebPorfolio from "../assets/WPorfolio.png";
import TetrisPic from "../assets/TetrisPic.png";
import PacManPic from "../assets/TetrisPic.png";
import {
  BootstrapFill,
  BrowserChrome,
  Github,
  Unity,
  Vr,
} from "react-bootstrap-icons";
import { FaReact } from "react-icons/fa6";
import { HoverList } from "../components/hoverList";
import { SiOculus } from "react-icons/si";

const ProjectCard = ({
  itemList,
  title,
  description,
  codeHref,
  demoHref,
  picture,
  width,
  height,
}: any) => {
  return (
    <Col sm="8" md="5" lg="3">
      <Card className="border border-altlight rounded-3 my-2">
        <CardHeader className="text-center text-white bg-secondary h4">
          {title}
        </CardHeader>
        <CardBody className="text-center py-4 bg-altlight">
          <CardImg
            variant="top"
            src={picture}
            className="py-3"
            width={width}
            height={height}
          />
          <CardSubtitle className="text-muted card-project">
            <p>{description}</p>
          </CardSubtitle>
          <HoverList itemList={itemList} />
          <div className="d-flex justify-content-between">
            <HoverButtn
              href={codeHref}
              title="Code"
              icon={<Github width={25} height={25} />}
              isLight={false}
              padding="p-2"
            />
            <HoverButtn
              href={demoHref}
              title="Demo"
              icon={<BrowserChrome width={25} height={25} />}
              isLight={false}
              padding="p-2"
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export const Project = () => {
  //this is the list for the technologies used
  let webPorfolioList = [
    { icon: <Github />, title: "Github" },
    { icon: <BootstrapFill />, title: "Bootstrap" },
    { icon: <FaReact />, title: "React" },
  ];
  let TetrisList = [
    { icon: <Github />, title: "Github" },
    { icon: <Unity />, title: "Unity" },
  ];
  let PacManList = [
    { icon: <Github />, title: "Github" },
    { icon: <Unity />, title: "Unity" },
    { icon: <SiOculus />, title: "VR and Oculus" },
  ];

  return (
    <>
      <div id="projects" className="h2 text-center bg-altlight py-2  shadow-sm">
        Projects
      </div>
      <Container fluid>
        <div className="d-flex flex-column text-center my-2">
          <p className="text-muted my-2">
            Here is a List of Projects That I have created to demostrate my Web
            Design and Game Dev Skills
          </p>

          <div className="my-2">
            <HoverButtn
              href="https://github.com/JosBena"
              title="Go to my Github"
            />
          </div>
          <Row className="justify-content-center align-items-center gap-2">
            <ProjectCard
              picture={WebPorfolio}
              itemList={webPorfolioList}
              title="Web Porfolio"
              description="This is my web porfolio desmostrating I know how to both build a website and deploy it in github pages"
              codeHref="https://github.com/JosBena/jb.io"
              demoHref=""
            />
            <ProjectCard
              picture={TetrisPic}
              itemList={TetrisList}
              title="Tetris Porfolio"
              description="This is a simple portfolio piece to prove that I know how to use Unity and the 2D tilemap tools."
              codeHref="https://github.com/JosBena/U.Tetris"
              demoHref="https://lukuagames.itch.io/tetris-educational-portfolio-piece"
              width={150}
              height={285}
            />
            <ProjectCard
              picture={PacManPic}
              itemList={PacManList}
              title="PacMan VR Porfolio"
              description="This Project displays my ability to use VR, procedual generation, 3D, and AI pathing."
              codeHref="https://github.com/JosBena/U.PacHorror"
              demoHref="https://lukuagames.itch.io/pacmanhorror-vr-porfolio"
              width={150}
              height={285}
            />
          </Row>
        </div>
      </Container>
    </>
  );
};

import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { HoverButtn } from "../components/hoverButton";

export const Project = () => {
  return (
    <>
      <div className="h2 text-center bg-altlight py-2  shadow-sm">Projects</div>
      <Container fluid>
        <div className="d-flex flex-column text-center my-2">
          <p className="text-muted my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at
            dignissimos quae sapiente officiis tempore illum voluptate alias
            eveniet perspiciatis libero ratione esse, ab, corrupti amet
            consectetur? Iste, esse assumenda.
          </p>

          <div className="my-2">
            <HoverButtn
              href="https://github.com/JosBena"
              title="Go to my Github"
            />
          </div>
          <Row className="justify-content-center align-items-center gap-2">
            <Col sm="8" md="5" lg="3">
              <Card className="border border-altlight rounded-3 my-2">
                <CardHeader className="text-center text-white bg-secondary">
                  Web Porfolio
                </CardHeader>
                <CardBody className="text-center py-4 bg-altlight">
                  <CardImg variant="top" src="../assets/Placehold.png" />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

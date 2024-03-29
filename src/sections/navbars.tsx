import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import { Cpu } from "react-bootstrap-icons";
export const NavBars = () => {
  const NavTitle = () => {
    return (
      <>
        <Cpu width={45} height={45} />
        <div className="nav-title-font">
          <div className="">
            <span className="text-altdark  d-flex align-top">
              <span className="text-golden"> &gt; </span>
              JOSUE BENAVIDES
            </span>
          </div>
          <div className="text-golden pt-0 fw-normal  d-flex align-top mt-n2">
            <small>Game Developer | Web Designer | Artist |</small>
          </div>
        </div>
      </>
    );
  };

  return (
    <Navbar expand="md" color="light" bg="light" className="shadow-sm py-0">
      <Container fluid className=" comPad py-1">
        <Navbar.Brand
          href="#intro"
          className="col-2 col-md-6 fw-bold d-flex align-items-center text-secondary gap-2 gap-lg-3 ms-lg-5"
        >
          <NavTitle />
        </Navbar.Brand>
        <NavbarToggle
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </NavbarToggle>
        <NavbarCollapse
          id="mainNav"
          className="justify-content-end align-center"
        >
          <Nav className="text-secondary fw-semibold nav-link-size">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#aboutMe">About Me</Nav.Link>
            <Nav.Link href="#getInTouch">Get In Touch</Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

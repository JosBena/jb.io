import { Container } from "react-bootstrap";
import {
  Envelope,
  FilePersonFill,
  Github,
  Linkedin,
  TwitterX,
} from "react-bootstrap-icons";

export const LinkBar = () => {
  const Link = (props: any) => {
    return (
      <a
        target="_blank"
        title={props.title}
        href={props.link}
        className="bi-webSIcon p-1 d-flex"
      >
        {props.icon}
      </a>
    );
  };
  return (
    <Container
      fluid
      className="bg-secondary d-flex justify-content-md-end justify-content-center comPad"
    >
      <Link
        title="CV Resume."
        link="https://drive.google.com/file/d/1f2mhT6cFaakOepdW2jtGbaF3JE5GFPJj/view?usp=sharing"
        icon={
          <>
            <FilePersonFill></FilePersonFill>
          </>
        }
      ></Link>
      <Link
        title="Linkedin Account."
        link="https://www.linkedin.com/in/jbenav/"
        icon={
          <>
            <Linkedin></Linkedin>
          </>
        }
      ></Link>
      <Link
        title="Github Repos."
        link="https://github.com/JosBena"
        icon={
          <>
            <Github></Github>
          </>
        }
      ></Link>
      <Link
        title="Twitter(X)."
        link="https://twitter.com/JB_LucuaGames"
        icon={
          <>
            <TwitterX></TwitterX>
          </>
        }
      ></Link>
      <Link
        title="Email."
        link="mailto:jbenavides.business@gmail.com"
        icon={
          <>
            <Envelope></Envelope>
          </>
        }
      ></Link>
    </Container>
  );
};

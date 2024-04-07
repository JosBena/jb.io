import { Container } from "react-bootstrap";
import {
  Envelope,
  FilePersonFill,
  Github,
  Linkedin,
  TwitterX,
} from "react-bootstrap-icons";
import { FaItchIo } from "react-icons/fa6";

let newStyle = "",
  background = "";
const SetStyleType = ({ style }: any) => {
  if (style?.length > 0) {
    newStyle = style;
    background = "bi-webSIcon p-1 d-flex";
  } else {
    newStyle =
      "bg-secondary d-flex justify-content-md-end justify-content-center comPad";
    background = "bi-webSIcon p-1 d-flex";
  }
};
const Link = (props: any) => {
  return (
    <a
      target="_blank"
      title={props.title}
      href={props.link}
      className={background}
    >
      {props.icon}
    </a>
  );
};

export const LinkBar = ({ style }: any) => {
  SetStyleType((style = { style }));
  return (
    <Container fluid className={newStyle}>
      <Link
        title="CV Resume."
        link="https://drive.google.com/drive/u/5/folders/1Q3qoHalK2yhE1GlfHqyo2LpWaniDzW8h"
        icon={<FilePersonFill />}
      ></Link>
      <Link
        title="Linkedin Account."
        link="https://www.linkedin.com/in/jbenav/"
        icon={<Linkedin />}
      ></Link>
      <Link
        title="Github Repos."
        link="https://github.com/JosBena"
        icon={<Github />}
      ></Link>
      <Link
        title="Twitter(X)."
        link="https://twitter.com/JB_LucuaGames"
        icon={<TwitterX />}
      ></Link>
      <Link
        title="Email."
        link="mailto:jbenavides.business@gmail.com"
        icon={<Envelope />}
      ></Link>
      <Link
        title="itchio"
        link="https://lukuagames.itch.io/"
        icon={<FaItchIo />}
      />
    </Container>
  );
};

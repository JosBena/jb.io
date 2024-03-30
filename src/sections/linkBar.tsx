import { Container } from "react-bootstrap";
import {
  Envelope,
  FilePersonFill,
  Github,
  Linkedin,
  TwitterX,
} from "react-bootstrap-icons";

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
        link="https://drive.google.com/file/d/1f2mhT6cFaakOepdW2jtGbaF3JE5GFPJj/view?usp=sharing"
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
    </Container>
  );
};

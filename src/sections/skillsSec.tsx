import { Container } from "react-bootstrap";
import { HoverList } from "../components/hoverList";
import { IoLogoJavascript } from "react-icons/io5";

export const Skills = () => {
  const languageList = [
    { icon: <IoLogoJavascript />, title: "javascript" },
    { icon: <IoLogoJavascript />, title: "javascript" },
  ];
  const gameEngineList = [
    { icon: <IoLogoJavascript />, title: "javascript" },
    { icon: <IoLogoJavascript />, title: "javascript" },
  ];
  const databaseList = [
    { icon: <IoLogoJavascript />, title: "javascript" },
    { icon: <IoLogoJavascript />, title: "javascript" },
  ];
  const toolsList = [
    { icon: <IoLogoJavascript />, title: "javascript" },
    { icon: <IoLogoJavascript />, title: "javascript" },
  ];
  const frameworksList = [
    { icon: <IoLogoJavascript />, title: "javascript" },
    { icon: <IoLogoJavascript />, title: "javascript" },
  ];

  const cssStyle = "h5 g-col-1 text-center mb-3 fw-semibold";
  return (
    <section id="skills" className="pt-0 px-0">
      <Container fluid>
        <div className="h1 text-center py-3 pt-4 fw-bold text-golden">
          Skills
        </div>
        <p className={cssStyle}> Languages </p>
        <HoverList itemList={languageList} isActive={true}></HoverList>
        <p className={cssStyle}> GameEngines </p>
        <HoverList itemList={gameEngineList} isActive={true}></HoverList>
        <p className={cssStyle}> Databases </p>
        <HoverList itemList={databaseList} isActive={true}></HoverList>
        <p className={cssStyle}> Tools </p>
        <HoverList itemList={toolsList} isActive={true}></HoverList>
        <p className={cssStyle}> FrameWorks </p>
        <HoverList itemList={frameworksList} isActive={true}></HoverList>
      </Container>
    </section>
  );
};

import { Col, Container } from "react-bootstrap";
import { HoverList } from "../components/hoverList";
import { Bootstrap, Github } from "react-bootstrap-icons";
//react icons
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiUnrealengine,
  SiGodotengine,
  SiFirebase,
  SiTailwindcss,
  SiOculus,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaJava, FaPhp, FaUnity, FaReact } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";

const cssStyle =
  "h5 g-col-1 text-center mb-3 fw-bold fs-4 d-flex align-items-center ";
const SkillList = ({ list, title }: any) => {
  return (
    <div>
      <div className="d-flex bg-altlight pt-3 ps-5 align-items-center gap-3 mt-3">
        <Col sm="4">
          <p className={cssStyle}> {title} </p>
        </Col>
        <Col>
          <HoverList itemList={list} isActive={true}></HoverList>
        </Col>
      </div>
    </div>
  );
};
export const Skills = () => {
  const languageList = [
    { icon: <TbBrandCSharp />, title: "C#" },
    { icon: <BiLogoCPlusPlus />, title: "C++" },
    { icon: <IoLogoJavascript />, title: "javascript" },
    { icon: <SiTypescript />, title: "TypeScript" },
    { icon: <FaJava />, title: "Java" },
    { icon: <FaPhp />, title: "PHP" },
  ];
  const gameEngineList = [
    { icon: <FaUnity />, title: "Unity" },
    { icon: <SiUnrealengine />, title: "Unreal Engine" },
    { icon: <SiGodotengine />, title: "Godot" },
  ];
  const librariesList = [
    { icon: <FaReact />, title: "React" },
    { icon: <SiFirebase />, title: "Firebase" },
  ];
  const databaseList = [
    { icon: <SiFirebase />, title: "Firestore" },
    { icon: <GrMysql />, title: "MySql" },
  ];
  const toolsList = [
    { icon: <Github />, title: "Github" },
    { icon: <FaDocker />, title: "Docker" },
    { icon: <FaUnity />, title: "D.O.T.S" },
  ];
  const frameworksList = [
    { icon: <Bootstrap />, title: "Bootstrap" },
    { icon: <SiTailwindcss />, title: "Tailwind" },
  ];
  const gameTypesList = [
    { icon: <SiOculus />, title: "VR/XR" },
    { icon: <FaUnity />, title: "3d/2d" },
  ];

  return (
    <section id="skills" className="p-0 bg-dark pb-3">
      <Container fluid className="">
        <div className="h1 text-center py-3 pt-4 fw-bold text-white ">
          Skills
        </div>
        <SkillList list={languageList} title="Languages" />
        <SkillList list={gameEngineList} title="GameEngines" />
        <SkillList list={frameworksList} title="FrameWorks" />
        <SkillList list={librariesList} title="Libraries (Frontend/Backend)" />
        <SkillList list={databaseList} title="Databases" />
        <SkillList list={toolsList} title="Tools" />
        <SkillList list={gameTypesList} title="Game Types " />
      </Container>
    </section>
  );
};

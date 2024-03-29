import { Button } from "react-bootstrap";

export const HoverButtn = ({ href, title }: any) => {
  return (
    <Button
      href={href}
      className="btn-altlight text-dark bg-altlight border-altlight py-1 px-2"
      target="_blank"
    >
      <p className="m-0">{title}</p>
    </Button>
  );
};

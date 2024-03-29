import { Button } from "react-bootstrap";

const Checking = (props: any) => {};
export const HoverButtn = ({ href, title, icon, isLight, padding }: any) => {
  if (padding == null) padding = "py-1 px-2";
  if (isLight == null) isLight = true;
  let btn = isLight
    ? `btn-altlight text-dark bg-altlight border-altlight ${padding}`
    : `btn btn-dark text-light bg-dark border-dark ${padding}`;

  return (
    <Button href={href} className={btn} target="_blank">
      <p className="m-0 d-flex justify-content-center align-items-center gap-2">
        {icon} {title}
      </p>
    </Button>
  );
};

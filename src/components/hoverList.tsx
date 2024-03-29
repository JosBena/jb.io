import { ListGroup, Container, ListGroupItem } from "react-bootstrap";

/**
 * @param itemList contains icon, title
 */

export const HoverList = ({ itemList, isActive }: any) => {
  let cssVer = isActive ? "card-project big  gap-2" : "card-project gap-2";
  const list = itemList.map((item: any) => (
    <HoverItem icon={item.icon} title={item.title} isActive={isActive} />
  ));
  return (
    <Container className="mb-4">
      <ListGroup as="ul" className={cssVer} horizontal>
        {list}
      </ListGroup>
    </Container>
  );
};

const HoverItem = ({ icon, title, isActive }: any) => {
  let cssVer = isActive
    ? "d-flex align-items-center justify-content-center card-project pic big "
    : "d-flex align-items-center justify-content-center card-project pic";
  return (
    <ListGroupItem
      as="li"
      className="rounded bg-dark text-light text-center shadow p-0"
      title={title}
    >
      <div className={cssVer}>{icon} </div>
      {isActive && <div>{title} </div>}
    </ListGroupItem>
  );
};

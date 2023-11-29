import { HeaderStart } from "../components";

function StartLayout(props) {
  const { children } = props;
  return (
    <>
      <HeaderStart></HeaderStart>
      <div className="start-main">{children}</div>
    </>
  );
}

export { StartLayout };

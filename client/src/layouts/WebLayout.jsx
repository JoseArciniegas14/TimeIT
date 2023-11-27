import { HeaderNav } from "../components";

function WebLayout(props) {
  const { children } = props;
  return (
    <>
      <HeaderNav></HeaderNav>
      <main className="main">{children}</main>
    </>
  );
}

export { WebLayout };

import { HeaderNav, Aside } from "../components";

function WebLayout(props) {
  const { children } = props;
  return (
    <>
      <HeaderNav></HeaderNav>
      <main className="main">
        <Aside></Aside>
        {children}
      </main>
    </>
  );
}

export { WebLayout };

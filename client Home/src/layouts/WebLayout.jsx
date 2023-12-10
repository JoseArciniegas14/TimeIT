import React, { useState } from "react";
import { HeaderNav } from "../components";
import { Aside } from "../components";
import { useLocation } from "react-router-dom";

function WebLayout({ children }) {
  const [info, setInfo] = useState(null);
  const { pathname } = useLocation();

  const handleInfo = (value) => {
    setInfo(value);
  };

  return (
    <>
      <HeaderNav></HeaderNav>
      <div className="main-page">
        <Aside location={pathname} changeInfo={handleInfo}></Aside>
        {React.cloneElement(children, { info, handleInfo })}
      </div>
    </>
  );
}

export { WebLayout };

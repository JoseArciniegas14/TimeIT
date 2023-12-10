import { AsideBtn } from "./AsideBtn";
import { AsideCards } from "./AsideCards";
import { useWeb } from "../../hooks";

function Aside({ location, changeInfo }) {
  const { webState } = useWeb();
  let cards = null;
  const webLocation = {
    "/alarms": "alarms",
    "/notes": "notes",
    "/routines": "routines",
  };

  const webItemName = webLocation[location];

  if (webItemName) {
    cards = webState[webItemName];
  }

  return (
    <div className="aside">
      {cards && (
        <AsideCards cards={cards} location={location} changeInfo={changeInfo} />
      )}
      <AsideBtn location={location} />
    </div>
  );
}

export { Aside };

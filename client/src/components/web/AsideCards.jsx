import { Checkbox, Progress } from "semantic-ui-react";
import { useWeb } from "../../hooks";

function AsideCards({ cards, location, changeInfo }) {
  const { updateFormState, formState } = useWeb();

  const limitText = (text) => {
    if (text.length <= 10) {
      return text;
    }
    return `${text.substring(0, 10)}...`;
  };

  let listCards = null;
  const cardConfigs = {
    "/alarms": {
      renderCard: (value, index) => (
        <div
          key={index}
          className="alarm-card"
          onClick={() => {
            if (formState.formAlarms === true) return;
            changeInfo(value);
            updateFormState("formAlarms", true);
          }}
        >
          <p>{limitText(value.time) || "◦◦◦"}</p>
          <Checkbox toggle />
        </div>
      ),
    },
    "/notes": {
      renderCard: (value, index) => (
        <div
          key={index}
          className="note-card"
          onClick={() => {
            if (formState.formNotes === true) return;
            changeInfo(value);
            updateFormState("formNotes", true);
          }}
        >
          <p>{limitText(value.title) || "◦◦◦"}</p>
        </div>
      ),
    },
    "/routines": {
      renderCard: (value, index) => (
        <div
          key={index}
          className="routine-card"
          onClick={() => {
            if (formState.formRoutiones === true) return;
            changeInfo(value);
            updateFormState("formRoutines", true);
          }}
        >
          <p>{limitText(value.title) || "◦◦◦"}</p>
          <Progress percent={value.porcent} progress />
        </div>
      ),
    },
  };

  const cardSelect = cardConfigs[location];
  if (cardSelect) {
    listCards = cards.map((value, index) =>
      cardSelect.renderCard(value, index)
    );
  }

  return <>{listCards}</>;
}

export { AsideCards };

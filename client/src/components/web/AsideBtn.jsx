import { Button, Icon } from "semantic-ui-react";
import { useWeb } from "../../hooks";

function AsideBtn({ location }) {
  const { btnAsideState, formState, updateBtnAside, updateFormState } =
    useWeb();

  let button = null;
  const addButtonProps = {
    "/alarms": {
      state: "btnAlarms",
      text: "Añadir Alarma",
      formState: "formAlarms",
    },
    "/notes": {
      state: "btnNotes",
      text: "Añadir Nota",
      formState: "formNotes",
    },
    "/routines": {
      state: "btnRoutines",
      text: "Añadir Habito",
      formState: "formRoutines",
    },
  };

  const addButtonInfo = addButtonProps[location];

  if (addButtonInfo) {
    button = (
      <Button
        className="aside-card"
        disabled={btnAsideState[addButtonInfo.state]}
        onClick={() => {
          if (formState[addButtonInfo.formState] === true) return;
          updateBtnAside(addButtonInfo.state, true);
          updateFormState(addButtonInfo.formState, true);
        }}
      >
        <Icon name="plus circle" /> {addButtonInfo.text}
      </Button>
    );
  }

  return button;
}

export { AsideBtn };

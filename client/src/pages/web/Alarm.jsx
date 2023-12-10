import { FormAlarm } from "../../components";
import { useWeb } from "../../hooks";
import { Home } from "./Home";

function Alarms({ info, handleInfo }) {
  const { formState } = useWeb();
  return (
    <>
      {formState.formAlarms ? (
        <FormAlarm info={info} handleInfo={handleInfo} />
      ) : (
        <Home />
      )}
    </>
  );
}

export { Alarms };

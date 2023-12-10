import { FormRoutine } from "../../components";
import { useWeb } from "../../hooks";
import { Home } from "./Home";

function Routines({ info, handleInfo }) {
  const { formState } = useWeb();
  return (
    <>
      {formState.formRoutiones ? (
        <FormRoutine info={info} handleInfo={handleInfo} />
      ) : (
        <Home />
      )}
    </>
  );
}

export { Routines };

import { FormNote } from "../../components";
import { useWeb } from "../../hooks";
import { Home } from "./Home";

function Notes({ info, handleInfo }) {
  const { formState } = useWeb();
  return (
    <>
      {formState.formNotes ? (
        <FormNote info={info} handleInfo={handleInfo} />
      ) : (
        <Home />
      )}
    </>
  );
}

export { Notes };

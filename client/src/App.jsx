import { BrowserRouter } from "react-router-dom";
import { DefineRoute } from "./routes";
function App() {
  return (
    <>
      <BrowserRouter>
        <DefineRoute />
      </BrowserRouter>
    </>
  );
}

export { App };

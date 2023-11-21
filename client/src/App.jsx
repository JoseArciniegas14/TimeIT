import { BrowserRouter } from "react-router-dom";
import { WebRouter, UserRouter } from "./router";

export default function App() {
  return (
    <BrowserRouter>
      <WebRouter />
      <UserRouter />
    </BrowserRouter>
  );
}
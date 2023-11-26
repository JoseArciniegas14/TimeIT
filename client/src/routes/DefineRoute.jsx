import { Routes, Route } from "react-router-dom";
import { Start, Auth, Home, Notes, Alarm, Routines } from "../pages";
import { loadLayout } from "../services";
import { WebLayout } from "../layouts";

function DefineRoute() {
  return (
    <Routes>
      <Route path="/" element={<Start />}></Route>
      <Route path="/auth" element={loadLayout(WebLayout, Auth)}></Route>
      <Route path="/home" element={loadLayout(WebLayout, Home)}></Route>
      <Route path="/notes" element={loadLayout(WebLayout, Notes)}></Route>
      <Route path="/alarm" element={loadLayout(WebLayout, Alarm)}></Route>
      <Route path="/routines" element={loadLayout(WebLayout, Routines)}></Route>
    </Routes>
  );
}

export { DefineRoute };

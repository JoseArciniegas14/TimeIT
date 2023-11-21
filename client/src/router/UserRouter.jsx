import { Routes, Route } from "react-router-dom";
import { map } from "lodash";
import { DefaultLayout } from "../layouts";
import { UserHome } from "../pages/web/Home";

const user = null;

export function UserRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      {
        <Route
          path="/homepage/*"
          element={loadLayout(DefaultLayout, UserHome)}
        />
      }
    </Routes>
  );
}

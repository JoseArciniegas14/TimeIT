import { Aside } from "../../components";
import "../../css/inicio/style.css";
import "semantic-ui-css/semantic.min.css";

import "../../css/web/Home.css";
import { Box } from "../../components/app/Box";
import { Bar } from "../../components/app/Bar";

function Home() {
  return (
    <div>
      <Aside />
      <div className="nuevo-diseo-inicio">
        <Bar />
        <Box />
      </div>
    </div>
  );
}

export { Home };

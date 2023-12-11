import { Aside } from "../../components";
import "../../css/inicio/style.css";
import "semantic-ui-css/semantic.min.css";
import "../../css/web/Home.css";

import { Bar } from "../../components/app/Home/Bar-Home";

function Home() {
  return (
    <div className="bg-neutral-950 border border-gray-500">
      
      <div className="nuevo-diseo-inicio">
        <Bar />
        
       
      </div>
    </div>
  );
}

export { Home };

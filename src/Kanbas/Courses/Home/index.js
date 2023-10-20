import ModuleButtons from "../Modules/ModuleButtons";
import ModuleList from "../Modules/ModuleList";
import Status from "./Status.js";

function Home() {
  return (
    <div className="row">
      <div className="col-9">
        <h2>Home</h2>
        <ModuleButtons />
        <ModuleList />
      </div>
      <div className="col-3">
        <Status/>
      </div>
    </div>
  );
}
export default Home;

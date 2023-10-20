import {BiDotsVerticalRounded} from "react-icons/bi";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";
function ModuleButtons() {
  return (
    <div>
        <div className="row g-0">
        <div className="col-md-auto">
        <button class="btn btn-secondary">Collapse All</button>
      </div>
      <div className="col-md-auto">
        <button class="btn btn-secondary">View Progress</button>
      </div>
      <div className="col-md-auto">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <AiOutlineCheckCircle/>
            Publish All
          </button>
          <ul class="dropdown-menu"></ul>
        </div>
      </div>
      <div className="col-md-auto">
        <button class="btn btn-danger">
            <AiOutlinePlus/>
          Module
        </button>
      </div>
      <div className="col-md-auto">
        <button class="btn btn-secondary ">
            <BiDotsVerticalRounded/>
        </button>
      </div>
    </div>
    <hr/>
    </div>
  );
}

export default ModuleButtons;

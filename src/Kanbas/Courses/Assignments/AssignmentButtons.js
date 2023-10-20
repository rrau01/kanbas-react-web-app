import {BiDotsVerticalRounded} from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai";
import "./index.css"

function AssignmentButtons() {
    return (
        <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            style={{width: "400px", color:"grey"}}
            id="name1"
            value="Search for Assignment"
          />
        </div>
        <div class="col" style={{paddingBottom: "20px"}}>
          <button class="btn btn-secondary float-end">
            <BiDotsVerticalRounded/>
          </button>
          <button class="btn btn-danger float-end">
            <AiOutlinePlus/>
            Assignment
          </button>
          <button class="btn btn-secondary float-end">
            <AiOutlinePlus/>
            Group
          </button>
        </div>
        <hr style={{paddingBottom: "10px"}}/>
      </div>
    )
};

export default AssignmentButtons
import "./index.css";
import {BsFileEarmark} from "react-icons/bs";
import {FaArrowAltCircleRight} from "react-icons/fa";
import {ImTarget} from "react-icons/im";
import {VscGraph} from "react-icons/vsc";
import {BsMegaphone} from "react-icons/bs";
import {AiOutlineBell} from "react-icons/ai";


function Status() {
  return (
    <div style={{paddingTop: "45px"}}>
      <button class="btn btn-secondary">
        <BsFileEarmark className="button-icon"/>
        Import Existing Content
      </button>
      <br />
      <button class="btn btn-secondary">
        <FaArrowAltCircleRight className="button-icon"/>
        Import from Commons
      </button>
      <br />
      <button class="btn btn-secondary">
        <ImTarget className="button-icon"/>
        Choose Home Page
      </button>
      <br />
      <button class="btn btn-secondary">
        <VscGraph className="button-icon"/>
        View Course Stream
      </button>
      <br />
      <button class="btn btn-secondary">
        <BsMegaphone className="button-icon"/>
        New Announcement
      </button>
      <br />
      <button class="btn btn-secondary">
      <VscGraph className="button-icon"/>
        New Analytics
      </button>
      <br />
      <button class="btn btn-secondary">
        <AiOutlineBell className="button-icon"/>
        View Course Notifications
      </button>
      <br />
      <br />
      To Do
      <hr />
      <p class="todo">
        <a>Grade A1 - ENV + HTML</a>
        <br />
        100 pts * Sep 18 at 11:59pm
      </p>
      <br />
      Coming Up
      <div class="float-end">
        <i class="fa-regular fa-calendar"></i>
        <a>View Calendar</a>
      </div>
      <br />
      <hr />
      <p class="todo">
        <i class="fa-regular fa-calendar"></i>
        <a>Lecture</a>
        <br />
        CS4550.12631.202410
        <br />
        Sep 11 at 11:45pm
      </p>
      <p class="todo">
        <i class="fa-regular fa-calendar"></i>
        <a>CS5610 06 SP23 Lecture</a>
        <br />
        CS4550.12631.202410
        <br />
        Sep 11 at 6pm
      </p>
      <p class="todo">
        <i class="fa-regular fa-calendar"></i>
        <a>CS5610 Web Development Summer 1 2023 - LECTURE</a>
        <br />
        CS4550.12631.202410
        <br />
        Sep 11 at 7pm
      </p>
      <br />
      <a>12 more in the next week...</a>
    </div>
  );
}

export default Status;

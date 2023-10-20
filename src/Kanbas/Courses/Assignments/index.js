import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import AssignmentButtons from "./AssignmentButtons";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {PiDotsSixVerticalBold} from "react-icons/pi";
import {AiOutlinePlus} from "react-icons/ai";
import {RxPencil2} from "react-icons/rx";
import {AiFillCheckCircle} from "react-icons/ai";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <AssignmentButtons/>
      <div className="list-group">
        <ul style={{paddingLeft: "0px"}}>
          <li class="list-group-item module-title">
            Assignments
            <BiDotsVerticalRounded className="float-end"/>
            <AiOutlinePlus className="float-end"/>
            <span
              class="badge rounded-pill bg-light text-dark float-end"
              style={{ backgroundColor: "lightgrey", marginRight: "5px" }}
            >
              40% of Total
            </span>
          </li>
          {courseAssignments.map((assignment) => (
            <li className="list-group-item module" style={{marginLeft: "5px"}}>
              <PiDotsSixVerticalBold/>
              <RxPencil2 style={{color: "green", marginRight: "10px"}}/>
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="module"
              >
                {assignment.title}
              </Link>
              <BiDotsVerticalRounded className="float-end" style={{color: "#727272"}}/>
              <AiFillCheckCircle className="float-end" style={{color: "#008000", marginRight: "15px"}}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Assignments;

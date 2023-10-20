import db from "../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import { RxHamburgerMenu } from "react-icons/rx";

function Breadcrumb() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    
    return (
        <div>
        <nav className="breadcrumb-style" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
            <RxHamburgerMenu className="fs-1 text wd-kanbas-navigator-icon padding" />
            <a>{course.name}</a>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{color: "black"}}
            >
              Home
            </li>
          </ol>
        </nav>
        <hr style={{width: "500%"}}/>
      </div>
    );
}

export default Breadcrumb
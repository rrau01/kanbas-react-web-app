import { Link } from "react-router-dom";
import db from "../Database";
import blue from "./blue.webp";
import "./index.css";
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <div>
        <h2>Published Courses ({courses.length})</h2>
        <hr />
      </div>
      <div className="d-flex flex-row flex-wrap mb-4">
        {courses.map((course) => (
          <div className="card dashboard-card">
            <img className="card-photo card-img-top" src={blue} alt="..." />
            <div className="card-body">
              <p className="card-text">
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="a"
                >
                  {course.name}
                </Link>
                <br />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;

import { React, useState } from "react";
import { Link } from "react-router-dom";
import blue from "./blue.webp";
import "./index.css";
function Dashboard({courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse}) {
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <div>
        <h2>Published Courses ({courses.length})</h2>
        <hr />
      </div>
      <div className="row">
        <div className="col-sm-4" style={{paddingRight: "0px", width: "300px"}}>
          <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
        </div>
        <div className="col-sm-4" style={{paddingLeft: "0px", width: "300px"}}>
          <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
          <button onClick={ () => updateCourse(course)} className="btn btn-sm btn-primary float-end">
            {" "}
            Update{" "}
          </button>
          <button onClick={addNewCourse} className="btn btn-sm btn-success float-end">
            {" "}
            Add{" "}
          </button>
        </div>
      </div>

      <div className="d-flex flex-row flex-wrap mb-4">
        {courses.map((course) => (
          <div className="card dashboard-card">
            <img className="card-photo card-img-top" src={blue} alt="..." />
            <div className="card-body">
              <p className="card-text">
                <Link
                  key={course._id.$oid}
                  to={`/Kanbas/Courses/${course._id.$oid}`}
                  className="a"
                >
                  {course.name}
                </Link>
                <button
                  className="float-end btn-sm btn btn-danger"
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="float-end btn btn-sm btn-warning"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </button>
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

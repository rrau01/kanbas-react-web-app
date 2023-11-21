import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
function WorkingWithObjects() {
  const URL = "http://localhost:4000/a5/assignment";
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);


  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end white-text"
      >
        Update Title
      </a>
      <input
        className="form-control mb-2 w-75"
        type="text"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <a
        href={`${URL}/score/${assignment.score}`}
        className="btn btn-primary me-2 float-end white-text"
      >
        Update Score
      </a>
      <input
        className="form-control mb-2 w-75"
        type="number"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.value })
        }
      />
      <a
        href={`${URL}/completed/${assignment.completed}`}
        className="btn btn-primary me-2 float-end white-text"
      >
        Update Completion Status
      </a>
      <label className="form-control w-75 mb-2">
        Completed? 
        <input
        type="checkbox"
        value={true}
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.value })
        }
        />
      </label>
      <h4>Retrieving Objects</h4>
      <a
        href="http://localhost:4000/a5/assignment"
        className="btn btn-primary me-2 white-text"
      >
        Get Assignment
      </a>
      <button onClick={updateTitle}
              className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment}
              className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>
    </div>
  );
}
export default WorkingWithObjects;
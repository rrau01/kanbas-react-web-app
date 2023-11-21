//comment for redeploy
import db from "../../Database";
import { useParams } from "react-router-dom";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );

  return (
    <div>
      <h1>Grades</h1>
      <div class="row">
        <div class="col">Student Names</div>
        <div class="col">Assignment Names</div>
      </div>
      <div class="row" style={{paddingBottom: "10px"}}>
        <div class="col">
          <input
            type="text"
            className="form-control"
            id="name1"
            placeholder="Search Students"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            id="name1"
            placeholder="Search Assignments"
          />
        </div>
      </div>
      <div class="row" style={{paddingBottom: "10px"}}>
        <div class="col">
          <button class="btn btn-secondary">
            Apply Filters
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead style={{ backgroundColor: "lightgray" }}>
            <th>Student Name</th>
            {assignments.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;

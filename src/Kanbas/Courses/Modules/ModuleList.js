import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="row">
          <div
            className="col-sm-4"
            style={{ paddingRight: "0px", width: "300px" }}
          >
            <input
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
            <textarea
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
            />
          </div>
          <div
            className="col-sm-4"
            style={{ paddingLeft: "0px", width: "300px" }}
          >
            <div className="float-end">
            <button
            className="float-end btn-sm btn btn-success"
              onClick={() =>
                dispatch(addModule({ ...module, course: courseId }))
              }
            >
              Add
            </button>
            <button 
            className="btn-sm btn btn-primary"
            onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
            </div>
          </div>
        </div>
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <div className="float-end">
            <button
              className="float-end btn-sm btn btn-success"
              onClick={() => dispatch(setModule(module))}
            >
              Edit
            </button>
            <button
              className="btn-sm btn btn-danger"
              onClick={() => dispatch(deleteModule(module._id))}
            >
              Delete
            </button>
            </div>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
            {module.lessons &&
              module.lessons.map((lesson, index) => (
                <div key={index}>
                  <h4>{lesson.name}</h4>
                  <p>{lesson.description}</p>
                </div>
              ))}
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;

import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEdit,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  DELETE_MODULE,
  CREATE_MODULE,
  UPDATE_MODULE,
  FIND_MODULE_FOR_COURSE,
  updateModule,
  createModule,
  deleteModule,
  findModules,
} from "../actions/moduleActions";
import { Link } from "react-router-dom";

const ModuleListComponent = ({
  course,
  modules,
  deleteModule,
  createModule,
  updateModule,
  activeModule,
}) => {
  return (
    <div>
      <ul className="list-group wbdv-module-list">
        {modules.map((module) => (
          <li
            key={module._id}
            className={
              module._id === activeModule || module.editing
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {module.editing && (
              <span>
                <input
                  onChange={(event) =>
                    updateModule({ ...module, title: event.target.value })
                  }
                  value={module.title}
                />
                <button
                  onClick={() => updateModule({ ...module, editing: false })}
                  className="btn"
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                <button onClick={() => deleteModule(module)} className="btn">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </span>
            )}
            {!module.editing && (
              <span>
                <Link
                  to={`/course/edit/${course._id}/modules/${module._id}`}
                  style={module._id === activeModule ? { color: "#fff" } : null}
                >
                  {module.title}
                </Link>
                <button
                  onClick={() => updateModule({ ...module, editing: true })}
                  className="btn"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </span>
            )}
          </li>
        ))}
      </ul>
      <button
        onClick={() => createModule(course, { title: "New Module" })}
        className="btn"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

const stateToPropertyMapper = (state) => ({
  modules: state.moduleReducer.modules,
  course: state.courseReducer.course,
  activeModule: state.lessonReducer.moduleId,
});

const propertyToDispatchMapper = (dispatch) => ({
  deleteModule: (module) => deleteModule(dispatch, module),
  createModule: (course, module) => createModule(dispatch, course, module),
  updateModule: (module) => updateModule(dispatch, module),
});

export default connect(
  stateToPropertyMapper,
  propertyToDispatchMapper
)(ModuleListComponent);

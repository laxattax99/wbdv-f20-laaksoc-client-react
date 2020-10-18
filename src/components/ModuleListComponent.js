import React from "react";
import { connect } from "react-redux";
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
}) => {
  return (
    <div>
      <ul className="list-group wbdv-module-list">
        {modules.map((module) => (
          <li key={module._id}>
            <button onClick={() => deleteModule(module)}>Delete</button>
            {module.editing && (
              <span>
                <button
                  onClick={() => updateModule({ ...module, editing: false })}
                >
                  Ok
                </button>
                <input
                  onChange={(event) =>
                    updateModule({ ...module, title: event.target.value })
                  }
                  value={module.title}
                />
              </span>
            )}
            {!module.editing && (
              <span>
                <button
                  onClick={() => updateModule({ ...module, editing: true })}
                >
                  Edit
                </button>
                <Link to={`/course/edit/${course._id}/modules/${module._id}`}>
                  {module.title}
                </Link>
              </span>
            )}
          </li>
        ))}
      </ul>
      <button onClick={() => createModule(course, { title: "New Module" })}>
        Create Module
      </button>
    </div>
  );
};

const stateToPropertyMapper = (state) => ({
  modules: state.moduleReducer.modules,
  course: state.courseReducer.course,
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

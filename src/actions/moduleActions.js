import moduleService from "../services/ModuleService";
export const DELETE_MODULE = "DELETE_MODULE";
export const UPDATE_MODULE = "UPDATE_MODULE";
export const CREATE_MODULE = "CREATE_MODULE";
export const FIND_MODULE_FOR_COURSE = "FIND_MODULE_FOR_COURSE";

export const deleteModule = (dispatch, module) =>
  moduleService.deleteModule(module._id).then((statue) =>
    dispatch({
      type: DELETE_MODULE,
      module: module,
    })
  );

export const updateModule = (dispatch, module) =>
  moduleService.updateModule(module._id, module).then((status) =>
    dispatch({
      type: UPDATE_MODULE,
      module,
    })
  );

export const createModule = (dispatch, course, module) =>
  moduleService.createModuleForCourse(course._id, module).then((actualModule) =>
    dispatch({
      type: CREATE_MODULE,
      module: actualModule,
    })
  );

export const findModules = (dispatch, courseId) => {
  moduleService.findModulesForCourse(courseId).then((actualModules) =>
    dispatch({
      type: FIND_MODULE_FOR_COURSE,
      modules: actualModules,
    })
  );
};

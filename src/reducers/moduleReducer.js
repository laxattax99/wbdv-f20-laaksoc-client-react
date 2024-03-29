import {
  DELETE_MODULE,
  UPDATE_MODULE,
  CREATE_MODULE,
  FIND_MODULE_FOR_COURSE,
} from "../actions/moduleActions";

const initialState = {
  modules: [],
  module: {}
};

const moduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_MODULE_FOR_COURSE:
      return {
          ...state,
        modules: action.modules,
      };
    case CREATE_MODULE:
      return {
          ...state,
        modules: [...state.modules, action.module],
      };
    case DELETE_MODULE:
      return {
          ...state,
        modules: state.modules.filter(
          (module) => module._id !== action.module._id
        ),
      };
    case UPDATE_MODULE:
      return {
          ...state,
        modules: state.modules.map((module) =>
          module._id === action.module._id ? action.module : module
        ),
      };
    default:
      return state;
  }
};

export default moduleReducer;

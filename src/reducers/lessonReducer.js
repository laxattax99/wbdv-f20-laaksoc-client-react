import {
  DELETE_LESSON,
  UPDATE_LESSON,
  CREATE_LESSON,
  FIND_LESSON_FOR_MODULE,
} from "../actions/lessonActions";

const initialState = {
  lessons: [],
  moduleId: ""
};

const lessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_LESSON_FOR_MODULE:
      return {
          ...state,
        lessons: action.lessons,
        moduleId: action.moduleId
      };
    case CREATE_LESSON:
      return {
          ...state,
        lessons: [...state.lessons, action.lesson],
      };
    case DELETE_LESSON:
      return {
          ...state,
        lessons: state.lessons.filter(
          (lesson) => lesson._id !== action.lesson._id
        ),
      };
    case UPDATE_LESSON:
      return {
          ...state,
        lessons: state.lessons.map((lesson) =>
          lesson._id === action.lesson._id ? action.lesson : lesson
        ),
      };
    default:
      return state;
  }
};

export default lessonReducer;

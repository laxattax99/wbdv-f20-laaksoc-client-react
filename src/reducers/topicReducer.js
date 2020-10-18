import { act } from "react-dom/test-utils";
import {
  DELETE_TOPIC,
  UPDATE_TOPIC,
  CREATE_TOPIC,
  FIND_TOPICS_FOR_LESSONS,
} from "../actions/topicActions";

const initialState = {
  topics: [],
  lessonId: "",
};

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_TOPICS_FOR_LESSONS:
      return {
        ...state,
        topics: action.topics,
        lessonId: action.lessonId,
      };
    case CREATE_TOPIC:
      return {
        ...state,
        topics: [...state.topics, action.topic],
      };
    case DELETE_TOPIC:
      return {
        ...state,
        topics: state.topics.filter((topic) => topic._id !== action.topic._id),
      };
    case UPDATE_TOPIC:
      return {
        ...state,
        topics: state.topics.map((topic) =>
          topic._id === action.topic._id ? action.topic : topic
        ),
      };
    default:
      return state;
  }
};

export default topicReducer;

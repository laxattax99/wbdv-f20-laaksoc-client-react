import {
    DELETE_TOPIC,
    UPDATE_TOPIC,
    CREATE_TOPIC,
    FIND_TOPICS_FOR_LESSONS,
  } from "../actions/topicActions";
  
  const initialState = {
    topics: [],
  };
  
  const topicReducer = (state = initialState, action) => {
    switch (action.type) {
      case FIND_TOPICS_FOR_LESSONS:
        return {
          topics: action.topics,
        };
      case CREATE_TOPIC:
        return {
          topics: [...state.topics, action.topics],
        };
      case DELETE_TOPIC:
        return {
          topics: state.topics.filter(
            (topic) => topic._id !== action.topic._id
          ),
        };
      case UPDATE_TOPIC:
        return {
          topics: state.topics.map((topic) =>
            topic._id === action.topic._id ? action.topic : topic
          ),
        };
      default:
        return state;
    }
  };
  
  export default topicReducer;
  
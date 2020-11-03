import {
  DELETE_WIDGET,
  UPDATE_WIDGET,
  CREATE_WIDGET,
  FIND_WIDGETS_FOR_TOPIC,
  TOGGLE_PREVIEW_MODE,
} from "../actions/widgetActions";

const initialState = {
  widgets: [],
  topicId: "",
  previewMode: true,
};

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_WIDGETS_FOR_TOPIC:
      return {
        ...state,
        widgets: action.widgets,
        topicId: action.topicId,
      };
    case CREATE_WIDGET:
      return {
        ...state,
        widgets: [...state.widgets, action.widget],
      };
    case DELETE_WIDGET:
      return {
        ...state,
        widgets: state.widgets.filter(
          (widget) => widget.id !== action.widget.id
        ),
      };
    case UPDATE_WIDGET:
      return {
        ...state,
        widgets: state.widgets.map((widget) =>
          widget.id === action.widget.id ? action.widget : widget
        ),
      };
    case TOGGLE_PREVIEW_MODE:
      return {
        ...state,
        previewMode: action.previewMode,
      };
    default:
      return state;
  }
};

export default widgetReducer;

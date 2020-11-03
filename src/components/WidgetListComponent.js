import React from "react";
import { connect } from "react-redux";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";
import {
  DELETE_WIDGET,
  CREATE_WIDGET,
  UPDATE_WIDGET,
  FIND_WIDGETS_FOR_TOPIC,
  updateWidget,
  createWidget,
  deleteWidget,
  findWidgetsForTopic,
} from "../actions/widgetActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const WidgetListComponent = ({
  widgets = [],
  topicId,
  createWidgetForTopic,
  updateWidget,
  deleteWidget,
}) => {
  const handleWidgetChange = (event, widgetToChange) => {
    updateWidget({ ...widgetToChange, type: event.target.value });
  };

  const switchWidgets = (widgetOrder1, widgetOrder2) => {
    const widget1 = widgets[widgetOrder1];
    console.log(widgetOrder2);
    widget1.widgetOrder++;
    const widget2 = widgets[widgetOrder2];
    widget2.widgetOrder--;
    updateWidget(widget1);
    updateWidget(widget2);
  };

  const moveWidgetUp = (widget) => {
    switchWidgets(widget.widgetOrder - 1, widget.widgetOrder);
  };

  const moveWidgetDown = (widget) => {
    switchWidgets(widget.widgetOrder, widget.widgetOrder + 1);
  };

  const compareWidgets = (widget1, widget2) => {
    if (widget1.widgetOrder < widget2.widgetOrder) {
      return -1;
    }
    if (widget1.widgetOrder > widget2.widgetOrder) {
      return 1;
    }
    return 0;
  };

  const previewMode = () => {
    console.log('preview')
  }

  widgets.sort(compareWidgets);

  return (
    <div className="container">
      <h3>Widgets</h3>
      <div className="custom-control custom-switch">
        <input
        onClick ={() => previewMode()}
          type="checkbox"
          className="custom-control-input"
          id="previewSwitch"
        ></input>
        <label className="custom-control-label" htmlFor="previewSwitch">
          Preview
        </label>
      </div>
      <ul className="nav">
        {widgets.map((widget) => (
          <li key={widget.id}>
            {widget.type === "HEADING" && (
              <HeadingWidgetComponent
                handleWidgetChange={(event) =>
                  handleWidgetChange(event, widget)
                }
                widget={widget}
                updateWidget={updateWidget}
                deleteWidget={deleteWidget}
                moveWidgetUp={() => moveWidgetUp(widget)}
                moveWidgetDown={() => moveWidgetDown(widget)}
                numberOfWidgets={widgets.length}
              />
            )}
            {widget.type === "PARAGRAPH" && (
              <ParagraphWidgetComponent
                handleWidgetChange={(event) =>
                  handleWidgetChange(event, widget)
                }
                widget={widget}
                updateWidget={updateWidget}
                deleteWidget={deleteWidget}
                moveWidgetUp={() => moveWidgetUp(widget)}
                moveWidgetDown={() => moveWidgetDown(widget)}
                numberOfWidgets={widgets.length}
              />
            )}
          </li>
        ))}
      </ul>
      <button
        className="btn btn-primary"
        onClick={() => createWidgetForTopic(topicId)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

const stateToPropertyMapper = (state) => ({
  widgets: state.widgetReducer.widgets,
  topicId: state.widgetReducer.topicId,
});
const propertyToDispatchMapper = (dispatch) => ({
  createWidgetForTopic: (topicId) =>
    createWidget(dispatch, topicId, {
      name: "NEW WIDGET",
      type: "PARAGRAPH",
    }),
  updateWidget: (widget) => updateWidget(dispatch, widget),
  deleteWidget: (widget) => deleteWidget(dispatch, widget),
});
export default connect(
  stateToPropertyMapper,
  propertyToDispatchMapper
)(WidgetListComponent);

import React from "react";
import { connect } from "react-redux";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";
import ListWidgetComponent from "./ListWidgetComponent";
import ImageWidgetComponent from "./ImageWidgetComponent";
import {
  DELETE_WIDGET,
  CREATE_WIDGET,
  UPDATE_WIDGET,
  FIND_WIDGETS_FOR_TOPIC,
  TOGGLE_PREVIEW_MODE,
  updateWidget,
  createWidget,
  deleteWidget,
  findWidgetsForTopic,
  togglePreviewMode,
  updateAllWidgets,
} from "../actions/widgetActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const WidgetListComponent = ({
  widgets = [],
  topicId,
  createWidgetForTopic,
  updateWidget,
  deleteWidget,
  previewMode,
  togglePreviewMode,
  updateAllWidgets,
}) => {
  const handleWidgetChange = (event, widgetToChange) => {
    const style = event.target.value === "LIST" ? "ul" : null; 
    updateWidget({ ...widgetToChange, type: event.target.value, style: style });
  };

  const switchWidgets = (widgetOrder1, widgetOrder2) => {
    const widget1 = widgets[widgetOrder1];
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

  // updates widgets if widget was removed from the list, then updates the list of widgets on the server
  const updatedWidgetsAfterRemoval = (widgets, widget) => {
    widgets.map((currentWidget) => {
      if (currentWidget.widgetOrder > widget.widgetOrder) {
        currentWidget.widgetOrder--;
        return currentWidget;
      }
    });
    const returnWidgets = widgets.filter(
      (currentWidget) => currentWidget.id !== widget.id
    );
    updateAllWidgets(returnWidgets);
  };

  widgets.sort(compareWidgets);
  return (
    <div className="container">
      <h3>Widgets</h3>

      <span
        className="form-inline"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
          alignItems: "center",
          margin: "16px",
        }}
      >
        <div className="custom-control custom-switch">
          <input
            onClick={() => togglePreviewMode(previewMode)}
            type="checkbox"
            className="custom-control-input"
            id="previewSwitch"
            defaultChecked
          ></input>
          <label className="custom-control-label" htmlFor="previewSwitch">
            Preview
          </label>
        </div>
        <button
          onClick={() => updateAllWidgets(widgets)}
          className="btn btn-success"
        >
          Save
        </button>
      </span>

      {widgets.map((widget) => (
        <div key={widget.id}>
          {widget.type === "HEADING" && (
            <HeadingWidgetComponent
              handleWidgetChange={(event) => handleWidgetChange(event, widget)}
              widget={widget}
              updateWidget={updateWidget}
              deleteWidget={deleteWidget}
              moveWidgetUp={() => moveWidgetUp(widget)}
              moveWidgetDown={() => moveWidgetDown(widget)}
              numberOfWidgets={widgets.length}
              previewMode={previewMode}
              updatedWidgetsAfterRemoval={() =>
                updatedWidgetsAfterRemoval(widgets, widget)
              }
            />
          )}
          {widget.type === "PARAGRAPH" && (
            <ParagraphWidgetComponent
              handleWidgetChange={(event) => handleWidgetChange(event, widget)}
              widget={widget}
              updateWidget={updateWidget}
              deleteWidget={deleteWidget}
              moveWidgetUp={() => moveWidgetUp(widget)}
              moveWidgetDown={() => moveWidgetDown(widget)}
              numberOfWidgets={widgets.length}
              previewMode={previewMode}
              updatedWidgetsAfterRemoval={() =>
                updatedWidgetsAfterRemoval(widgets, widget)
              }
            />
          )}
          {widget.type === "LIST" && (
            <ListWidgetComponent
              handleWidgetChange={(event) => handleWidgetChange(event, widget)}
              widget={widget}
              updateWidget={updateWidget}
              deleteWidget={deleteWidget}
              moveWidgetUp={() => moveWidgetUp(widget)}
              moveWidgetDown={() => moveWidgetDown(widget)}
              numberOfWidgets={widgets.length}
              previewMode={previewMode}
              updatedWidgetsAfterRemoval={() =>
                updatedWidgetsAfterRemoval(widgets, widget)
              }
            />
          )}
          {widget.type === "IMAGE" && (
            <ImageWidgetComponent
              handleWidgetChange={(event) => handleWidgetChange(event, widget)}
              widget={widget}
              updateWidget={updateWidget}
              deleteWidget={deleteWidget}
              moveWidgetUp={() => moveWidgetUp(widget)}
              moveWidgetDown={() => moveWidgetDown(widget)}
              numberOfWidgets={widgets.length}
              previewMode={previewMode}
              updatedWidgetsAfterRemoval={() =>
                updatedWidgetsAfterRemoval(widgets, widget)
              }
            />
          )}
        </div>
      ))}
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
  previewMode: state.widgetReducer.previewMode,
});
const propertyToDispatchMapper = (dispatch) => ({
  createWidgetForTopic: (topicId) =>
    createWidget(dispatch, topicId, {
      name: "NEW WIDGET",
      type: "HEADING",
      size: 1,
    }),
  updateWidget: (widget) => updateWidget(dispatch, widget),
  deleteWidget: (widget) => deleteWidget(dispatch, widget),
  togglePreviewMode: (currentMode) => togglePreviewMode(dispatch, currentMode),
  updateAllWidgets: (widgets) => updateAllWidgets(dispatch, widgets),
});
export default connect(
  stateToPropertyMapper,
  propertyToDispatchMapper
)(WidgetListComponent);

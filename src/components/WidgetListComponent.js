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

const WidgetListComponent = ({
  widgets = [],
  topicId,
  createWidgetForTopic,
  updateWidget,
}) => (
  <div className="container">
    <h3>Widgets</h3>
    <ul>
      {widgets.map((widget) => (
        <li key={widget.id}>
          {widget.type === "HEADING" && (
            <HeadingWidgetComponent widget={widget} updateWidget={updateWidget} />
          )}
          {widget.type === "PARAGRAPH" && (
            <ParagraphWidgetComponent widget={widget} updateWidget={updateWidget} />
          )}
        </li>
      ))}
    </ul>
    <button onClick={() => createWidgetForTopic(topicId)}>Create</button>
  </div>
);

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
});
export default connect(
  stateToPropertyMapper,
  propertyToDispatchMapper
)(WidgetListComponent);

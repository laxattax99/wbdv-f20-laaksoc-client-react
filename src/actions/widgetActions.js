import widgetService from "../services/WidgetService";
export const DELETE_WIDGET = "DELETE_WIDGET";
export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const CREATE_WIDGET = "CREATE_WIDGET";
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC";

export const deleteWidget = (dispatch, widget) =>
  widgetService.deleteWidget(widget.id).then((status) =>
    dispatch({
      type: DELETE_WIDGET,
      widget: widget,
    })
  );

export const updateWidget = (dispatch, widget) => {
  widgetService.updateWidget(widget.id, widget).then((status) =>
    dispatch({
      type: UPDATE_WIDGET,
      widget,
    })
  );
};

export const createWidget = (dispatch, topicId, widget) =>
  widgetService.createWidget(topicId, widget).then((actualWidget) =>
    dispatch({
      type: CREATE_WIDGET,
      widget: actualWidget,
    })
  );

export const findWidgetsForTopic = (dispatch, topicId) => {
  widgetService.findWidgetsForTopic(topicId).then((actualWidgets) =>
    dispatch({
      type: FIND_WIDGETS_FOR_TOPIC,
      widgets: actualWidgets,
      topicId: topicId,
    })
  );
};
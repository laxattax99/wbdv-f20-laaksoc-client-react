import widgetService from "../services/WidgetService";
export const DELETE_WIDGET = "DELETE_WIDGET";
export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const CREATE_WIDGET = "CREATE_WIDGET";
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC";
export const TOGGLE_PREVIEW_MODE = "TOGGLE_PREVIEW_MODE";

export const deleteWidget = (dispatch, widget) =>
  widgetService.deleteWidget(widget.id).then((status) =>
    dispatch({
      type: DELETE_WIDGET,
      widget: widget,
    })
  );

export const updateWidget = (dispatch, widget) => {
  dispatch({
    type: UPDATE_WIDGET,
    widget,
  });
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

export const togglePreviewMode = (dispatch, currentPreviewMode) => {
  return dispatch({
    type: TOGGLE_PREVIEW_MODE,
    previewMode: !currentPreviewMode,
  });
};

export const updateAllWidgets = (dispatch, widgets) => {
  widgets.map((widget) =>
    widgetService.updateWidget(widget.id, widget).then((actualWidget) => {
      dispatch({
        type: UPDATE_WIDGET,
        widget: actualWidget,
      });
    })
  );
};

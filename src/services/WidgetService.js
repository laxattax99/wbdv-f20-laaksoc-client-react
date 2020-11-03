const widgetsUrl = "https://wbdv-f19-laaksoc-server-java.herokuapp.com/api/widgets";

const topicsUrl = "https://wbdv-f19-laaksoc-server-java.herokuapp.com/api/topics";

export const createWidget = (topicId, widget) => {
  return fetch(`${topicsUrl}/${topicId}/widgets`, {
    method: "POST",
    body: JSON.stringify(widget),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const findWidgetsForTopic = (topicId) => {
  return fetch(`${topicsUrl}/${topicId}/widgets`).then((response) =>
    response.json()
  );
};

export const findWidgetById = (widgetId) => {
  return fetch(`${widgetsUrl}/${widgetId}`).then((response) => response.json);
};

export const updateWidget = (widgetId, widget) => {
  return fetch(`${widgetsUrl}/${widgetId}`, {
    method: "PUT",
    body: JSON.stringify(widget),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const deleteWidget = (widgetId) => {
  return fetch(`${widgetsUrl}/${widgetId}`, {
    method: "DELETE",
  }).then((response) => response.json());
};

export default {
  createWidget,
  findWidgetsForTopic,
  findWidgetById,
  updateWidget,
  deleteWidget,
};

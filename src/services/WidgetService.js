const widgetsUrl = "http://localhost:8080/api/widgets";

const topicsUrl = "http://localhost:8080/api/topics";

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
  }).then();
};

export default {
  createWidget,
  findWidgetsForTopic,
  findWidgetById,
  updateWidget,
  deleteWidget,
};

const lessonsUrl =
  "https://wbdv-generic-server.herokuapp.com/api/laaksoc/lessons";

const topicsUrl =
  "https://wbdv-generic-server.herokuapp.com/api/laaksoc/topics";

export const createTopic = (lessonId, topic) => {
  return fetch(`${lessonsUrl}/${lessonId}/topics`, {
    method: "POST",
    body: JSON.stringify(topic),
    headers: {
      "content-type": "application/json",
    },
  }).then(response => response.json());
};

export const findTopicsForLesson = (lessonId) => {
  return fetch(`${lessonsUrl}/${lessonId}/topics`).then(response => response.json());
};

export const findTopic = (topicId) => {
  return fetch(`${topicsUrl}/${topicId}`).then(response => response.json);
};

export const updateTopic = (topicId, topic) => {
  return fetch(`${topicsUrl}/${topicId}`, {
    method: "PUT",
    body: JSON.stringify(topic),
    headers: {
      "content-type": "application/json",
    },
  }).then(response => response.json());
};

export const deleteTopic = (topicId) => {
  return fetch(`${topicsUrl}/${topicId}`, {
    method: "DELETE",
  }).then(response => response.json());
};

export default {
  createTopic,
  findTopicsForLesson,
  findTopic,
  updateTopic,
  deleteTopic,
};
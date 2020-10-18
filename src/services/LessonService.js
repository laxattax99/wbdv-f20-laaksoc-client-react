const modulesUrl =
  "https://wbdv-generic-server.herokuapp.com/api/laaksoc/modules";

const lessonsUrl =
  "https://wbdv-generic-server.herokuapp.com/api/laaksoc/lessons";

export const createLesson = (moduleId, lesson) => {
  return fetch(`${modulesUrl}/${moduleId}/lessons`, {
    method: "POST",
    body: JSON.stringify(lesson),
    headers: {
      "content-type": "application/json",
    },
  }).then(response => response.json());
};

export const findLessonsForModule = (moduleId) => {
  return fetch(`${modulesUrl}/${moduleId}/lessons`).then(response => response.json());
};

export const findLesson = (lessonId) => {
  return fetch(`${lessonsUrl}/${lessonId}`).then(response => response.json);
};

export const updateLesson = (lessonId, lesson) => {
  return fetch(`${lessonsUrl}/${lessonId}`, {
    method: "PUT",
    body: JSON.stringify(lesson),
    headers: {
      "content-type": "application/json",
    },
  }).then(response => response.json());
};

export const deleteLesson = (lessonId) => {
  return fetch(`${lessonsUrl}/${lessonId}`, {
    method: "DELETE",
  }).then(response => response.json());
};

export default {
  createLesson,
  findLessonsForModule,
  findLesson,
  updateLesson,
  deleteLesson,
};
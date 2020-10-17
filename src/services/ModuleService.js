const coursesUrl =
  "https://wbdv-generic-server.herokuapp.com/api/laaksoc/courses";

const modulesUrl =
  "https://wbdv-generic-server.herokuapp.com/api/laaksoc/modules";

export const createModule = (courseId, module) => {
  return fetch(`${coursesUrl}/${courseId}/modules`, {
    method: "POST",
    body: JSON.stringify(module),
    headers: {
      "content-type": "application/json",
    },
  }).then((response = response.json()));
};

export const findModulesForCourse = (courseId) => {
  return fetch(`${coursesUrl}/${courseId}/modules`).then((response = response.json()));
};

export const findModule = (moduleId) => {
  return fetch(`${modulesUrl}/${moduleId}`).then((response = response.json));
};

export const updateModule = (moduleId, module) => {
  return fetch(`${modulesUrl}/${moduleId}`, {
    method: "PUT",
    body: JSON.stringify(module),
    headers: {
      "content-type": "application/json",
    },
  }).then((response = response.json()));
};

export const deleteModule = (moduleId) => {
  return fetch(`${modulesUrl}/${moduleId}`, {
    method: "DELETE",
  }).then((response = response.json()));
};

export default {
  createModule,
  findModulesForCourse,
  findModule,
  updateModule,
  deleteModule,
};

import lessonService from "../services/LessonService";
export const DELETE_LESSON = "DELETE_LESSON";
export const UPDATE_LESSON = "UPDATE_LESSON";
export const CREATE_LESSON = "CREATE_LESSON";
export const FIND_LESSON_FOR_MODULE = "FIND_LESSON_FOR_MODULE";

export const deleteLesson = (dispatch, lesson) =>
  lessonService.deleteLesson(lesson._id).then((status) =>
    dispatch({
      type: DELETE_LESSON,
      lesson: lesson,
    })
  );

export const updateLesson = (dispatch, lesson) =>
  lessonService.updateLesson(lesson._id, lesson).then((status) =>
    dispatch({
      type: UPDATE_LESSON,
      lesson,
    })
  );

export const createModule = (dispatch, module, lesson) =>
  lessonService.createLesson(module._id, lesson).then((actualLesson) =>
    dispatch({
      type: CREATE_LESSON,
      lesson: actualLesson,
    })
  );

export const findLessons = (dispatch, moduleId) => {
  lessonService.findLessonsForModule(moduleId).then((actualLessons) =>
    dispatch({
      type: FIND_LESSON_FOR_MODULE,
      lessons: actualLessons,
    })
  );
};

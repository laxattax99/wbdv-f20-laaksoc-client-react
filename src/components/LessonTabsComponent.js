import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  updateLesson,
  createLesson,
  deleteLesson,
  findLessons,
} from "../actions/lessonActions";
import {Link} from "react-router-dom";

const LessonTabsComponent = ({
  course,
  moduleId,
  lessons,
  deleteLesson,
  createLesson,
  updateLesson,
}) => {
  return (
    <ul class="nav nav-tabs wbdv-lesson-tabs">
      {lessons.map((lesson) => (
        <li key={lesson._id}>
          <button onClick={() => deleteLesson(lesson)}>Delete</button>
          {lesson.editing && (
            <span>
              <button
                onClick={() => updateLesson({ ...lesson, editing: false })}
              >
                Ok
              </button>
              <input
                onChange={(event) =>
                  updateLesson({ ...lesson, title: event.target.value })
                }
                value={lesson.title}
              />
            </span>
          )}
          {!lesson.editing && (
            <span>
              <button
                onClick={() => updateLesson({ ...lesson, editing: true })}
              >
                Edit
              </button>
              <Link to={`/course/edit/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}>
                {lesson.title}
              </Link>
            </span>
          )}
        </li>
      ))}
      <li class="nav-item">
        <button onClick={() => createLesson(moduleId, { title: "New lesson" })} className="nav-link wbdv-lesson-add-btn btn btn-success">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </li>
    </ul>
  );
};

const stateToPropertyMapper = (state) => ({
  lessons: state.lessonReducer.lessons,
  course: state.courseReducer.course,
  moduleId: state.lessonReducer.moduleId
});

const propertyToDispatchMapper = (dispatch) => ({
  deleteLesson: (lesson) => deleteLesson(dispatch, lesson),
  createLesson: (moduleId, lesson) => createLesson(dispatch, moduleId, lesson),
  updateLesson: (lesson) => updateLesson(dispatch, lesson),
});

export default connect(
  stateToPropertyMapper,
  propertyToDispatchMapper
)(LessonTabsComponent);

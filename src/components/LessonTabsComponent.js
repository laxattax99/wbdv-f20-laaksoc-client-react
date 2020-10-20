import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEdit,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  updateLesson,
  createLesson,
  deleteLesson,
  findLessons,
} from "../actions/lessonActions";
import { Link } from "react-router-dom";

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
        <li key={lesson._id} className="nav-item">
          {lesson.editing && (
            <span>
              <input
                onChange={(event) =>
                  updateLesson({ ...lesson, title: event.target.value })
                }
                value={lesson.title}
              />
              <button
                onClick={() => updateLesson({ ...lesson, editing: false })}
                className="btn"
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </span>
          )}
          {!lesson.editing && (
            <span>
              <Link
                to={`/course/edit/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}
              >
                {lesson.title}
              </Link>
              <button
                onClick={() => updateLesson({ ...lesson, editing: true })}
                className="btn"
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </span>
          )}
          <button onClick={() => deleteLesson(lesson)} className="btn">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </li>
      ))}
      <li class="nav-item">
        <button
          onClick={() => createLesson(moduleId, { title: "New lesson" })}
          className="nav-link btn btn-success"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </li>
    </ul>
  );
};

const stateToPropertyMapper = (state) => ({
  lessons: state.lessonReducer.lessons,
  course: state.courseReducer.course,
  moduleId: state.lessonReducer.moduleId,
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

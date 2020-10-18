import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  updateTopic,
  createTopic,
  deleteTopic,
  findTopics,
} from "../actions/topicActions";
import {Link} from "react-router-dom";
import { updateLesson } from "../services/LessonService";

const TopicPillsComponent = ({
  course,
  moduleId,
  lessonId,
  topics,
  deleteTopic,
  createTopic,
  updateTopic,
}) => {
  return (
    <ul class="nav nav-pills wbdv-topic-pill-list">
      {topics.map((topic) => (
        <li>
          <button onClick={() => deleteTopic(topic)}>Delete</button>
          {topic.editing && (
            <span>
              <button
                onClick={() => updateTopic({ ...topic, editing: false })}
              >
                Ok
              </button>
              <input
                onChange={(event) =>
                  updateTopic({ ...topic, title: event.target.value })
                }
                value={topic.title}
              />
            </span>
          )}
          {!topic.editing && (
            <span>
              <button
                onClick={() => updateTopic({ ...topic, editing: true })}
              >
                Edit
              </button>
              <Link to={`/course/edit/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}>
                {topic.title}
              </Link>
            </span>
          )}
        </li>
      ))}
      <li class="nav-item">
        <button onClick={() => createTopic(lessonId, { title: "New topic" })} className="nav-link wbdv-lesson-add-btn btn btn-success">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </li>
    </ul>
  );
};

const stateToPropertyMapper = (state) => ({
  topics: state.topicReducer.topics,
  course: state.courseReducer.course,
  moduleId: state.lessonReducer.moduleId,
  lessonId: state.topicReducer.lessonId
});

const propertyToDispatchMapper = (dispatch) => ({
  deleteTopic: (topic) => deleteTopic(dispatch, topic),
  createTopic: (lessonId, topic) => createTopic(dispatch, lessonId, topic),
  updateTopic: (topic) => updateTopic(dispatch, topic),
});

export default connect(
  stateToPropertyMapper,
  propertyToDispatchMapper
)(TopicPillsComponent);

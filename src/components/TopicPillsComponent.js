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
  updateTopic,
  createTopic,
  deleteTopic,
  findTopics,
} from "../actions/topicActions";
import { Link } from "react-router-dom";
import { updateLesson } from "../services/LessonService";

const TopicPillsComponent = ({
  course,
  moduleId,
  lessonId,
  topics,
  deleteTopic,
  createTopic,
  updateTopic,
  activeTopic,
}) => {
  return (
    <ul className="nav nav-pills wbdv-topic-pill-list">
      {topics.map((topic) => (
        <li key={topic._id} style={topic._id === activeTopic._id ? {backgroundColor: '#007bff'} : null}>
          {topic.editing && (
            <span>
              <input
                onChange={(event) =>
                  updateTopic({ ...topic, title: event.target.value })
                }
                value={topic.title}
              />
              <button onClick={() => updateTopic({ ...topic, editing: false })} className="btn">
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </span>
          )}
          {!topic.editing && (
            <span>
              <Link
                to={`/course/edit/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                style={topic._id === activeTopic._id ? { color: "#fff" } : null}
              >
                {topic.title}
              </Link>
              <button onClick={() => updateTopic({ ...topic, editing: true })} className="btn">
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </span>
          )}
          <button onClick={() => deleteTopic(topic)} className="btn">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </li>
      ))}
      <li className="nav-item">
        <button
          onClick={() => createTopic(lessonId, { title: "New topic" })}
          className="nav-link wbdv-lesson-add-btn btn btn-success"
        >
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
  lessonId: state.topicReducer.lessonId,
  activeTopic: state.topicReducer.topic
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

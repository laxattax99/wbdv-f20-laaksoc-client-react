import React from "react";
import LessonTabsComponent from "./LessonTabsComponent";
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { findCourseById } from "../services/CourseService";
import lessonService from "../services/LessonService";
import moduleService from "../services/ModuleService";
import { findModules, createModule, updateModule } from "../actions/moduleActions.js";
import {findLessons} from "../actions/lessonActions.js";
import {findTopics, findTopic} from "../actions/topicActions.js";
import {connect} from "react-redux";

class CourseEditorComponent extends React.Component {
  state = {
    course: {},
  };

  // componentDidMount() {
  //   const courseId = this.props.match.params.courseId;
  //   findCourseById(courseId).then((course) => {
  //     this.setState({ course: course });
  //   });
  // }

  componentDidMount() {
    const courseId = this.props.match.params.courseId
    const moduleId = this.props.match.params.moduleId
    const lessonId = this.props.match.params.lessonId
    const topicId = this.props.match.params.topicId
    console.log(topicId)
    this.props.findCourseById(courseId)
    this.props.findModulesForCourse(courseId)
    if(moduleId) {
      this.props.findLessonsForModule(moduleId)
    }
    if(lessonId) {
      this.props.findTopicsForLesson(lessonId)
    }
    if(topicId) {
      this.props.findTopic(topicId)
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const moduleId = this.props.match.params.moduleId
    const previousModuleId = prevProps.match.params.moduleId
    if(moduleId !== previousModuleId) {
      this.props.findLessonsForModule(moduleId)
    }
    const lessonId = this.props.match.params.lessonId
    const previousLessonId = prevProps.match.params.lessonId
    if(lessonId !== previousLessonId){
      this.props.findTopicsForLesson(lessonId)
    }
    const topicId = this.props.match.params.topicId
    const previousTopicId = prevProps.match.params.topicId
    if(topicId !== previousTopicId){
      this.props.findTopic(topicId)
    }
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="wbdv-course-title">
          <Link to="/course/table/">
            <FontAwesomeIcon icon={faTimes} />
          </Link>
          {this.props.course.title}
        </h1>
        <div className="row">
          <div className="col-4">
            <ModuleListComponent />
          </div>
          <div className="col-8">
            <LessonTabsComponent />
            <br />
            <TopicPillsComponent />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

const stateToProperty = (state) => ({
  course: state.courseReducer.course,
});
const propertyToDispatchMapper = (dispatch) => ({
  findLessonsForModule: (moduleId) => findLessons(dispatch, moduleId),
  findModulesForCourse: (courseId) => findModules(dispatch, courseId),
  findTopicsForLesson: (lessonId) => findTopics(dispatch, lessonId),
  findTopic: (topicId) => findTopic(dispatch, topicId),
  findCourseById: (courseId) =>
    findCourseById(courseId).then((actualCourse) =>
      dispatch({
        type: "FIND_COURSE_BY_ID",
        course: actualCourse,
      })
    ),
});

export default connect(stateToProperty, propertyToDispatchMapper)(CourseEditorComponent);

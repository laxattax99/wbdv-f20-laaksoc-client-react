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
    this.props.findCourseById(courseId)
    this.props.findModulesForCourse(courseId)
    if(moduleId) {
      this.props.findLessonsForModule(moduleId)
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const moduleId = this.props.match.params.moduleId
    const previousModuleId = prevProps.match.params.moduleId
    if(moduleId !== previousModuleId) {
      this.props.findLessonsForModule(moduleId)
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
        <div class="row">
          <div class="col-4">
            <ModuleListComponent />
          </div>
          <div class="col-8">
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
  findCourseById: (courseId) =>
    findCourseById(courseId).then((actualCourse) =>
      dispatch({
        type: "FIND_COURSE_BY_ID",
        course: actualCourse,
      })
    ),
});

export default connect(stateToProperty, propertyToDispatchMapper)(CourseEditorComponent);

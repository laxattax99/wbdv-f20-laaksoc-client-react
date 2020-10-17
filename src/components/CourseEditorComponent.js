import React from "react";
import LessonTabsComponent from "./LessonTabsComponent";
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { findCourseById } from "../services/CourseService";

class CourseEditorComponent extends React.Component {
  state = {
    course: {},
  };

  componentDidMount() {
    const courseId = this.props.match.params.courseId;
    findCourseById(courseId).then((course) => {
      this.setState({course: course})
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="wbdv-course-title">
          <Link to="/course/table/">
            <FontAwesomeIcon icon={faTimes} />
          </Link>
          {this.state.course.title}
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

export default CourseEditorComponent;

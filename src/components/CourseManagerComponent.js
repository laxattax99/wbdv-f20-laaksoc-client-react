import React from "react";
// import courseService from "../services/CourseService";
import {findAllCourses, createCourse, deleteCourse} from '../services/CourseService'
import CourseTableComponent from "./CourseTableComponent";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import CourseGridComponent from "./CourseGridComponent";
import CourseEditorComponent from "./CourseEditorComponent";

class CourseManagerComponent extends React.Component {
  state = {
    courses: [],
  };

  componentDidMount() {
  this.getCourses();
  }

  getCourses =() => {
    findAllCourses().then((courses) => 
    this.setState({courses: courses})
    );
  }

  createCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "me",
      lastUpdated: "yesterday",
    };


    
      createCourse(newCourse)
      .then((actualCourse) =>
        this.setState(function (prevState) {
          return {
            courses: [...prevState.courses, actualCourse],
          };
        })
      )
      .catch((error) => {});
  };

  deleteCourse = (course) => {
    deleteCourse(course._id).then((statu) =>
      this.setState((prevState) => ({
        courses: prevState.courses.filter((c) => c._id !== course._id),
      }))
    );
  };

  render() {
    const { courses } = this.state
    return (
      <div className="container-fluid">
        <Router>
            {/* <Link to="/course/table">Table</Link> |
            <Link to="/course/grid">Grid</Link> */}
            <Route exact path='/'>
              <Redirect to='/course/table'/>
            </Route>
            {console.log('render', this.state.courses)}
            <Route
              path="/course/table"
              render={() => 
                <CourseTableComponent 
                courses={this.state.courses}
                deleteCourse={this.deleteCourse}
                createCourse={this.createCourse} />
              }
            />
            <Route
              path="/course/grid"
              render={() => (
                <CourseGridComponent 
                courses={this.state.courses}
                deleteCourse={this.deleteCourse}
                createCourse={this.createCourse} />
              )}
            />
            <Route
            path={["/course/edit/:courseId",
          "/course/edit/:courseId/modules/:moduleId",
        "/course/edit/:courseId/modules/:moduleId/lessons/:lessonId"]}
            exact component={CourseEditorComponent}
            />
        </Router>
      </div>
    );
  }
}

export default CourseManagerComponent;

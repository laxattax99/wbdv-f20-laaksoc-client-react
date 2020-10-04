import React from "react";
import courseService from "../services/CourseService";
import CourseTableComponent from "./CourseTableComponent";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CourseGridComponent from "./CourseGridComponent";

class CourseManagerComponent extends React.Component {
  state = {
    tableView: false,
    courses: [],
  };

  componentDidMount() {
    courseService.findAllCourses().then((courses) =>
      this.setState({
        courses: courses,
      })
    );
  }

  createCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "me",
      lastUpdated: "yesterday",
    };

    // UNSAFE:
    // const newState = {
    //   courses: [
    //     ...this.state.courses, newCourse
    //   ]
    // }
    //
    // this.setState(newState)

    // SAFE:

    courseService
      .createCourse(newCourse)
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
    courseService.deleteCourse(course._id).then((statu) =>
      this.setState((prevState) => ({
        courses: prevState.courses.filter((c) => c._id !== course._id),
      }))
    );
  };

  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light bg-light fixed-top">
          <span>
            <button
              className="navbar-toggler wbdv-field wbdv-hamburger"
              type="button"
              data-toggle="collapse"
              data-target="#collapsingNavbar1"
            >
              ☰
            </button>
            <a className="navbar-brand wbdv-label wbdv-course-manager" href="#">
              Course Manager
            </a>
          </span>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2 wbdv-field wbdv-new-course"
              type="search"
              placeholder="New Course Title"
              aria-label="Search"
            />
            <button
              onClick={this.createCourse}
              className="btn btn-outline-success my-2 my-sm-0 wbdv-button wbdv-add-course"
            >
              Add Course
            </button>
          </form>
          <div className="navbar-collapse collapse" id="collapsingNavbar1">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <br/>
        <Router>
          <div>
            <Link to="/course/table">Table</Link> |
            <Link to="/course/grid">Grid</Link>
            <Route
              path="/course/table"
              render={() => (
                <CourseTableComponent 
                courses={this.state.courses}
                deleteCourse={this.deleteCourse} />
              )}
            />
            <Route
              path="/course/grid"
              render={() => (
                <CourseGridComponent 
                courses={this.state.courses}
                deleteCourse={this.deleteCourse} />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default CourseManagerComponent;

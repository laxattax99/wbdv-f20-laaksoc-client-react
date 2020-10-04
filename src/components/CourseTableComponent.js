import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import courseService from "../services/CourseService";

class CourseTableComponent extends React.Component {

    state = {
        courses: this.props.courses
    };

    constructor(props){
        super(props)
    }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {this.state.courses.map((course) => (
            <CourseRowComponent
              key={course._id}
              deleteCourse={this.props.deleteCourse}
              course={course}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default CourseTableComponent
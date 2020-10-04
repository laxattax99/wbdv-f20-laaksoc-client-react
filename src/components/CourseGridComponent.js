import React from "react";
import { Link } from "react-router-dom";
import CourseCardComponent from "./CourseCardComponent"

class CourseGridComponent extends React.Component {
  state = {
      courses: this.props.courses
  };

  render() {
    return (
        <div className="card-deck">
        {  this.state.courses.map((course) =>
             <CourseCardComponent 
             course={course}
             key={course.id}
             deleteCourse={this.props.deleteCourse}/>)}
        </div>
        
    );
  }
}

export default CourseGridComponent
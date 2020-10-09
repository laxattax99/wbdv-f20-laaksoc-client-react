import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import courseService from "../services/CourseService";
import NavBarComponent from "./NavBarComponent";

const CourseTableComponent = ({ courses, deleteCourse, createCourse }) => {
  // state = {
  //     courses: this.props.courses
  // };

  // constructor(props){
  //     super(props)
  //     console.log('construct', props)
  // }

  // createCourse = () => {
  //   const newCourse = {
  //     title: "New Course",
  //     owner: "me",
  //     lastUpdated: "yesterday",
  //   };

  //   // UNSAFE:
  //   // const newState = {
  //   //   courses: [
  //   //     ...this.state.courses, newCourse
  //   //   ]
  //   // }
  //   //
  //   // this.setState(newState)

  //   // SAFE:

  //   courseService
  //     .createCourse(newCourse)
  //     .then((actualCourse) =>
  //       this.setState(function (prevState) {
  //         return {
  //           courses: [...prevState.courses, actualCourse],
  //         };
  //       })
  //     )
  //     .catch((error) => {});
  // };

  // deleteCourse = (course) => {
  //   courseService.deleteCourse(course._id).then((statu) =>
  //     this.setState((prevState) => ({
  //       courses: prevState.courses.filter((c) => c._id !== course._id),
  //     }))
  //   );
  // };

  return (
    <div>
      <NavBarComponent createCourse={createCourse} />
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <CourseRowComponent
              key={course._id}
              deleteCourse={deleteCourse}
              course={course}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTableComponent;

import React from "react";
import { Link } from "react-router-dom";
import CourseCardComponent from "./CourseCardComponent";
import courseService from "../services/CourseService";
import NavBarComponent from "./NavBarComponent";

const CourseGridComponent = ({ courses, deleteCourse, createCourse }) => {
  return (
    <div>
      <NavBarComponent createCourse={createCourse} />
      <div className="card-deck">
        {courses.map((course) => (
          <CourseCardComponent
            course={course}
            key={course.id}
            deleteCourse={deleteCourse}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseGridComponent;

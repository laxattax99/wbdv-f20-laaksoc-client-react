import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faThLarge} from "@fortawesome/free-solid-svg-icons"
import NavBarComponent from "./NavBarComponent";
import { Link } from "react-router-dom";

const CourseTableComponent = ({ courses, deleteCourse, createCourse }) => {
  return (
    <div>
      <NavBarComponent createCourse={createCourse} />
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th></th>
            <th></th>
            <th>
              <Link to="/course/grid">
                <FontAwesomeIcon icon={faThLarge} />
              </Link>
            </th>
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

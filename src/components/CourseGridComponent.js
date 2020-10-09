import React from "react";
import { Link } from "react-router-dom";
import CourseCardComponent from "./CourseCardComponent";
import NavBarComponent from "./NavBarComponent";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTable} from "@fortawesome/free-solid-svg-icons"

const CourseGridComponent = ({ courses, deleteCourse, createCourse }) => {
  return (
    <div>
      <NavBarComponent createCourse={createCourse} />
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>
              <Link to="/course/table">
                <FontAwesomeIcon icon={faTable} />
              </Link>
            </th>
          </tr>
        </thead>
      </table>
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

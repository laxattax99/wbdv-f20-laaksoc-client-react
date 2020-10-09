import React from "react";

const NavBarComponent = ({ createCourse }) => {
  return (
    <nav className="navbar navbar-light bg-light">
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
      <span>
        <input
          className="form-control mr-sm-2 wbdv-field wbdv-new-course"
          type="search"
          placeholder="New Course Title"
          aria-label="Search"
        />
        <button
          onClick={() => createCourse()}
          className="btn btn-outline-success my-2 my-sm-0 wbdv-button wbdv-add-course"
        >
          Add Course
        </button>
      </span>
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
  );
};

export default NavBarComponent;

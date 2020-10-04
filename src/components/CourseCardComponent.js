import React from "react";
import { Link } from "react-router-dom";
import { updateCourse } from "../services/CourseService";

class CourseCardComponent extends React.Component {
  state = {
    course: this.props.course,
    editing: false,
  };

  constructor(props) {
    super(props);
  }

  updateTitle = (event) => {
    const newTitle = event.target.value
    const course = { ...this.state.course }
    course.title = newTitle
    this.setState({
      course: course
    })
  }

  updateCourse = () => {
    this.setState({ editing: false });
    updateCourse(this.state.course._id, this.state.course);
  };

  render() {
    return (
      <div className="card" styles={{ width: "18rem" }}>
        <img className="card-img-top" src="https://picsum.photos/300/200" />
        <div className="card-body">
          <h5 className="card-title">
          {
            this.state.editing === true &&
            <input
              onChange={this.updateTitle}
              value={this.state.course.title}/>
          }
          {
            this.state.editing === false &&
            <label>{this.state.course.title}</label>
          }
          </h5>
          <p className="card-text">Card text.</p>
          <Link className="btn btn-primary" to={`/course/edit/`}>
            More...
          </Link>
          <button
            className="btn btn-danger"
            onClick={this.props.deleteCourse(this.props.course)}
          >
            Delete
          </button>
          {
            this.state.editing &&
            <button onClick={this.updateCourse} className="btn btn-primary">
              Ok
            </button>
          }
          {
            !this.state.editing &&
            <button onClick={() => this.setState({editing: true})} className="btn btn-primary">
              Edit
            </button>
          }
        </div>
      </div>
    );
  }
}

export default CourseCardComponent;

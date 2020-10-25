import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const ParagraphWidget = ({ widget, updateWidget }) => {
  return (
    <div className="container">
      <h3>
        {widget.name}
        <span className="float-right">
          <button class="btn btn-warning">
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          <a class="btn btn-warning">
            <FontAwesomeIcon icon={faArrowDown} />
          </a>
          <select>
            <option>Paragraph</option>
            <option>Heading</option>
          </select>
          <button class="btn btn-danger">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </span>
      </h3>
      <textarea
        placeholder="Lorem Ipsum"
        onChange={(event) =>
          updateWidget({ ...widget, value: event.target.value })
        }
      ></textarea>
      <br />
      <input
        placeholder="Widget Name"
        onChange={(event) =>
          updateWidget({ ...widget, name: event.target.value })
        }
      ></input>
      <br />
      <h4>Preview</h4>
      <p>{widget.value}</p>
    </div>
  );
};

export default ParagraphWidget;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const ParagraphWidget = ({
  widget,
  updateWidget,
  deleteWidget,
  handleWidgetChange,
  moveWidgetUp,
  moveWidgetDown,
  numberOfWidgets,
}) => {
  return (
    <div className="container">
      <h3>
        {widget.name}
        <span className="float-right">
          {widget.widgetOrder > 0 && (
          <button onClick={() => moveWidgetUp()} className="btn btn-warning">
            <FontAwesomeIcon icon={faArrowUp} />
          </button>)}
          {widget.widgetOrder < numberOfWidgets - 1 && (
          <button onClick={() => moveWidgetDown()} className="btn btn-warning">
            <FontAwesomeIcon icon={faArrowDown} />
          </button>)}
          <select
            defaultValue={widget.type ? widget.type : "HEADING"}
            onChange={(event) => handleWidgetChange(event)}
          >
            <option value="PARAGRAPH">Paragraph</option>
            <option value="HEADING">Heading</option>
          </select>
          <button
            onClick={() => deleteWidget(widget)}
            className="btn btn-danger"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </span>
      </h3>
      <textarea
        className="form-control"
        placeholder="Lorem Ipsum"
        onChange={(event) =>
          updateWidget({ ...widget, value: event.target.value })
        }
      ></textarea>
      <br />
      <input
        className="form-control"
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

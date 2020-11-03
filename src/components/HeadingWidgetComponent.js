import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
const HeadingWidget = ({
  widget,
  updateWidget,
  deleteWidget,
  handleWidgetChange,
  moveWidgetUp,
  moveWidgetDown,
  numberOfWidgets,
  previewMode,
}) => {
  const updateHeadingSize = (event) => {
    const size = parseInt(event.target.value);
    updateWidget({ ...widget, size: size });
  };

  const getHeadingSize = (widget) => {
    switch (widget.size) {
      case 1:
        return <h1>{widget.value}</h1>;
      case 2:
        return <h2>{widget.value}</h2>;
      case 3:
        return <h3>{widget.value}</h3>;
      case 4:
        return <h4>{widget.value}</h4>;
      case 5:
        return <h5>{widget.value}</h5>;
      case 6:
        return <h6>{widget.value}</h6>;
      default:
        return <h1>{widget.value}</h1>;
    }
  };

  return (
    <div className="container">
      <h3>
        {widget.name}
        {previewMode === false && (
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
        </span>)}
      </h3>

      {previewMode === false && (
      <div>
      <input
        onChange={(event) =>
          updateWidget({ ...widget, value: event.target.value })
        }
        className="form-control"
        placeholder="Heading Text"
      />
      <br />
      <select
        defaultValue={widget.size ? widget.size : 1}
        onChange={(event) => updateHeadingSize(event, widget)}
        className="form-control"
      >
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="3">Heading 3</option>
        <option value="4">Heading 4</option>
        <option value="5">Heading 5</option>
        <option value="6">Heading 6</option>
      </select>
      <br />
      <input
        onChange={(event) =>
          updateWidget({ ...widget, name: event.target.value })
        }
        className="form-control"
        placeholder="Widget Name"
      />
      <br />
      </div>)}
      <h4>Preview</h4>
      {getHeadingSize(widget)}
    </div>
  );
};

export default HeadingWidget;

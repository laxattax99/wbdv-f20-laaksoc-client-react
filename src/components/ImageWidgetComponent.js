import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const ImageWidget = ({
  widget,
  updateWidget,
  deleteWidget,
  handleWidgetChange,
  moveWidgetUp,
  moveWidgetDown,
  numberOfWidgets,
  previewMode,
  updatedWidgetsAfterRemoval,
}) => {
  const deleteAndUpdateOtherWidgets = () => {
    updatedWidgetsAfterRemoval();
    deleteWidget(widget);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3>
          {widget.name}
          {previewMode === false && (
            <span className="float-right">
              {widget.widgetOrder > 0 && (
                <button
                  onClick={() => moveWidgetUp()}
                  className="btn btn-warning"
                >
                  <FontAwesomeIcon icon={faArrowUp} />
                </button>
              )}
              {widget.widgetOrder < numberOfWidgets - 1 && (
                <button
                  onClick={() => moveWidgetDown()}
                  className="btn btn-warning"
                >
                  <FontAwesomeIcon icon={faArrowDown} />
                </button>
              )}
              <select
                defaultValue={widget.type ? widget.type : "HEADING"}
                onChange={(event) => handleWidgetChange(event)}
              >
                <option value="PARAGRAPH">Paragraph</option>
                <option value="HEADING">Heading</option>
                <option value="LIST">List</option>
                <option value="IMAGE">Image</option> 
              </select>
              <button
                onClick={() => deleteAndUpdateOtherWidgets()}
                className="btn btn-danger"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </span>
          )}
        </h3>
        {previewMode === false && (
          <div>
            <input
              className="form-control"
              placeholder="Image URL"
              onChange={(event) =>
                updateWidget({ ...widget, url: event.target.value })
              }
            ></input>
            <br />
            <input
              className="form-control"
              placeholder="Widget Name"
              onChange={(event) =>
                updateWidget({ ...widget, name: event.target.value })
              }
            ></input>
            <br />
          </div>
        )}
        <h4>Preview</h4>
        <img className="card-img-top" src={widget.url}></img>
      </div>
    </div>
  );
};

export default ImageWidget;

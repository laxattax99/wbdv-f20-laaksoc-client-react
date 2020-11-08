import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const ListWidgetComponent = ({
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

  const handleChangeListType = (event) => {
    updateWidget({ ...widget, style: event.target.value });
  };

  const listItems = widget.value ? widget.value.split("\n") : [];

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
            <textarea
              className="form-control"
              placeholder="Enter one list item per line"
              onChange={(event) =>
                updateWidget({ ...widget, value: event.target.value })
              }
            ></textarea>
            <br />
            <select
              className="form-control"
              defaultValue="Unordered list"
              onChange={(event) => handleChangeListType(event)}
            >
              <option value="ul">Unordered list</option>
              <option value="ol">Ordered list</option>
            </select>
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
        {widget.style === "ul" && (
          <ul>
            {listItems.map((listItem) => (
              <li>{listItem}</li>
            ))}
          </ul>
        )}
        {widget.style === "ol" && (
          <ol>
            {listItems.map((listItem) => (
              <li>{listItem}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default ListWidgetComponent;

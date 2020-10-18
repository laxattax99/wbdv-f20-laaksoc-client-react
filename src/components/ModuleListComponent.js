import React from "react";

class ModuleListComponent extends React.Component {
  render() {
    return (
        <ul className="list-group wbdv-module-list">
          <li className="list-group-item wbdv-module-item wbdv-module-item-title">
            Module 1
            <a
              href="#"
              className="fas fa-times float-right wbdv-module-item-delete-btn"
            ></a>
          </li>
          <li className="list-group-item wbdv-module-item wbdv-module-item-title">
            Module 2
            <a
              href="#"
              className="fas fa-times float-right wbdv-module-item-delete-btn"
            ></a>
          </li>
          <li className="list-group-item active wbdv-module-item wbdv-module-item-title">
            Module 3
            <a
              href="#"
              className="fas fa-times float-right wbdv-module-item-delete-btn"
            ></a>
          </li>
          <li className="list-group-item wbdv-module-item wbdv-module-item-title">
            Module 4
            <a
              href="#"
              className="fas fa-times float-right wbdv-module-item-delete-btn"
            ></a>
          </li>
          <li className="list-group-item wbdv-module-item wbdv-module-item-title">
            Module 5
            <a
              href="#"
              className="fas fa-times float-right wbdv-module-item-delete-btn"
            ></a>
          </li>
          <li className="list-group-item wbdv-module-item wbdv-module-item-title">
            Module 6
            <a
              href="#"
              className="fas fa-times float-right wbdv-module-item-delete-btn"
            ></a>
          </li>
          <li className="list-group list-group-flush">
            <button href="#" className="wbdv-module-item-add-btn ml-auto btn">
              <i className="fas fa-plus"></i>
            </button>
          </li>
        </ul>
    );
  }
}

export default ModuleListComponent;

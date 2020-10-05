import React from "react";

class ModuleListComponent extends React.Component {
  render() {
    return (
        <ul class="list-group wbdv-module-list">
          <li class="list-group-item wbdv-module-item wbdv-module-item-title">
            Module 1
            <a
              href="#"
              class="fas fa-times float-right wbdv-module-item-delete-btn"
            ></a>
          </li>
          <li class="list-group-item wbdv-module-item wbdv-module-item-title">
            Module 2
            <a
              href="#"
              class="fas fa-times float-right wbdv-module-item-delete-btn"
            ></a>
          </li>
          <li class="list-group-item active wbdv-module-item wbdv-module-item-title">
            Module 3
            <a
              href="#"
              class="fas fa-times float-right wbdv-module-item-delete-btn"
            ></a>
          </li>
          <li class="list-group-item wbdv-module-item wbdv-module-item-title">
            Module 4
            <a
              href="#"
              class="fas fa-times float-right wbdv-module-item-delete-btn"
            ></a>
          </li>
          <li class="list-group-item wbdv-module-item wbdv-module-item-title">
            Module 5
            <a
              href="#"
              class="fas fa-times float-right wbdv-module-item-delete-btn"
            ></a>
          </li>
          <li class="list-group-item wbdv-module-item wbdv-module-item-title">
            Module 6
            <a
              href="#"
              class="fas fa-times float-right wbdv-module-item-delete-btn"
            ></a>
          </li>
          <li class="list-group list-group-flush">
            <button href="#" class="wbdv-module-item-add-btn ml-auto btn">
              <i class="fas fa-plus"></i>
            </button>
          </li>
        </ul>
    );
  }
}

export default ModuleListComponent;

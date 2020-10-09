import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPlus} from "@fortawesome/free-solid-svg-icons"

class LessonTabsComponent extends React.Component{

    render(){
        return(
            <ul class="nav nav-tabs wbdv-lesson-tabs">
            <li class="nav-item">
              <a href="#" class="nav-link">Lesson 1</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link active">Lesson 2</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Lesson 3</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Lesson 4</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Lesson 5</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Lesson 1</a>
            </li>
            <li class="nav-item">
              <button href="#" class="nav-link wbdv-lesson-add-btn btn btn-success">
              <FontAwesomeIcon icon={faPlus}/>
              </button>
            </li>
          </ul>
        )
    }
}

export default LessonTabsComponent
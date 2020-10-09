import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPlus} from "@fortawesome/free-solid-svg-icons"

class TopicPillsComponent extends React.Component{

    render(){
        return(
            <ul class="nav nav-pills wbdv-topic-pill-list">
            <li class="nav-item wbdv-topic-pill">
              <a href="#" class="nav-link">Topic 1</a>
            </li>
            <li class="nav-item wbdv-topic-pill">
              <a href="#" class="nav-link active">Topic 2</a>
            </li>
            <li class="nav-item wbdv-topic-pill">
              <a href="#" class="nav-link">Topic 3</a>
            </li>
            <li class="nav-item wbdv-topic-pill">
              <a href="#" class="nav-link">Topic 4</a>
            </li>
            <li class="nav-item wbdv-topic-pill">
              <a href="#" class="nav-link">Topic 5</a>
            </li>
            <li class="nav-item wbdv-topic-pill">
              <a href="#" class="nav-link">Topic 1</a>
            </li>
            <li class="nav-item wbdv-topic-pill">
              <button href="#" class="nav-link wbdv-topic-add-btn btn btn-success"> 
                <FontAwesomeIcon icon={faPlus}/>
              </button>
            </li>
          </ul> 
        )
    }
}

export default TopicPillsComponent
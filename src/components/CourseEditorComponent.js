import React from "react";
import LessonTabsComponent from "./LessonTabsComponent";
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";

class CourseEditorComponent extends React.Component{

    render(){
        return(
            <div className="container">
      <h1 className="wbdv-course-title">
          <a href="../course-list/course-list.template.client.html" class="wbdv-course-editor wbdv-close">
              <i class="fas fa-times"></i>
          </a>
        Course Title
      </h1>
      <div class="row">
        <div class="col-4">
          <ModuleListComponent/>
        </div>
        <div class="col-8">
          <LessonTabsComponent />
          <br />
          <TopicPillsComponent />
          <br />
        </div>
      </div>
    </div>
        )
    }
}

export default CourseEditorComponent
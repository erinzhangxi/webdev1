import React from 'react'
import LessonTabs from './LessonTabs'
import LessonService from "../services/LessonService";
import {Route} from 'react-router-dom'
import LessonEditor from './LessonEditor'

import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import {WidgetReducer} from "../reducers/WidgetReducer";
import {WidgetContainer} from "./WidgetList";
let store = createStore(WidgetReducer);

const title = {
    "fontFamily":"Arial",
    "fontWeight": 'bold'
};

export default class ModuleEditor
extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        module:'',
        moduleId: '',
        courseId: '',
        moduleName:''};
    this.lessonService = LessonService.instance;
    this.setCourseId = this.setCourseId.bind(this);
    this.setModuleId = this.setModuleId.bind(this);
  }

  setCourseId(courseId) {
    this.setState(
      {courseId: courseId}
    );
  }
  setModuleId(moduleId) {
    this.setState({
      moduleId: moduleId
    });
  }

  componentDidMount() {
    this.setCourseId(this.props.match.params.courseId);
    this.setModuleId(this.props.match.params.moduleId);
    console.log("MODULEEDITOR");
    console.log(this.props.match.params.courseId);
    console.log(this.props.match.params.moduleId);
  }

      componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
  }

          render() {
            return (
              <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <h4 style={title}>Module {this.props.match.params.moduleId}</h4>
              </nav>
              <LessonTabs moduleId={this.props.match.params.moduleId} courseId={this.props.match.params.courseId}/>
                  <Provider store={store}>
                      <WidgetContainer/>
                  </Provider>

              </div>
            );}}

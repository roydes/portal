import React, { Component } from 'react'
import './HomePage.scss';
import Timeline from '../../components/Timeline/Timeline'
import '../../assets/styles/animations.scss';
import '../../assets/styles/texts.scss';
import '../../assets/styles/layout.scss';
import Preview from '../../components/Preview/Preview'
import carrerSectionBackground from '../../assets/background_mac.jpg';
import { timeLine, projects } from '../../AppGlobals'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements : timeLine,
      projectsDescriptions: projects,
    }
  }
  render() {
    const elements = this.state.elements;
    const projectsDescriptions = this.state.projectsDescriptions;
    const slide= {fromLeft: 'slide-left', fromRight: 'slide-right'}
    const projectsPreviews = projectsDescriptions.map((project, index) => {
       return <Preview 
                title = {project.name} 
                text = {project.description}
                image = {project.image}
                key = {index}>
              </Preview>
    });
    return (
         <section className="Home-page Page">
          <div className="Header">
            <h3 className="subtitle">Projects</h3>
          </div>
          <div className="Projects">
            {projectsPreviews}
          </div>
          <div className="Header">
            <h3 className="subtitle">Carreer</h3>
          </div>
          <div className="Carreer">
            <Timeline elements={elements} slide={slide} fade='fade' backgroundImage={'url(' + carrerSectionBackground + ')'}></Timeline>
          </div>     
         </section>
    );
  }
}

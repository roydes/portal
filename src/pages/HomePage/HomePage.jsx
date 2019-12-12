import React, { Component } from 'react';
import { connect } from 'react-redux';

import Timeline from '../../components/Timeline/Timeline'
import Preview from '../../components/Preview/Preview';
import carrerSectionBackground from '../../assets/images/backgrounds/background_mac.jpg';
import { timeLine, projects } from '../../AppGlobals';
import { changeHeader } from '../../redux/appActions';
import { ReduxConstants } from '../../redux/reduxConstants';

import '../../assets/styles/animations.scss';
import '../../assets/styles/texts.scss';
import '../../assets/styles/layout.scss';
import './HomePage.scss';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements : timeLine,
      projectsDescriptions: projects,
    }
  }

  componentDidMount(){
    this.props.changeHeader(ReduxConstants.DEFAULT_STATE.headerAppearance)
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
         <div className="Home-page Page">
          <div className="Header">
            <h3 className="subtitle">Projects</h3>
          </div>
          <section className="Projects">
            {projectsPreviews}
          </section>
          <div className="Header">
            <h3 className="subtitle">Carreer</h3>
          </div>
          <section className="Carreer">
            <Timeline elements={elements} slide={slide} fade='fade' backgroundImage={'url(' + carrerSectionBackground + ')'}></Timeline>
          </section>     
         </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      headerTitle: state.headerAppearance.headerTitle,
      headerSubtitle: state.headerAppearance.headerSubtitle,
      headerBackground: state.headerAppearance.headerBackground
  }
}
const mapDispatchToProps = {changeHeader}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

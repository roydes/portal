import React, { Component } from 'react'
import './HomePage.scss';
import '../../assets/styles/animations.scss';
import '../../assets/styles/texts.scss';
import { CSSTransition } from 'react-transition-group';
import Grid from '@material-ui/core/Grid';
import Preview from '../../components/Preview/Preview'
import image1 from '../../assets/background_dark.jpg';
import image2 from '../../assets/background_hands.jpg';
import image3 from '../../assets/background_mac.jpg';

export const timeLine = [
  { period: "2011 - 2014", 
    companyName: "Execlent Company", 
    position:"Exclent Job",
    description: 'Did excelent thins', 
    show: false 
  },
  { period: "2011 - 2014", 
    companyName: "Execlent Company", 
    position:"Exclent Job",
    description: 'Did excelent thins', 
    show: false 
  },
  { period: "2011 - 2014", 
    companyName: "Execlent Company", 
    position:"Exclent Job",
    description: 'Did excelent thins', 
    show: false 
  },
]

export const projects = [
  { 
    name: 'Amazing Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: image1,
  },
  { 
    name: 'Amazing Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: image2,  
  },
  { 
    name: 'Amazing Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: image3,
  },
  { 
    name: 'Amazing Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: image3,
  },
  { 
    name: 'Amazing Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: image3,
  },
  { 
    name: 'Amazing Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: image3,
  },
]

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements : timeLine,
      projectsDescriptions: projects,
    }
    this.showWhenScrolled = this.showWhenScrolled.bind(this);
  }
  showWhenScrolled(itemsCollection) {
    const scrollPosttion = window.scrollY;
    const scrollbarHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);
    const scrollPosttionOnWindow = scrollPosttion*((window.innerHeight) / document.body.offsetHeight)
    const threshold = scrollPosttion + window.innerHeight - (scrollPosttionOnWindow + scrollbarHeight);
    for(let i = 0; i < itemsCollection.length; i ++) {
      const element = itemsCollection.item(i);
      const offsetTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      if (threshold >= offsetTop + elementHeight ) {
        this.state.elements[i].show = true
        this.setState({element: this.state.elements[i]})
      } else {
        this.state.elements[i].show = false
        this.setState({element: this.state.elements[i]})
      }
    } 
  }
  componentDidMount() {
    console.log('here')
    const itemsCollection = document.getElementsByClassName('Timeline-item');
    window.addEventListener('scroll', () => this.showWhenScrolled(itemsCollection));
  }
  render() {
    const elements = this.state.elements;
    const projectsDescriptions = this.state.projectsDescriptions;
    const elementList = elements.map((element, index) => {
     return <CSSTransition
              in={element.show}
              enter= {true}
              timeout={300}
              classNames="slide-left"
              key={index}
            >
              <div className="Timeline-item">
                    {element.description}
              </div>
            </CSSTransition>
    });
    const projectsPreviews = projectsDescriptions.map((project, index) => {
       return <Preview 
                title = {project.name} 
                text = {project.description}
                image = {project.image}>
              </Preview>
    });
    return (
      <CSSTransition
        in={true}
        appear={true}
        timeout={800}
        classNames="fade"
      >
         <section className="Home-page">
         <div className="Header">
          <h3 className="subtitle">Projects</h3>
         </div>
         <div className="ProjectsPreviews">
         {projectsPreviews}
         </div>
         <p>
          Artificial Intelligence researcher and a full stack developer which is set to the task of solving complex problems in both worlds: researching and software industry. 
         </p>
         <p>
          Bioinspired Algorithms and Neural Networks for solving real-world optimization problems and complex classification tasks have been passion since my finals years at University.  
          During my Master  Degree years at <a href="http://www.lania.mx/">LANIA</a>, I worked with <a href="https://www.uv.mx/personal/emezura/">Ph.D. Efrén Mezura</a> and <a href="http://portilla-flores.com.mx/">Ph.D. Edgar Portilla</a> on a thesis titled: <a href="https://www.uv.mx/personal/emezura/files/2019/01/tesis-Roides.pdf"><q>Hybridization of mathematical programming algorithms with evolutionary algorithms to solve mechatronic design optimization problems</q></a>. In this work, we proposed a new hybridization strategy  for designing more efficient hybrid algorithms. With the resulting algorithm, we successfully solved complex real optimization problems by combining a parallel Nelder-Mead search and  Differential Evolution.
         </p>
         <p>
          As a software engineer and developer, I have been involved in projects since my second year in college in the UCI. The <a href="http://www.cicpc.gob.ve/">CICPC</a> project was my first experience in real-world software development and teamwork.  My thesis work was the design and development of a web system for the Assessment and Management of Information Security Risk based on MAGERIT methodology and ISO 27005 standard. From 2015 to the present, I have worked for excellent software companies around the world such as <a href="https://www.isofact.com/">iSOFACT (Spain)</a>, <a href="http://evomatik.com/">Evomatik (Mexico)</a>, and <a href="https://www.unosquare.com/">Unosquare (USA)</a> as a frontend developer.
         </p>
          <br/>
          <br/>
          <br/>
          {elementList}
          <Grid container className="Timeline" spacing={0}>
           <Grid item xs={12} md ={6}>
           </Grid>
           <Grid item xs={12} md ={6}></Grid>
          </Grid>
         </section>
      </CSSTransition>
    );
  }
}

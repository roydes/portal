import { CSSTransition } from 'react-transition-group';
import React, { Component } from 'react'
import '../../assets/styles/animations.scss'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import image3 from '../../assets/images/backgrounds/background_hands.jpg';

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = { elements: this.props.elements }
        this.showWhenScrolled = this.showWhenScrolled.bind(this); 
    }
    showWhenScrolled(itemsCollection) {
        const scrollPosttion = window.scrollY;
        const threshold = scrollPosttion + window.innerHeight;

        for(let i = 0; i < itemsCollection.length; i ++) {
            const element = itemsCollection.item(i);
            const offsetTop = element.offsetTop;
            const elementHeight = element.offsetHeight;
            const elementSate = this.state.elements[i];

            elementSate.show = threshold >= offsetTop + elementHeight/2;
            this.setState({element: elementSate})
        } 
    }

    componentDidMount() {
        const itemsCollection = document.querySelectorAll("*[class^=\"Timeline-TimelineContent\"]")

        window.addEventListener('scroll', () => this.showWhenScrolled(itemsCollection));
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.setBannerTransform);
    }

    render() {
        const { classes, slide, fade } = this.props;
        const elementList = this.state.elements.map((element, index) => {
            return <div className={classes.TimelineItem} key={index}>
                        <CSSTransition
                            in={element.show}
                            enter= {true}
                            timeout={600}
                            classNames={slide.fromLeft}>
                            <div className={classes.TimelineContent}>
                                <h4 className={classes.Position}>{element.position}</h4>
                                <div className={classes.Technologies}>
                                {
                                   element.technologies.map((technology, index) => (
                                        <span key={index} className={classes.Technology} style={{backgroundImage: 'url(' + technology + ')'}}/>
                                    ))
                                }
                                </div>
                                <div className = {classes.Description}>
                                    <a  className={classes.Logo} href={element.link}>
                                        <img className={classes.LogoImage} src={element.logo} alt={element.projectCompany}/>
                                    </a>
                                    <p className={classes.DescriptionText}>
                                        {element.description}
                                    </p>
                                </div>
                            </div>
                        </CSSTransition>
                        <CSSTransition
                            in={element.show}
                            enter={true}
                            timeout={100}
                            classNames={fade}>
                        <div className={classes.TimelinePeriod}>
                            {element.period}
                        </div>
                        </CSSTransition>
                    </div>
                });

        return (
            <div className={classes.root}>
                <div className={classes.TimeLineContainer}>
                    {elementList}
                </div>
            </div>
        )
    }
}

const styles = {
    root: {
      overflow: 'hidden',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(' + image3 + ')',
    },
    TimeLineContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(245, 245, 245, 0.7)',
        padding: '50px 0'
    },
    TimelineItem: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    TimelineContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: '10px 5%',
        opacity: 0,
        width: '60%',
        marginLeft: '-31%',
        minHeight: '200px',
        margin: '15px 0',
        borderRadius: '5px',
        backgroundImage:'linear-gradient(to right, rgba(17,17,17,0) 0%, rgba(17,17,17,1) 100%)',
        boxShadow: '21px 25px 20px -14px rgba(0,0,0,0.57)'
    },
    Position: {
        textTransform: 'uppercase',
        fontFamily: 'Futura PT Light, sans-serif',
    },
    Technologies: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    Technology: {
        width: '30px',
        height: '30px',
       backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        marginLeft: '10%'
    },
    Description: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Futura PT Light, sans-serif',
        textAlign: 'justify'
    },
    DescriptionText: {
        maxWidth: '50%'
    },
    Logo: {
        minWidth: '30%',
        maxWidth: '50%',
        margin: '20px 10%'
    },
    LogoImage: {
        width: '70%',
        height: '70%',
        float: 'right'
    },
    TimelinePeriod: {
        opacity: 0,
        color: '#262620',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '5%',
        fontSize: '40px',
        minWidth: '200px',
        transitionDuration: '100ms',
        zIndex: '3'
    },
  };

Timeline.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Timeline);
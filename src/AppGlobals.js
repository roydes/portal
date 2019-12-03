
import angular from './assets/images/icons/angular.png';
import boostrap from './assets/images/icons/boostrap.svg';
import image1 from './assets/images/backgrounds/background_dark.jpg';
import image2 from './assets/images/backgrounds/background_hands.jpg';
import image3 from './assets/images/backgrounds/background_mac.jpg';
import keras from './assets/images/icons/keras.png';
import material from './assets/images/icons/material.png';
import objectivec from './assets/images/icons/objectivec.png';
import play from './assets/images/icons/play.png';
import python from './assets/images/icons/python.png';
import react from './assets/images/icons/react.png';
import redux from './assets/images/icons/redux.png';
import sass from './assets/images/icons/sass.svg';
import scikitLearn from './assets/images/icons/scikit_learn.png';
import swift from './assets/images/icons/swift.png';
import uikit from './assets/images/icons/uikit.png';


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
  ];

  export const timeLine = [
    {   
        period: "2019 - PRESENT", 
        companyName: "Globant", 
        companyLink: "https://www.globant.com/#home",
        position: "Senior Web UI Engineer",
        projectName: '360° Panoramic View',
        projectCompany: 'Disney Cruise Line',
        link: 'https://disneycruise.disney.go.com/why-cruise-disney/families',
        logo: 'https://secure.cdn3.wdpromedia.com/media/pep/live/media/site/img/style/ui-global-components/global-nav-bar/eb63e68cecdc8a886dd26c6e433e52ee-disney-cruise-line-logo.png',
        description: 'Disney Cruise Line is a cruise line operation that is a subsidiary of The Walt Disney Company. The proyect here was a 360° panoramic tour through the ships available at DCL.', 
        show: false,
        technologies: []
    },
    {   
      period: "JUN-AUG 2019", 
      companyName: "Tenaris Tamsa", 
      companyLink: "http://www.tenaristamsa.com/",
      position: "Senior AI Analyst",
      projectName: 'Proyect Development Automation',
      projectCompany: "Tenaris Tamsa",
      link: 'http://www.tenaristamsa.com/',
      logo: 'http://us.tenaris.com/us/images/general/logo-tenaris.png',
      description: 'TenarisTamsa, the Industrial Center of Tenaris in Mexico, is one of the largest in the world in the manufacture of steel tubes for the energy industry. This was a small project for high level of automation at Tamsa Pipe Factory.', 
      show: false,
      technologies: [python, keras, scikitLearn]
    },
    {   
        period: "JAN-MAY 2019", 
        companyName: "Unosquare", 
        companyLink: "https://www.unosquare.com/",
        position: "Frontend Engineer",
        projectName: 'G2 Verisk Analytics Business',
        projectCompany: "Verisk",
        link: 'https://www.g2llc.com',
        logo: 'https://www.g2llc.com/wp-content/themes/po-g2-verisk-financial-theme/assets/img/logo_main_verisk.svg',
        description: 'G2 is a Verisk Analytics Business. With G2, gain actionable insights based on AI technology and access the most extensive merchant risk database in the industry to make faster high-quality decisions.', 
        show: false,
        technologies: [react, redux, boostrap, sass]
    },
    {   
        period: "2018 - 2019", 
        companyName: "Parkeo", 
        companyLink: "https://parkeo.mx",
        position: "Frontend Software Engineer",
        projectName: 'Parkeo Web App',
        projectCompany: "Parkeo",
        link: 'https://parkeo.mx',
        logo: 'https://parkeo.mx/images/parkeo-logo.png',
        description: 'Parkeo is a trusted platform that connects owners of available parking lots with drivers. Finding a parking lot or having an extra income has never been so easy.', 
        show: false,
        technologies: [angular, boostrap, sass]
    },
    {   
        period: "2017 - 2018", 
        companyName: "Evomatik", 
        companyLink: "http://evomatik.com/",
        position: "Frontend Developer",
        projectName: 'SEAGeD® Fiscalía',
        projectCompany: "Fiscalía General de Justicia del Estado de México",
        link: 'http://evomatik.com/portfolio/seaged-fiscalia/',
        logo: 'data:image/png;base64,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',
        description: "SEAGeD® Fiscalía is a solution designed to automate the internal processes of the Attorney General's Office. SEAGeD® Fiscalía has various modules for citizen follow-up and assistance, public ministries, intelligent alarms, inter-dependence integration and business intelligence among others.",
        show: false,
        technologies: [angular, material, sass, play]
    },
    {   
        period: "2015 - 2016", 
        companyName: "ISOFACT", 
        companyLink: "https://www.isofact.com/",
        position: "UI Developer",
        projectName: "Leumi Mobile",
        projectCompany: "Leumi Bank",
        link: 'https://english.leumi.co.il/WnnnWn/26343/',
        logo: 'https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/da/dd/54/dadd5456-56dc-ed80-4a80-425f1caae019/source/512x512bb.jpg',
        description: 'Leumi Bank mobile app for smartphones allow clients to view banking information at a glance, make banking operations like: transfer money to a contact via phone contact or account number. Sending cash to an ATM if there is no card or sending cash to someone else. Payment by digital check without paper or tedious registration of checks', 
        show: false,
        technologies: [objectivec, swift, uikit, angular]
    }
  ];
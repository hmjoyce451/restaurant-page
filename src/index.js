import loadHomepage from './homepage';
import displayMenu from './menu';
import displayContact from './contact';
import displayNav from './navBar';
import removeContent from './removeContent';
import "/style.css";

displayNav();
loadHomepage();

//declare buttons for event listening /////////////////////////////
const homeButton = document.querySelector('.home-btn');
const menuButton = document.querySelector('.menu-btn');
const contactButton = document.querySelector('.contact-btn');


//events/////////////////////////////////////////////////////////
homeButton.addEventListener('click', (e) => {
    homeButton.classList.add('clicked');
    menuButton.classList.remove('clicked');
    contactButton.classList.remove('clicked');
    removeContent();
    loadHomepage();
});

menuButton.addEventListener('click', (e) => {
    menuButton.classList.add('clicked');
    contactButton.classList.remove('clicked');
    homeButton.classList.remove('clicked');
    removeContent();
    displayMenu();
});

contactButton.addEventListener('click', (e) => {
    contactButton.classList.add('clicked');
    menuButton.classList.remove('clicked');
    homeButton.classList.remove('clicked');
    removeContent();
    displayContact();
});
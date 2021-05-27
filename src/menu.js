import { displayNav, loadHomepage } from './homepage'
import { removeAllChildNodes } from './home'
function displayMenu () {
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', (e) => {
        removeAllChildNodes(content);
        //displaay navbar
        displayNav();
        //add event listeners to other buttons
        const homeButton = document.querySelector('.home-button');
        homeButton.addEventListener('click', (e) => {
                    //clear page
        console.log('clicked home');
        removeAllChildNodes(content);
        //repopulate page
        loadHomepage();
        });
        //menu container div
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');
        content.appendChild(menuContainer);
        //menu LOGO
        const menuLogo = document.createElement('img');
        menuLogo.classList.add('menu-logo');
        menuLogo.src = '/w4th-logo.png';
        menuContainer.appendChild(menuLogo);
        //menu title
        const menuTitle = document.createElement('h1');
        menuTitle.classList.add('menu-title');
        menuTitle.innerText = 'Menu';
        menuContainer.appendChild(menuTitle);
        //Starters
        const startersContainer = document.createElement('div');
        startersContainer.classList.add('starters-container');
        menuContainer.appendChild(startersContainer);
        const startersTitle = document.createElement('h3');
        startersTitle.innerText = 'Starters';
        startersContainer.appendChild(startersTitle);
    }); 
}
export { displayMenu };
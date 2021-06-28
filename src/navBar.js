function displayNav() {
    const navContainer = document.createElement('div');
    navContainer.classList.add('nav-container');

    //nav logo
    const navLogo = document.createElement('img');
    navLogo.setAttribute('src', 'https://images.squarespace-cdn.com/content/58bf4468e58c62f78442496e/1497046206852-R3LTJMI4XYL4HNY62C7H/W4-Badge-Final-White.png?content-type=image%2Fpng');
    navLogo.classList.add('nav-logo');
    navContainer.appendChild(navLogo);
    //nav options
    const navLinks = document.createElement('ul');
    navLinks.classList.add('nav-links');

    const homeButton = document.createElement('a');
    homeButton.classList.add('home-btn');
    homeButton.setAttribute('href', '#');
    homeButton.innerText = 'HOME';

    const menuButton = document.createElement('a');
    menuButton.classList.add('menu-btn');
    menuButton.setAttribute('href', '#');
    menuButton.innerText = 'MENU';

    const contactButton = document.createElement('a');
    contactButton.classList.add('contact-btn');
    contactButton.setAttribute('href', '#');
    contactButton.innerText = 'CONTACT';

    navLinks.appendChild(homeButton);
    navLinks.appendChild(menuButton);
    navLinks.appendChild(contactButton);
    navContainer.appendChild(navLinks);
    content.appendChild(navContainer);
}
export default displayNav;
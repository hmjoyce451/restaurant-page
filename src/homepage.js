function loadHomepage () {
    //declare variables (grab #content);
    const content = document.getElementById('content');
    //homepage main content
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    homeContainer.classList.add('content');
    content.appendChild(homeContainer);
    
    //background image
    const bgImg = document.createElement('img');
    bgImg.setAttribute('src', 'https://a.1stdibscdn.com/ellen-bradshaw-paintings-winter-west-4th-jane-st-8th-ave-painting-oil-on-canvas-for-sale-picture-3/12330573/a_34232511539668535218/15084_000bd65f11f05af8d7de9d87dde5c26e61bf2de1_V611cx570ZC7n0Dg_3_master.jpg?width=1500');
    bgImg.classList.add('bg-img');
    homeContainer.appendChild(bgImg);

    //home logo
    const homeLogo = document.createElement('img');
    homeLogo.classList.add('home-logo');
    homeLogo.src = '/w4th-logo.png';
    homeContainer.appendChild(homeLogo);

    //home text ///////////////
    const homeText = document.createElement('h3');
    homeText.classList.add('home-text');
    homeContainer.appendChild(homeText);
    homeText.textContent = 'Brewing friendships since 2009';

}

export default loadHomepage;
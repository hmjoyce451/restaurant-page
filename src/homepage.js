function loadHomepage () {
    //declare variables (grab #content);
    const content = document.getElementById('content');
    //background image
    const backgroundImage = document.createElement('img');
    backgroundImage.src = 'https://images.squarespace-cdn.com/content/v1/58bf4468e58c62f78442496e/1497122908870-T78OEOHFZUJPZYIRCVQ6/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/MugBG.jpg';
    backgroundImage.classList.add('bg-img');
    content.appendChild(backgroundImage);

    //nav
    displayNav();

      //homepage main content
      const mainContent = document.createElement('div');
      mainContent.classList.add('main-content');
      const mainImage = document.createElement('img');
      mainImage.classList.add('main-img');
      mainImage.src = '/w4th-logo.png';
      mainContent.appendChild(mainImage);
      content.appendChild(mainContent);
      const mainText = document.createElement('p');
      mainText.innerText = 'Brewing friendships since 2009';
      mainText.classList.add('main-text')
      mainContent.appendChild(mainText);
    

    //footer
    displayFooter();
}

function displayNav() {
      //navbar
      const nav = document.createElement('div');
      nav.classList.add('nav');
      content.appendChild(nav);
      //nav logo
        const navLogo = document.createElement('img');
        navLogo.src = 'data:image/png;base64,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';
        navLogo.classList.add('nav-logo');
        nav.appendChild(navLogo);
        //nav options
        const options = document.createElement('div');
        const home = document.createElement('a');
        home.textContent = 'Home';
        home.href = '#';
        options.appendChild(home);
        const menu = document.createElement('a');
        menu.textContent = 'Menu';
        menu.href = '#';
        options.appendChild(menu);
        const contact = document.createElement('a');
        contact.innerText = 'Contact Us';
        contact.href = '#';
        options.appendChild(contact);
        nav.appendChild(options);
              //classes for styling
      options.classList.add('options');
      home.classList.add('choice');
      home.classList.add('home-button');
      menu.classList.add('choice');
      menu.classList.add('menu-button')
      contact.classList.add('choice');
}

function displayFooter() {
  console.log('footer is displayed');
}

export { loadHomepage, displayNav, displayFooter };
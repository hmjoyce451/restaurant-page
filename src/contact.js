function displayContact() {
    //declare variables (grab #content);
    const content = document.getElementById('content');
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    contactContainer.classList.add('content');

    const contactTitle = document.createElement('h1');
    contactTitle.classList.add('contact-title');
    contactTitle.innerText = 'CONTACT';

    //hours
    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('hours-container');

    const hoursTitle = document.createElement('h3');
    hoursTitle.classList.add('hours-title');
    hoursTitle.innerText  = 'HOURS:';
    hoursContainer.appendChild(hoursTitle);

    const wed = document.createElement('p');
    wed.classList.add('day');
    wed.innerText = 'WED: 4PM - 9PM';
    hoursContainer.appendChild(wed);

    const thurs = document.createElement('p');
    thurs.classList.add('day');
    thurs.innerText = 'THURS: 4PM - 9PM';
    hoursContainer.appendChild(thurs);

    const fri = document.createElement('p');
    fri.classList.add('day');
    fri.innerText = 'FRI: 12PM - 10PM';
    hoursContainer.appendChild(fri);

    const sat = document.createElement('p');
    sat.classList.add('day');
    sat.innerText = 'SAT: 12PM - 10PM';
    hoursContainer.appendChild(sat);

    const sun = document.createElement('p');
    sun.classList.add('day');
    sun.innerText = 'SUN: 12PM - 9PM';
    hoursContainer.appendChild(sun);

    const beerGarden = document.createElement('p');
    beerGarden.classList.add('day');
    beerGarden.innerText = '3RD ST. PROMENADE BEER GARDEN OPEN SATURDAY, SUNDAY 2PM - 7PM';
    hoursContainer.appendChild(beerGarden);

    //location
    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location-container');

    const locationTitle = document.createElement('h3');
    locationTitle.classList.add('location-title');
    locationTitle.innerText = 'LOCATION:';
    locationContainer.appendChild(locationTitle);
    const address = document.createElement('p');
    address.classList.add('address');
    address.innerText = '1432A 4th Street Santa Monica, CA 90401';
    locationContainer.appendChild(address);
    const phoneNumber = document.createElement('p');
    const email = document.createElement('p');
    email.classList.add('email');
    email.innerText = 'info@west4thjane.com';
    phoneNumber.classList.add('phone-number');
    phoneNumber.innerText = '310.395.6765';
    locationContainer.appendChild(phoneNumber);
    locationContainer.appendChild(email);
    

    //social media
    const socialContainer = document.createElement('div');
    socialContainer.classList.add('social-container');

    const socialTitle = document.createElement('h3');
    socialTitle.innerText = 'FIND US ON SOCIAL MEDIA:';
    socialTitle.classList.add('social-title');
    socialContainer.appendChild(socialTitle);

    const fbLink = document.createElement('a');
    const facebook = document.createElement('i');
    facebook.classList.add('fab');
    facebook.classList.add('fa-facebook');
    fbLink.setAttribute('href', 'https://www.facebook.com/west4thjane/');
    fbLink.appendChild(facebook);
    socialContainer.appendChild(fbLink);

    const instaLink = document.createElement('a');
    const instagram = document.createElement('i');
    instagram.classList.add('fab');
    instagram.classList.add('fa-instagram');
    instaLink.setAttribute('href', 'https://www.instagram.com/west4thandjane/');
    instaLink.appendChild(instagram);
    socialContainer.appendChild(instaLink);

    const twitterLink = document.createElement('a');
    const twitter = document.createElement('i');
    twitter.classList.add('fab');
    twitter.classList.add('fa-twitter');
    twitterLink.setAttribute('href', 'https://twitter.com/west4thjane');
    twitterLink.appendChild(twitter);
    socialContainer.appendChild(twitterLink);


    //append to main container
    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(hoursContainer);
    contactContainer.appendChild(locationContainer);
    contactContainer.appendChild(socialContainer);
    
    content.appendChild(contactContainer);

}

export default displayContact ;
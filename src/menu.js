function displayMenu () {
//declare variables (grab #content);
  const content = document.getElementById('content');
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  menuContainer.classList.add('content');

    //starters////////////////////////
  const starters = document.createElement('div');
  starters.classList.add('starters');
  const startersTitle = document.createElement('h3');
  startersTitle.classList.add('menu-title');
  startersTitle.innerText = 'Starters';

  const starterOne = document.createElement('div');
  starterOne.classList.add('menu-item');
  const wings = document.createElement('h4');
  wings.classList.add('menu-item-title');
  wings.innerText = '12 Wings';
  const wingsDesc = document.createElement('p');
  wingsDesc.classList.add('menu-description');
  wingsDesc.innerText = 'choice of 1: buffalo, mango-habanero, sriracha-ginger, smokey bbq, garlic parmesan or honey apple bacon. also available as gluten-free boneless bites.';

  const starterTwo = document.createElement('div');
  starterTwo.classList.add('menu-item');
  const pretzel = document.createElement('h4');
  pretzel.classList.add('menu-item-title');
  pretzel.innerText = 'House Pretzel';
  const pretzelDesc = document.createElement('p');
  pretzelDesc.classList.add('menu-description');
  pretzelDesc.innerText = 'with pimento cheese and West 4th mustard';

  //end starters///////////////////////////

  //salads//////////////////////////////////
  const salads = document.createElement('div');
  salads.classList.add('salads');
  const saladsTitle = document.createElement('h3');
  saladsTitle.classList.add('menu-title');
  saladsTitle.innerText = 'Salads';
  
  const kaleSalad = document.createElement('div');
  kaleSalad.classList.add('menu-item');
  const kaleSaladTitle = document.createElement('h4');
  kaleSaladTitle.classList.add('menu-item-title');
  kaleSaladTitle.innerText = 'Kale Caesar Salad';
  const kaleDesc = document.createElement('p');
  kaleDesc.classList.add('menu-description');
  kaleDesc.innerText = 'with housemade caesar dressing and pretzel croutons';

  const greekSalad = document.createElement('div');
  greekSalad.classList.add('menu-item');
  const greekSaladTitle = document.createElement('h4');
  greekSaladTitle.classList.add('menu-item-title');
  greekSaladTitle.innerText = 'Greek Salad';
  const greekDesc = document.createElement('p');
  greekDesc.classList.add('menu-description');
  greekDesc.innerText = 'romaine lettuce, red & green bell peppers, red onions, black olives, cucumbers, feta cheese and greek dressing';

  //end salads //////////////////////////////////

  //sandwiches //////////////////////////////////

  const sandwiches = document.createElement('div');
  sandwiches.classList.add('sandwiches');
  const sandwichesTitle = document.createElement('h4');
  sandwichesTitle.classList.add('menu-title');
  sandwichesTitle.innerText = 'Sandwiches';

  const beefSliders = document.createElement('div');
  beefSliders.classList.add('menu-item');
  const beefSlidersTitle = document.createElement('h4');
  beefSlidersTitle.classList.add('menu-item-title');
  beefSlidersTitle.innerText = 'Beef Sliders Trio';
  const beefDesc = document.createElement('p');
  beefDesc.classList.add('menu-description');
  beefDesc.innerText = 'try one of each above burger in slider form on hawaiian sweet rolls';

  const porkSliders = document.createElement('div');
  porkSliders.classList.add('menu-item');
  const porkSlidersTitle = document.createElement('h4');
  porkSlidersTitle.classList.add('menu-item-title');
  porkSlidersTitle.innerText = 'Pork Sliders Trio';
  const porkDesc = document.createElement('p');
  porkDesc.classList.add('menu-description');
  porkDesc.innerText = 'bbq sauce + crispy onion, mango-habanero sauce + homemade pickles and honey apple sauce + bacon';

  //end sandwiches ////////////////////

  //sides ////////////////////////////

  const sides = document.createElement('div');
  sides.classList.add('sides');
  const sidesTitle = document.createElement('h3');
  sidesTitle.classList.add('menu-title');
  sidesTitle.innerText = 'Sides';

  const fries = document.createElement('div');
  fries.classList.add('menu-item');
  const friesTitle = document.createElement('h4');
  friesTitle.classList.add('menu-item-title');
  friesTitle.innerText = 'Fries, Tots, Sweet Potato Fries';
  const friesDesc = document.createElement('p');
  friesDesc.classList.add('menu-item-description');
  friesDesc.innerText = 'All sides made in house';




  menuContainer.appendChild(starters);
  starters.appendChild(startersTitle);
  starters.appendChild(starterOne);
  starterOne.appendChild(wings);
  wings.appendChild(wingsDesc);
  starters.appendChild(starterTwo);
  starterTwo.appendChild(pretzel);
  pretzel.appendChild(pretzelDesc);

  menuContainer.appendChild(salads);
  salads.appendChild(saladsTitle);
  salads.appendChild(kaleSalad);
  kaleSalad.appendChild(kaleSaladTitle);
  kaleSaladTitle.appendChild(kaleDesc);
  salads.appendChild(greekSalad);
  greekSalad.appendChild(greekSaladTitle);
  greekSaladTitle.appendChild(greekDesc);

  menuContainer.appendChild(sandwiches);
  sandwiches.appendChild(sandwichesTitle);
  sandwiches.appendChild(beefSliders);
  beefSliders.appendChild(beefSlidersTitle);
  beefSlidersTitle.appendChild(beefDesc);
  sandwiches.appendChild(porkSliders);
  porkSliders.appendChild(porkSlidersTitle);
  porkSlidersTitle.appendChild(porkDesc);

  menuContainer.appendChild(sides);
  sides.appendChild(sidesTitle);
  sides.appendChild(fries);
  fries.appendChild(friesTitle);
  friesTitle.appendChild(friesDesc);

  content.appendChild(menuContainer);
}
export default displayMenu;
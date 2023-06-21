let navContainer;
let navbarRight;
let navbarCollapsed;
let navMenuMobile;

let introContainer;
let introLeft;
let introRight;

let aboutContent;
let aboutLeft;
let aboutRight;
let aboutLow;

let headers;

let selectionMask;

window.addEventListener('load', () => {
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;
  let isMobile = false;

  // we need to programatically change the height of the selection mask because it's not possible in CSS
  selectionMask = document.getElementById('selection-mask');
  selectionMask.style.height = `${document.body.clientHeight}px`;

  navContainer = document.querySelector('.navbar-container');
  navbarRight = document.getElementById('nav-info-right');
  navbarCollapsed = document.getElementById('navbar-info-right-collapsed');
  navMenuMobile = document.getElementById('navmenu-mobile');

  introContainer = document.querySelector('.intro-container');
  introLeft = document.querySelector('.intro-container-left');
  introRight = document.querySelector('.intro-container-right');

  aboutContent = document.querySelector('.about-content');
  aboutLeft = document.querySelector('.about-left');
  aboutRight = document.querySelector('.about-right');
  aboutLow = document.querySelector('.about-content-low');

  headers = document.querySelectorAll('.header');

  // initial check of window ratio
  if (windowWidth / windowHeight < 1.12) {
    // do the logic to create mobile layout
    toggleMobileClasses(true);
    isMobile = true;
  }
  window.addEventListener('resize', () => {
    // we have to adjust the selection style property from the projects
    selectionMask.style.height = `${document.body.clientHeight}px`;

    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;

    if (windowWidth / windowHeight < 1.12) {
      if (!isMobile) {
        // do the logic to create mobile layout
        toggleMobileClasses(true);
        isMobile = true;
      }
    } else {
      if (isMobile) {
        // revert the logic for mobile layout
        toggleMobileClasses(false);
        isMobile = false;
      }
    }
  });
});

function changeNavigationIcon(icon) {
  icon.classList.toggle('change');
  if (icon.classList.contains('change')) {
    navMenuMobile.style.top = `${window.scrollY}px`;
    navMenuMobile.style.display = 'block';
    navContainer.classList.toggle('opaque-color');
    document.body.style.overflow = 'hidden';
  } else {
    navMenuMobile.style.display = 'none';
    navContainer.classList.toggle('opaque-color');
    document.body.style.overflow = 'scroll';
  }
}

function toggleMobileClasses(isMobile) {
  // headers
  headers.forEach((header) => {
    header.classList.toggle('header');
    header.classList.toggle('header-mobile');
  });

  // for the intro page
  introContainer.classList.toggle('intro-container');
  introContainer.classList.toggle('mobile-container');
  introContainer.classList.toggle('mobile-container-wrapper');

  introLeft.classList.toggle('intro-container-left');
  introLeft.classList.toggle('mobile-container');
  introLeft.classList.toggle('mobile-container-left');

  introRight.classList.toggle('intro-container-right');
  introRight.classList.toggle('mobile-container');
  introRight.classList.toggle('mobile-container-right');

  // for the about me page
  aboutContent.classList.toggle('about-content');
  aboutContent.classList.toggle('about-mobile-content');
  aboutContent.classList.toggle('reverse-order');
  aboutLeft.classList.toggle('about-left');
  aboutLeft.classList.toggle('about-subcontent');

  aboutLow.classList.toggle('about-content-low');
  aboutLow.classList.toggle('about-mobile-content');
  aboutLow.classList.toggle('column-order');
  aboutRight.classList.toggle('about-right');
  aboutRight.classList.toggle('about-subcontent');

  // for the navbar
  if (isMobile) {
    navbarRight.style.display = 'none';
    navbarCollapsed.style.display = 'inline-block';
  } else {
    navbarRight.style.display = 'block';
    if (navbarCollapsed.classList.contains('change')) {
      navbarCollapsed.classList.remove('change');
      navContainer.classList.remove('opaque-color');
    }
    navbarCollapsed.style.display = 'none';
    navMenuMobile.style.display = 'none';
  }
}

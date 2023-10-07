let navContainer;
let navbarRight;
let navbarCollapsed;
let navMenuMobile;
let navInfoLeft;

let introContainer;
let introLeft;
let introRight;

let aboutContent;
let aboutLeft;
let aboutRight;
let aboutLow;

let headers;

let selectionMask;

let projectsSubcontainer;
let projectsLeft;
let projectsRight;
let projectsTopContainer;

let timelineContent;

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

  projectsSubcontainer = document.querySelector('.projects-content');
  projectsLeft = document.querySelector('.projects-left');
  projectsRight = document.querySelector('.projects-right');
  projectsTopContainer = document.querySelector('.projects-item-container-top');

  timelineContent = document.getElementById('timeline-content');
  // initial check of window ratio
  if (windowWidth / windowHeight < 1.15) {
    console.log('here');
    // do the logic to create mobile layout
    toggleMobileClasses(true);
    alignTimelineObjects(true);
    isMobile = true;
  } else {
    if (windowWidth < 850) {
      navContainer.style.fontSize = '0.9rem';
    }
    alignTimelineObjects(false);
  }

  window.addEventListener('resize', () => {
    // we have to adjust the selection style property from the projects
    selectionMask.style.height = `${document.body.clientHeight}px`;

    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;

    if (windowWidth / windowHeight < 1.2) {
      if (!isMobile) {
        // do the logic to create mobile layout
        toggleMobileClasses(true);
        alignTimelineObjects(true);
        isMobile = true;
      }
    } else {
      if (isMobile) {
        // revert the logic for mobile layout
        toggleMobileClasses(false);
        alignTimelineObjects(false);
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

  // for the projects page
  projectsSubcontainer.classList.toggle('projects-content');
  projectsSubcontainer.classList.toggle('projects-content-mobile');
  projectsLeft.classList.toggle('projects-left');
  projectsLeft.classList.toggle('projects-left-mobile');
  projectsRight.classList.toggle('projects-right');
  projectsRight.classList.toggle('projects-right-mobile');
  projectsTopContainer.classList.toggle('projects-item-container-top');
  projectsTopContainer.classList.toggle('projects-item-container-top-mobile');

  // for the navbar
  let windowWidth = window.innerWidth;
  if (isMobile) {
    navbarRight.style.display = 'none';
    navbarCollapsed.style.display = 'inline-block';
    navContainer.style.fontSize = '0.9rem';
  } else {
    if (windowWidth > 850) {
      navContainer.style.fontSize = 'large';
    }

    navbarRight.style.display = 'block';
    if (navbarCollapsed.classList.contains('change')) {
      navbarCollapsed.classList.remove('change');
      navContainer.classList.remove('opaque-color');
    }
    navbarCollapsed.style.display = 'none';
    navMenuMobile.style.display = 'none';
  }
}

function alignTimelineObjects(isMobile) {
  timelineContent.innerHTML = '';
  if (!isMobile) {
    timelineDivContent.forEach((timelineDiv) => {
      const timelineDatesContainer = document.createElement('div');
      timelineDatesContainer.classList.add('timeline-dates-container');

      const timelineDatesContainerCenter = document.createElement('div');
      timelineDatesContainerCenter.classList.add('timeline-dates-container-center');
      timelineDatesContainerCenter.innerHTML = `<div class="timeline-date">${timelineDiv.displayDate}</div>`;

      if (!timelineDiv.alignLeft) {
        const timelineEmptyDiv = document.createElement('div');
        timelineDatesContainer.appendChild(timelineEmptyDiv);
        timelineDatesContainer.appendChild(timelineDatesContainerCenter);
        timelineDatesContainer.appendChild(timelineDiv);
      } else {
        timelineDatesContainer.appendChild(timelineDiv);
        timelineDatesContainer.appendChild(timelineDatesContainerCenter);
      }
      const timelineSpacer = document.createElement('div');
      timelineSpacer.classList.add('timeline-spacer');
      timelineContent.appendChild(timelineSpacer);
      timelineContent.appendChild(timelineDatesContainer);

      const connectorLine = document.createElement('div');
      connectorLine.id = 'connector-line';
      timelineContent.appendChild(connectorLine);
    });
  } else {
    timelineDivContent.forEach((timelineDiv) => {
      const timelineDatesContainer = document.createElement('div');
      timelineDatesContainer.classList.add('timeline-dates-container-mobile');
      timelineDatesContainer.appendChild(timelineDiv);

      const timelineSpacer = document.createElement('div');
      timelineSpacer.classList.add('timeline-spacer');
      timelineContent.appendChild(timelineSpacer);
      timelineContent.appendChild(timelineDatesContainer);
    });
  }
}

let focussed = false;
let currNode;
let projects;
let projectsTop;
let projectsTopContainer;
let slideShowImages;
let previews;

window.addEventListener('load', () => {
  projects = document.querySelectorAll('.projects-item');
  projectsTop = document.querySelectorAll('.projects-item-top');
  projectsTopContainer = document.querySelector('.projects-item-container-top');
  slideShowImages = document.querySelectorAll('.slideShow');
  previews = document.querySelectorAll('.preview');

  // check first if one item is in focus

  for (const project of projectsTop) {
    project.addEventListener('click', (e) => {
      e.preventDefault();
      currNode = e.target;
      // could be that we clicked a child of the element
      while (!currNode.classList.contains('projects-item-top')) {
        currNode = currNode.parentNode;
      }
      // we give the container the flag focussing
      // all other containers will toggle their classes
      if (!focussed) {
        currNode.focussing = true;
        focussed = true;

        // this will result in O(n^2), dunno if there's a better way to do this
        for (let i = 0; i < projectsTop.length; i++) {
          // add logic here to stop slideshow
          slideShowImages[i].classList.remove('slideShow');
          slideShowImages[i].classList.add('image-hide');

          if (!projectsTop[i].focussing) {
            // make space for the expanding card
            projectsTop[i].classList.add('projects-item-top-shrink');

            // let the other cards slide out of the window
            projects[i].classList.add('projects-item-hidden');
          } else {
            projects[i].classList.add('projects-item-invisible');
            projectsTop[i].classList.add('projects-item-expanded');

            // show preview of selected project
            previews[i].style.display = 'block';
          }
        }
        // TODO: refactor to class with transition
        setTimeout(() => (projectsTopContainer.style.gap = '0'), 500);
        selectionMask.classList.add('selection-active');
      } else {
        collapseCard();
      }
    });
  }

  selectionMask.addEventListener('click', () => {
    // if yes we create an event listener for anywhere on the webpage so we can click the focus away
    if (focussed && currNode) {
      collapseCard();
    }
  });

  function collapseCard() {
    for (let i = 0; i < projectsTop.length; i++) {
      slideShowImages[i].classList.add('slideShow');
      slideShowImages[i].classList.remove('image-hide');
      if (projectsTop[i].classList.contains('projects-item-top-shrink')) {
        projectsTop[i].classList.add('projects-item-top-expand-from-zero');
        setTimeout(() => projectsTop[i].classList.remove('projects-item-top-shrink'), 1000);
        setTimeout(() => projectsTop[i].classList.remove('projects-item-top-expand-from-zero'), 1000);
        projects[i].classList.add('projects-item-slide-in');
        setTimeout(() => projects[i].classList.remove('projects-item-slide-in'), 1000);
        projects[i].classList.remove('projects-item-hidden');
      }
      if (projectsTop[i].classList.contains('projects-item-expanded')) {
        projectsTop[i].scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
        projectsTop[i].classList.add('projects-item-shrink');
        setTimeout(() => projects[i].classList.remove('projects-item-invisible'), 1000);
        setTimeout(() => projectsTop[i].classList.remove('projects-item-expanded'), 1000);
        setTimeout(() => projectsTop[i].classList.remove('projects-item-shrink'), 1000);

        previews[i].style.display = 'none';
      }
    }
    setTimeout(() => (projectsTopContainer.style.gap = '5%'), 200);
    selectionMask.classList.add('selection-inactive');
    selectionMask.classList.remove('selection-active');
    setTimeout(() => selectionMask.classList.remove('selection-inactive'), 1000);
    focussed = false;
    currNode.focussing = false;
  }
});

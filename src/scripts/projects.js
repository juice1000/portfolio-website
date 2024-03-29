let focussed = false;
let currNode = {
  focussing: false,
};
let currImage = {
  focussing: false,
};
let projects;
let projectsTop;
let slideShowImages;

let projectContents;

window.addEventListener('load', () => {
  projects = document.querySelectorAll('.projects-item');
  projectsTop = document.querySelectorAll('.projects-item-top');
  slideShowImages = document.querySelectorAll('.slideShow');
  const preview = document.querySelector('#preview');
  projectContents = document.querySelectorAll('.projects-item-content');

  let count = 0;
  for (const image of slideShowImages) {
    projectContents[count].innerHTML = projectsObjects[count].shortDescription;
    count++;
    image.addEventListener('click', (e) => {
      e.preventDefault();
      currImage = e.target;
      // we give the container the flag focussing
      // all other containers will toggle their classes
      if (!focussed) {
        currImage.focussing = true;
        focussed = true;

        expandCard();

        // TODO: refactor to class with transition
        setTimeout(() => (projectsTopContainer.style.gap = '0'), 500);
        selectionMask.classList.add('selection-active');
      } else {
        collapseCard();
      }
    });
  }

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

        expandCard();

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
    if (focussed && (currNode || currImage)) {
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

        // expand project description of selected project
        projectContents[i].innerHTML = projectsObjects[i].shortDescription;

        preview.src = '';
        preview.style.display = 'none';
      }
    }
    setTimeout(() => (projectsTopContainer.style.gap = '5%'), 200);
    selectionMask.classList.add('selection-inactive');
    selectionMask.classList.remove('selection-active');
    setTimeout(() => selectionMask.classList.remove('selection-inactive'), 1000);
    focussed = false;
    currNode.focussing = false;
    currImage.focussing = false;
  }

  function expandCard() {
    // this will result in O(n^2), dunno if there's a better way to do this

    for (let i = 0; i < projectsTop.length; i++) {
      // add logic here to stop slideshow
      slideShowImages[i].classList.remove('slideShow');
      slideShowImages[i].classList.add('image-hide');
      // console.log(slideShowImages[i].focussing);
      if (!projectsTop[i].focussing && !slideShowImages[i].focussing) {
        // make space for the expanding card
        projectsTop[i].classList.add('projects-item-top-shrink');

        // let the other cards slide out of the window
        projects[i].classList.add('projects-item-hidden');
      } else {
        projects[i].classList.add('projects-item-invisible');
        projectsTop[i].classList.add('projects-item-expanded');

        // expand project description of selected project
        projectContents[i].innerHTML = projectsObjects[i].longDescription;
        // show preview of selected project
        preview.src = 'assets/images/' + slideShowImages[i].id + '.gif';
        preview.style.display = 'block';
        preview.addEventListener('click', () => {
          // if yes we create an event listener for anywhere on the webpage so we can click the focus away
          if (focussed && (currNode || currImage)) {
            collapseCard();
          }
        });
      }
    }
  }
});

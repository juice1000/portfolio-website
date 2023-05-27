window.addEventListener('load', () => {
  const projects = document.querySelectorAll('.projects-item');
  const projectsTop = document.querySelectorAll('.projects-item-top');
  const slideShowImages = document.querySelectorAll('.slideShow');

  // we need to programatically change the height of the selection mask
  const selectionMask = document.getElementById('selection-mask');
  selectionMask.style.height = `${document.body.clientHeight}px`;

  for (const project of projectsTop) {
    project.addEventListener('click', (e) => {
      let currNode = e.target;

      // could be that we clicked a child of the element
      while (!currNode.classList.contains('projects-item-top')) {
        currNode = currNode.parentNode;
      }
      // we give the container the flag focussing
      // all other containers will toggle their classes
      if (!currNode.focussing) {
        currNode.focussing = true;

        // this will result in O(n^2), dunno if there's a better way to do this
        for (let i = 0; i < projectsTop.length; i++) {
          slideShowImages[i].classList.remove('slideShow');
          if (!projectsTop[i].focussing) {
            // make space for the expanding card
            projectsTop[i].classList.add('projects-item-top-shrink');

            // let the other cards slide out of the window
            projects[i].classList.add('projects-item-hidden');

            // add logic here to stop slideshow
            slideShowImages[i].classList.add('image-hide');
            // we need two new classes that select and deselect clicked images
          } else {
            projects[i].classList.add('projects-item-invisible');
            projectsTop[i].classList.add('projects-item-expanded');

            // add logic here to stop slideshow
            slideShowImages[i].classList.add('image-focus');
          }
        }

        selectionMask.classList.add('selection-active');
      } else {
        currNode.focussing = false;
        for (let i = 0; i < projectsTop.length; i++) {
          slideShowImages[i].classList.add('slideShow');
          if (projectsTop[i].classList.contains('projects-item-top-shrink')) {
            projectsTop[i].classList.add('projects-item-top-expand-from-zero');
            setTimeout(() => projectsTop[i].classList.remove('projects-item-top-shrink'), 1000);
            setTimeout(() => projectsTop[i].classList.remove('projects-item-top-expand-from-zero'), 1000);
            projects[i].classList.add('projects-item-slide-in');
            setTimeout(() => projects[i].classList.remove('projects-item-slide-in'), 1000);
            projects[i].classList.remove('projects-item-hidden');
            slideShowImages[i].classList.remove('image-hide');
          }
          if (projectsTop[i].classList.contains('projects-item-expanded')) {
            projectsTop[i].classList.add('projects-item-shrink');
            setTimeout(() => projects[i].classList.remove('projects-item-invisible'), 1000);
            setTimeout(() => projectsTop[i].classList.remove('projects-item-expanded'), 1000);
            setTimeout(() => projectsTop[i].classList.remove('projects-item-shrink'), 1000);
            slideShowImages[i].classList.remove('image-focus');
          }
        }
        selectionMask.classList.add('selection-inactive');
        selectionMask.classList.remove('selection-active');
        setTimeout(() => selectionMask.classList.remove('selection-inactive'), 1000);
      }
    });
  }
});

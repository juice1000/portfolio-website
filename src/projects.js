window.addEventListener('load', () => {
  const projects = document.querySelectorAll('.projects-item');
  const projectsTop = document.querySelectorAll('.projects-item-top');

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
          if (!projectsTop[i].focussing) {
            projectsTop[i].classList.add('projects-item-top-shrink');
            projects[i].classList.add('projects-item-hidden');
          } else {
            projects[i].classList.add('projects-item-invisible');
            projectsTop[i].classList.add('projects-item-expanded');
          }
        }

        selectionMask.classList.add('selection-active');
      } else {
        currNode.focussing = false;
        for (let i = 0; i < projectsTop.length; i++) {
          if (projectsTop[i].classList.contains('projects-item-top-shrink')) {
            projectsTop[i].classList.add('projects-item-top-expand-from-zero');
            setTimeout(() => projectsTop[i].classList.remove('projects-item-top-shrink'), 1000);
            setTimeout(() => projectsTop[i].classList.remove('projects-item-top-expand-from-zero'), 1000);
            projects[i].classList.add('projects-item-slide-in');
            setTimeout(() => projects[i].classList.remove('projects-item-slide-in'), 1000);
            projects[i].classList.remove('projects-item-hidden');
          }
          if (projectsTop[i].classList.contains('projects-item-expanded')) {
            projectsTop[i].classList.add('projects-item-shrink');
            setTimeout(() => projects[i].classList.remove('projects-item-invisible'), 1000);
            setTimeout(() => projectsTop[i].classList.remove('projects-item-expanded'), 1000);
            setTimeout(() => projectsTop[i].classList.remove('projects-item-shrink'), 1000);
          }
        }
        selectionMask.classList.add('selection-inactive');
        selectionMask.classList.remove('selection-active');
        setTimeout(() => selectionMask.classList.remove('selection-inactive'), 1000);
      }
    });
  }
});

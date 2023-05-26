window.addEventListener('load', () => {
  const projects = document.querySelectorAll('.projects-item');
  console.log(projects);

  for (const project of projects) {
    project.addEventListener('click', (e) => {
      let currNode = e.target;
      // could be that we clicked a child of the element
      while (currNode.parentNode.className !== 'projects-right') {
        currNode = currNode.parentNode;
      }

      if (!currNode.focussing) {
        currNode.focussing = true;
        // this will result in O(n^2), dunno if there's a better way to do this
        for (const project of projects) {
          if (!project.focussing) {
            project.classList.toggle('projects-item-hidden');
          } else {
            project.classList.toggle('projects-item-expanded');
            if (project.classList.contains('projects-item-shrink')) {
              project.classList.toggle('projects-item-shrink');
            }
          }
        }
      } else {
        currNode.focussing = false;
        for (const project of projects) {
          if (project.classList.contains('projects-item-hidden')) {
            project.classList.toggle('projects-item-hidden');
          }
          if (project.classList.contains('projects-item-expanded')) {
            project.classList.toggle('projects-item-expanded');
            project.classList.toggle('projects-item-shrink');
          }
        }
      }
    });
  }
});

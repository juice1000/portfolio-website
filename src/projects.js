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

      currNode.focussing = true;

      // this will result in O(n^2), dunno if there's a better way to do this
      for (const project of projects) {
        if (!project.focussing) {
          project.classList.toggle('projects-item-hidden');
        }
      }
    });
  }
});

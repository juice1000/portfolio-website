window.addEventListener('load', () => {
  document.getElementById('about-route').addEventListener('click', () => {
    document.getElementById('about-container').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('projects-route').addEventListener('click', () => {
    document.getElementById('projects-container').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('timeline-route').addEventListener('click', () => {
    document.getElementById('timeline-container').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('about-route-mobile').addEventListener('click', () => {
    document.getElementById('about-container').scrollIntoView({ behavior: 'smooth' });
    changeNavigationIcon(document.getElementById('navbar-info-right-collapsed'));
  });
  document.getElementById('projects-route-mobile').addEventListener('click', () => {
    document.getElementById('projects-container').scrollIntoView({ behavior: 'smooth' });
    changeNavigationIcon(document.getElementById('navbar-info-right-collapsed'));
  });
  document.getElementById('timeline-route-mobile').addEventListener('click', () => {
    document.getElementById('timeline-container').scrollIntoView({ behavior: 'smooth' });
    changeNavigationIcon(document.getElementById('navbar-info-right-collapsed'));
  });

  // temporarily enabeled for development
  // document.getElementById('timeline-container').scrollIntoView();
});

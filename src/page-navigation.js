window.addEventListener('load', () => {
  const about = document.getElementById('about-route').addEventListener('click', () => {
    document.getElementById('about-container').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('projects-route').addEventListener('click', () => {
    document.getElementById('projects-container').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('timeline-route').addEventListener('click', () => {
    document.getElementById('timeline-container').scrollIntoView({ behavior: 'smooth' });
  });
});

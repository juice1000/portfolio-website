let navContainer;
let navbarRight;
let navbarCollapsed;
let navMenuMobile;

window.addEventListener('load', () => {
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;

  navContainer = document.querySelectorAll('.navbar-container')[0];
  navbarRight = document.querySelectorAll('#nav-info-right')[0];
  navbarCollapsed = document.querySelectorAll('#navbar-info-right-collapsed')[0];
  navMenuMobile = document.querySelectorAll('#navmenu-mobile')[0];

  navMenuMobile.style.height = `${document.body.clientHeight}px`;

  if (windowWidth / windowHeight < 1) {
    // do the logic to create mobile layout
    navbarRight.style.display = 'none';
    navbarCollapsed.style.display = 'inline-block';
  }
  window.addEventListener('resize', () => {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;

    if (windowWidth / windowHeight < 1) {
      // do the logic to create mobile layout
      navbarRight.style.display = 'none';
      navbarCollapsed.style.display = 'inline-block';
    } else {
      // revert the logic for mobile layout
      navbarRight.style.display = 'block';
      if (navbarCollapsed.classList.contains('change')) {
        navbarCollapsed.classList.remove('change');
        navContainer.classList.remove('opaque-color');
      }
      navbarCollapsed.style.display = 'none';
      navMenuMobile.style.display = 'none';
    }
  });
});
function changeNavigationIcon(icon) {
  icon.classList.toggle('change');
  if (icon.classList.contains('change')) {
    navMenuMobile.style.display = 'block';
    navContainer.classList.toggle('opaque-color');
  } else {
    navMenuMobile.style.display = 'none';
    navContainer.classList.toggle('opaque-color');
  }
}

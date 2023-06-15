// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
// starting from v2 you can add only the features you need reducing the bundle size

const particlesConfig = {
  /* your tsParticles configuration */
  emitters: [],
};
$(document).ready(async function () {
  await loadFull(tsParticles, particlesConfig);

  $('#tsparticles')
    .particles()
    .init(
      {
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 40,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
            limit: 250,
          },

          opacity: {
            value: 0.3,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      },
      function (container) {
        // container is the particles container where you can play/pause or stop/start.
        // the container is already started, you don't need to start it manually.
        setInterval(() => {
          // clear particles every 100ms to prevent overloaded background
          if (container.particles._array.length > 40) {
            container.particles._array.splice(-1, 20);
            container.particles._zArray.splice(-1, 20);
          }
        }, 100);
      }
    );
});

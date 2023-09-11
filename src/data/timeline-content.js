let timelineObjects = [
  {
    alignLeft: true,
    title: `VibeVote`,
    monthStarts: `May`,
    monthEnds: `Present`,
    yearStarts: ``,
    yearEnds: `2023`,
    descriptionItems: [
      `Contributed to a live voting App for Spotify playlists in a pair project`,
      `Fully covered Backend Testing with Unit Tests and Integration Tests using Jest`,
      `Covered whole user journey using E2E Testing with Cypress`,
      `Increased scalability and testability by restructuring Backend to modularservices`,
    ],
  },
  {
    alignLeft: false,
    title: `fluent.ai`,
    monthStarts: ``,
    monthEnds: `May`,
    yearStarts: ``,
    yearEnds: `2023`,
    descriptionItems: [
      `Built a highly customizable AI powered automation tool in a team of four developers`,
      `Managed setup of Cloud Architecture using Firebase coupled with Microservices with NX`,
      `Integrated seamless UI interactions, ensured efficient data transfer between states & database`,
      `Implemented Live Collaboration to enable multiple users to collaborate on one flow`,
    ],
  },
  {
    alignLeft: true,
    title: `Pitchify`,
    monthStarts: ``,
    monthEnds: `April`,
    yearStarts: ``,
    yearEnds: `2023`,
    descriptionItems: [
      `Developed a Mobile Music Streaming App using React Native and Websockets`,
      `Enhanced the App's value by adding advanced functionality with audio pitch manipulation`,
    ],
  },
  {
    alignLeft: false,
    title: `Codeworks`,
    monthStarts: `February`,
    monthEnds: `April`,
    yearStarts: ``,
    yearEnds: `2023`,
    descriptionItems: [
      `Immersive Fullstack Development Bootcamp with 72 hours of lessons per week`,
      `Learned Advanced Javascript programming methods, like object prototypes, higher order functions, asynchronous programming and all the other quirks of the programming language`,
      `Learned about advanced Web Development, beginning with networking theory, continuing with programmin with REST, built HTTP servers from scratch`,
      `Learned advanced HTML and CSS, concluding to copy any website within a few hours`,
      `Integrated multiple relational and non-relational databases and ORMs into existing servers`,
      `Did Unit Testing, Integration Testing and learned about coverage`,
      `Built apps in different architectural design patterns such as MVC or SOA`,
      `Applied security methods to existing apps`,
      `Improved accessibility score of websites`,
      `Learned React and Angular and built multiple apps in both frameworks, concluding to build a clean full-stack app in a few hours`,
    ],
  },

  {
    alignLeft: true,
    title: `AI Fashion Designer`,
    monthStarts: ``,
    monthEnds: `February`,
    yearStarts: ``,
    yearEnds: `2023`,
    descriptionItems: [`Developed a Full-Stack App utilizing Generative AI to prompt any t-shirt design`],
  },
  {
    alignLeft: false,
    title: `AI Fashion Designer`,
    monthStarts: ``,
    monthEnds: `January`,
    yearStarts: ``,
    yearEnds: `2023`,
    descriptionItems: [
      `Developed a Full-Stack App that scans through any public playlist on Spotify and downloads the tracks`,
      `App helps people without Spotify premium subscription to use their songs offline`,
      `Focused on efficient Webscraping methods to reduce download time`,
    ],
  },
  {
    alignLeft: true,
    title: `ExpressGroup`,
    monthStarts: `May`,
    monthEnds: `December`,
    yearStarts: `2021`,
    yearEnds: `2022`,
    descriptionItems: [
      `Managed ETL processes & reimplemented Data Warehouse using dbt and BigQuery, reduced original database costs by more than 90%`,
      `Contributed to Microservices codebase coupled with Firebase Cloud Functions`,
      `Accelerated Customer Success workflow with Chatbot that responds to customer inquiries`,
      `Leveraged Machine Learning tools to automate document screening and cut labour cost by 90%`,
    ],
  },

  {
    alignLeft: false,
    title: `Uflo`,
    monthStarts: ``,
    monthEnds: `March`,
    yearStarts: ``,
    yearEnds: `2021`,
    descriptionItems: [
      `Developed MVP for Urban Planning startup to help users build fast prototypes in first product stage`,
      `Utilized CSV files with adjacency requirements for data-driven alignment of objects and leaflet for display on world map at any given location`,
    ],
  },

  {
    alignLeft: true,
    title: `Student Research Assistant`,
    monthStarts: `September`,
    monthEnds: `August`,
    yearStarts: `2020`,
    yearEnds: `2021`,
    descriptionItems: [
      `Conducted Machine Learning research in Quality Science`,
      `Contributed to paper publications, created interactive content for congresses (e.g. VDI congress)`,
      `Implemented MLOps: Automated workflow from statistical feature selection to model optimization`,
      `Tutored ~300 students in the fundamentals of Data Analytics, conducted weekly live coding sessions`,
      `Graded final case study projects of students`,
    ],
  },

  {
    alignLeft: false,
    title: `Cyanite`,
    monthStarts: `May`,
    monthEnds: `September`,
    yearStarts: ``,
    yearEnds: `2020`,
    descriptionItems: [
      `Modelled several Machine Learning prototypes to classify music eras`,
      `Generated and managed audio data library with pandas, created spectograms from audio`,
      `Implemented vanilla Machine Learning (MLP), Image Classification (CNN) and Time Series Classification (Recurrent CNN) models to analyse audio data`,
      `Programatically tuned hyperparameters during model evaluation step to find optimum`,
    ],
  },

  {
    alignLeft: true,
    title: `Bosch ASEAN`,
    monthStarts: `September`,
    monthEnds: `March`,
    yearStarts: `2019`,
    yearEnds: `2020`,
    descriptionItems: [
      `Linux OS Development for Bosch’s Linux distribution (Bash and Python)`,
      `Deployment using Jenkins`,
      `Implemented verification system for untrusted software during OS installation`,
      `Conceptualized improvement strategies for agile development`,
      `Tech-support (for offices in Singapore and Japan)`,
    ],
  },

  {
    alignLeft: false,
    title: `Technical University Berlin`,
    monthStarts: `April`,
    monthEnds: `August`,
    yearStarts: `2018`,
    yearEnds: `2021`,
    descriptionItems: [
      `B.Sc. Computational Engineering Science, Mechanical Engineering meets Computer Science, Specialization in Data Science and Machine Learning`,
      `Bachelor thesis in Advanced Reinforcement Learning`,
      `Data Science related projects: Conducted case study in Quality Science course, developed apps for visualization, Project in Reinforcement Learning; enabled airhockey playing robot arm to develop game strategies`,
      `Modules in Computer-aided Mathematics: Studied one-year course in Algorithmic Mathematics (Python), Conducted projects in Control Engineering and Numerical Analysis (Matlab)`,
      `Other Computer Science courses: Object oriented Programming (C++), Data structures (Java), Systemprogramming (C), Engineering Data Analytics (R)`,
    ],
  },
];

// create divs for timeline content
const timelineDivContent = timelineObjects.map((timelineObject) => {
  const timelineCard = document.createElement('div');
  timelineCard.classList.add('timeline-card');

  let timelineDurationString = '';
  let timeLineDisplayDate = '';
  if (timelineObject.monthStarts) {
    timelineDurationString = timelineDurationString + timelineObject.monthStarts;
    if (timelineObject.yearStarts) {
      timelineDurationString = timelineDurationString + ', ' + timelineObject.yearStarts;
      timeLineDisplayDate = `${timelineObject.monthStarts} ${timelineObject.yearStarts}`;
    } else {
      timeLineDisplayDate = `${timelineObject.monthStarts} ${timelineObject.yearEnds}`;
    }
    timelineDurationString = timelineDurationString + ' - ';
  }
  timelineDurationString = timelineDurationString + timelineObject.monthEnds + ', ' + timelineObject.yearEnds;

  timelineCard.innerHTML = `<h2>${timelineObject.title}</h2><span>${timelineDurationString}</span`;

  const timelineCardList = document.createElement('ul');
  timelineCardList.innerHTML = timelineObject.descriptionItems.map((item) => `<li>${item}</li>`);

  timelineCard.appendChild(timelineCardList);
  timelineCard.alignLeft = timelineObject.alignLeft;

  if (timeLineDisplayDate.length > 0 && timelineObject.monthEnds !== 'Present') {
    timelineCard.displayDate = timeLineDisplayDate;
  } else if (timelineObject.monthEnds === 'Present') {
    timelineCard.displayDate = 'Present';
  } else {
    timelineCard.displayDate = `${timelineObject.monthEnds} ${timelineObject.yearEnds}`;
  }

  return timelineCard;
});

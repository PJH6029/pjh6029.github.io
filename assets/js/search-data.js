// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Selected research and engineering projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, research experience, teaching, honors, and selected projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-arc-agi-solver",
          title: 'ARC-AGI Solver',
          description: "A fine-tuned and test-time-scaled solver for ARC-style reasoning tasks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/arc-agi-solver/";
            },},{id: "projects-minimal-deep-learning-framework",
          title: 'Minimal Deep Learning Framework',
          description: "A PyTorch-like framework with define-by-run autograd and CuPy-based GPU support.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/minimal-dl-framework/";
            },},{id: "projects-perspective-switching-rpg-in-unity",
          title: 'Perspective-Switching RPG in Unity',
          description: "An experimental Unity game that switches fluidly between 2D and 3D interaction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/perspective-switching-rpg/";
            },},{id: "projects-samsung-nntrainer-contributions",
          title: 'Samsung NNTrainer Contributions',
          description: "Memory-efficient training features and optimizer support contributed to an open-source training framework.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/samsung-nntrainer/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Jeonghun_Park_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%6F%70%33%32%31%39%30%32@%73%6E%75.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/PJH6029", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jeonghun-park-013a8a356", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

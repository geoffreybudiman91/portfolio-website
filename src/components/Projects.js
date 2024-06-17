import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ResyBot_Picture from '../assets/images/ResyBot.png';
import SKUManagement_Picture from '../assets/images/SKUManagement.png';
import TranscriptGenerator_Picture from '../assets/images/TranscriptGenerator.png';
import PTFDS_Project from '../assets/documents/Project.ipynb';
import PTFDS_Project_Picture from '../assets/images/PTFDS_Project.png';
import STATUB_Project from '../assets/documents/STAT-UB_103_Project.pdf';
import STATUB_Project_Picture from '../assets/images/STATUB103_Project.png';
import '../assets/styles/Projects.css';

const projects = [
  {
    name: 'Resy Bot',
    description: 'This web app was created along with several other NYU students to be able to obtain hard to get reservations on resy.com. Users would be able to create accounts and input their Resy account information. Then, they would be able to submit requests for our bot to make reservations on a specific date. Our bot would then automatically attempt to fulfill these requests. While active, our bot was able to help our users book some of the most sought after reservations in New York City.',
    imageUrl: ResyBot_Picture,
    technologies: ['logos:javascript', 'logos:nodejs-icon', 'simple-icons:express', 'bxl:mongodb', 'logos:react', "logos:chai", 'logos:docker-icon'],
    links: [
      { label: 'GitHub', url: 'https://github.com/geoffreybudiman91/resybot' },
    ],
  },
  {
    name: 'AI Transcript Generator',
    description: 'This web app allows users to record audios on their mic. Then, it uses the Deepgram API to automatically transcribe these recordings. These transcriptions are then stored in a MongoDB database.',
    imageUrl: TranscriptGenerator_Picture,
    technologies: ['logos:python', 'bxl:flask', 'bxl:mongodb', 'vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:docker-icon'],
    links: [
      { label: 'GitHub', url: 'https://github.com/geoffreybudiman91/deepgram-transcript-generator' },
    ],
  },
  {
    name: 'Programming Tools for the Data Scientist Final Project',
    description: 'Along with two other NYU students, I conducted a comprehensive data analysis on the data science job market using techniques we learned in the class. In this study, we identified the key factors that affected data science salaries, analyzed geographic salary disparities, pinpointing states and cities with the highest-paying data science jobs, and created and tested several models to predict the average salary for a data science job based on the factors that we have identified.',
    imageUrl: PTFDS_Project_Picture,
    technologies: ['logos:python', 'devicon:pandas', 'simple-icons:scipy', 'devicon:matplotlib'],
    links: [
      { label: 'Download .ipynb file', url: PTFDS_Project },
    ],
  },
  {
    name: 'STAT-UB 103 Final Project',
    description: 'In this project, I used RStudio to investigate the relationship between the violent crime rate and various socio-economic and legislative factors. For this study, we first made initial null hyphoteses regarding the relationship between our variables. Then, we calculated p-values for each hypothesis by constructing a regression model.',
    imageUrl: STATUB_Project_Picture,
    technologies: ['devicon:rstudio'],
    links: [
      { label: 'Download PDF', url: STATUB_Project },
    ],
  },
  {
    name: 'Simple Inventory Management System',
    description: 'This is a simple web app to demonstrate CRUD operations using MongoDB. The web app supports user creation and authentication such that each user is able to create, read, update, and delete their own personal SKUs.',
    imageUrl: SKUManagement_Picture,
    technologies: ['logos:python', 'bxl:flask', 'bxl:mongodb', 'vscode-icons:file-type-html', 'vscode-icons:file-type-css'],
    links: [
      { label: 'GitHub', url: 'https://github.com/geoffreybudiman91/sku-management' },
    ],
  },
];

const Projects = () => {
    useEffect(() => {
      // Load the particles.js configuration
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.onload = () => {
        window.particlesJS("particles-js-projects", {
          "particles": {
          "number": {
            "value": 96,
            "density": {
              "enable": false,
              "value_area": 1840
            }
          },
          "color": {
            "value": "#fff"
          },
          "shape": {
            "type": "edge",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 8,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "bubble"
            },
            "onclick": {
              "enable": false,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    };
    document.body.appendChild(script);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="projects">
      <div id="particles-js-projects"></div>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <h2>My Projects</h2>
      </motion.p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            viewport={{ amount: 0.4, once: true }}
          >
            <div className="project-info">
              <h3>{project.name}</h3>
              <div className="project-tech">
                <h4>Made with: </h4>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="iconify"
                    data-icon={tech}
                    data-inline="false"
                    data-width="50px"
                    data-height="50px"
                  ></span>
                ))}
              </div>
              <p>{project.description}</p>
              <div className="project-links">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="project-image">
              <img src={project.imageUrl} alt={project.name} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
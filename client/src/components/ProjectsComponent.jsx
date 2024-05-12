import React, { useState } from "react";

import DropDown from "../assets/Icons/dropdown.svg";
import Check from "../assets/Icons/check.svg";
import UnCheck from "../assets/Icons/un-check.svg";
import ReactLogo from "../assets/Icons/react.svg";
import VueLogo from "../assets/Icons/vue.svg";
import HTMLLogo from "../assets/Icons/html.svg";
import CSSLogo from "../assets/Icons/css.svg";
import ElectronLogo from "../assets/Icons/electron.svg";
import NodeLogo from "../assets/Icons/nodejs.svg";
import NPMLogo from "../assets/Icons/npmjs.svg";

//Badges
import ReactBadge from "../assets/Badges/react.svg";
import VueBadge from "../assets/Badges/vue.svg";
import ElectronBadge from "../assets/Badges/electron.svg";
import HTMLBadge from "../assets/Badges/html.svg";
import CSSBadge from "../assets/Badges/css.svg";
import NodeBadge from "../assets/Badges/node.svg";
import NPMBadge from "../assets/Badges/npm.svg";

//Backgrounds
import Keyboo from "../assets/Projects/Key_boo.png";
import PodkastAudioPlayer from "../assets/Projects/Podkast_audio_player.png";
import Web2soft from "../assets/Projects/Web_2_Soft.png";
import GBooks from "../assets/Projects/G_Books.png"
import DailyMeals from "../assets/Projects/Daily_Meals.png"

function ProjectsComponent() {
  const [selectedTechnologies, setSelectedTechnologies] = useState({
    React: true,
    Vue: false,
    HTML: false,
    CSS: false,
    Electron: false,
    NPM: false,
    Node: false,
  });
  const [showAllProjects, setShowAllProjects] = useState(true);

  const allDeselected = Object.values(selectedTechnologies).every(
    (value) => !value
  );

  const projects = [
    {
      name: "Project-1",
      tech: ["CSS", "HTML"],
      badges: [HTMLBadge, CSSBadge],
      description:
        "Test your typing skills and reaction time with this engaging Typing Challenge game.",
      background: Keyboo,
      url: "https://github.com/PrasanthYT/key-boo",
      miniTag: "_key-boo",
    },
    {
      name: "Project-2",
      tech: ["Node", "NPM", "React", "HTML", "CSS"],
      badges: [NodeBadge, NPMBadge, ReactBadge, HTMLBadge, CSSBadge],
      description:
        "PodKast Audio Player is a customizable React component for playing audio files with a user-friendly interface.",
      background: PodkastAudioPlayer,
      url: "https://podkast.netlify.app/",
      miniTag: "_audio-player",
    },
    {
      name: "Project-3",
      tech: ["Node", "Electron", "HTML", "CSS"],
      badges: [ElectronBadge, NodeBadge, HTMLBadge, CSSBadge],
      description:
        "Web2Soft converts your website to a native desktop application based on the Electron framework.",
      background: Web2soft,
      url: "https://prasanth-1.gitbook.io/web2soft-docs",
      miniTag: "_web2soft",
    },
    {
      name: "Project-4",
      tech: ["React", "HTML", "CSS"],
      badges: [ReactBadge, CSSBadge, HTMLBadge],
      description:
        "Welcome to the Book Search Application! This application allows users to search for books and view details about them.",
      background: GBooks,
      url: "https://g-books.netlify.app/",
      miniTag: "_g-books",
    },
    {
      name: "Project-5",
      tech: ["HTML", "CSS"],
      badges: [CSSBadge, HTMLBadge],
      description:
        "Welcome to the Daily Meals! This project aims to provide users with a convenient platform for meal planning, and culinary inspiration.",
      background: DailyMeals,
      url: "https://prasanthj2023.github.io/daily_meals/",
      miniTag: "_daily-meals",
    },
  ];

  const toggleTechnology = (technology) => {
    setSelectedTechnologies({
      ...selectedTechnologies,
      [technology]: !selectedTechnologies[technology],
    });
    setShowAllProjects(true);
  };

  const filteredProjects = projects.filter((project) =>
    project.tech.some((tech) => selectedTechnologies[tech])
  );

  const displayedProjects = Object.values(selectedTechnologies).every(
    (value) => !value
  )
    ? projects
    : filteredProjects;

  return (
    <>
      <div className="projects-component-content-area">
        <div className="project-filter-content-area">
          <div className="projects-component-nabigation-area">
            <img src={DropDown} alt="drop-down" />
            <p>projects</p>
          </div>
          <div className="projects-component-filter-area">
            <div className="filter-content-area">
              <div
                className="fliter-content-react-box"
                onClick={() => toggleTechnology("React")}
              >
                <div className="checkbox-img">
                  <img
                    src={selectedTechnologies["React"] ? Check : UnCheck}
                    alt=""
                  />
                </div>
                <div className="react-logo-plus-name">
                  <img src={ReactLogo} alt="" />
                  <p>React</p>
                </div>
              </div>
              <div
                className="fliter-content-vue-box"
                onClick={() => toggleTechnology("Vue")}
              >
                <div className="checkbox-img">
                  <img
                    src={selectedTechnologies["Vue"] ? Check : UnCheck}
                    alt=""
                  />
                </div>
                <div className="vue-logo-plus-name">
                  <img src={VueLogo} alt="" />
                  <p>Node JS</p>
                </div>
              </div>
              <div
                className="fliter-content-html-box"
                onClick={() => toggleTechnology("HTML")}
              >
                <div className="checkbox-img">
                  <img
                    src={selectedTechnologies["HTML"] ? Check : UnCheck}
                    alt=""
                  />
                </div>
                <div className="html-logo-plus-name">
                  <img src={HTMLLogo} alt="" />
                  <p>HTML</p>
                </div>
              </div>
              <div
                className="fliter-content-css-box"
                onClick={() => toggleTechnology("CSS")}
              >
                <div className="checkbox-img">
                  <img
                    src={selectedTechnologies["CSS"] ? Check : UnCheck}
                    alt=""
                  />
                </div>
                <div className="css-logo-plus-name">
                  <img src={CSSLogo} alt="" />
                  <p>CSS</p>
                </div>
              </div>
              <div
                className="fliter-content-gatsby-box"
                onClick={() => toggleTechnology("Gatsby")}
              >
                <div className="checkbox-img">
                  <img
                    src={selectedTechnologies["Gatsby"] ? Check : UnCheck}
                    alt=""
                  />
                </div>
                <div className="gatsby-logo-plus-name">
                  <img src={ElectronLogo} alt="" />
                  <p>Electron</p>
                </div>
              </div>
              <div
                className="fliter-content-angular-box"
                onClick={() => toggleTechnology("NPM")}
              >
                <div className="checkbox-img">
                  <img
                    src={selectedTechnologies["NPM"] ? Check : UnCheck}
                    alt=""
                  />
                </div>
                <div className="angular-logo-plus-name">
                  <img src={NPMLogo} alt="" />
                  <p>NPM</p>
                </div>
              </div>
              <div
                className="fliter-content-flutter-box"
                onClick={() => toggleTechnology("Node")}
              >
                <div className="checkbox-img">
                  <img
                    src={selectedTechnologies["Node"] ? Check : UnCheck}
                    alt=""
                  />
                </div>
                <div className="flutter-logo-plus-name">
                  <img src={NodeLogo} alt="" />
                  <p>Node JS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showAllProjects ? (
          <div className="project-component-showcase-area">
            <div className="project-component-showcase-navgation-bar">
              <div className="showcase-tech-type">
                {allDeselected
                  ? "all-projects"
                  : Object.entries(selectedTechnologies).map(
                      ([tech, selected]) =>
                        selected && <p key={tech}>{tech};</p>
                    )}
                <p onClick={() => setShowAllProjects(false)}>x</p>
              </div>
            </div>
            <div className="project-shoewcase-main-content-area">
              <div className="projects-showcase-area">
                {displayedProjects.map((project, index) => (
                  <div className="project-showcase-area-one" key={index}>
                    <div className="project-heading">
                      <p className="color-heading">{project.name}</p>
                      <p>
                        {"//"} {project.miniTag}
                      </p>
                    </div>
                    <div className="project-content">
                      <div
                        className="project-thubnail"
                        style={{
                          backgroundImage: `url(${project.background})`,
                        }}
                      >
                        {project.badges?.map((badge, index) => (
                          <img
                            className="tech-badges"
                            key={index}
                            src={badge}
                            alt="badge"
                          />
                        ))}
                      </div>
                      <div className="project-description">
                        <p>{project.description}</p>
                        <button
                          onClick={() => window.open(project.url, "_blank")}
                        >
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="project-component-empty-div"></div>
        )}
      </div>
    </>
  );
}

export default ProjectsComponent;

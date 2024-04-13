import React, { useState } from "react";

import DropDown from "../assets/Icons/dropdown.svg";
import Check from "../assets/Icons/check.svg";
import UnCheck from "../assets/Icons/un-check.svg";
import ReactLogo from "../assets/Icons/react.svg";
import VueLogo from "../assets/Icons/vue.svg";
import HTMLLogo from "../assets/Icons/html.svg";
import CSSLogo from "../assets/Icons/css.svg";
import GatsbyLogo from "../assets/Icons/gatsby.svg";
import FlutterLogo from "../assets/Icons/flutter.svg";
import AngularLogo from "../assets/Icons/angular.svg";

//Badges
import ReactBadge from "../assets/Badges/react.svg";
import VueBadge from "../assets/Badges/vue.svg";
import GatsbyBadge from "../assets/Badges/gatsby.svg";
import HTMLBadge from "../assets/Badges/html.svg";
import CSSBadge from "../assets/Badges/css.svg";
import FlutterBadge from "../assets/Badges/flutter.svg";
import AngularBadge from "../assets/Badges/angular.svg";

//Backgrounds
import Background from "../assets/Background.svg";
import BackgroundTwo from "../assets/Background-Snake.svg";

function ProjectsComponent() {
  const [selectedTechnologies, setSelectedTechnologies] = useState({
    React: true,
    Vue: true,
    HTML: false,
    CSS: false,
    Gatsby: false,
    Flutter: false,
    Angular: false,
  });
  const [showAllProjects, setShowAllProjects] = useState(true);

  const allDeselected = Object.values(selectedTechnologies).every(
    (value) => !value
  );

  const projects = [
    {
      name: "Project-1",
      tech: "React",
      badge: ReactBadge,
      description: "This a demo project for UI design",
      background: Background
    },
    {
      name: "Project-2",
      tech: "React",
      badge: ReactBadge,
      description: "This a demo project for UI design",
      background: BackgroundTwo
    },
    {
      name: "Project-3",
      tech: "Vue",
      badge: VueBadge,
      description: "This a demo project for UI design",
      background: Background
    },
    {
      name: "Project-3",
      tech: "CSS",
      badge: CSSBadge,
      description: "This a demo project for UI design",
      background: BackgroundTwo
    },
  ];

  const toggleTechnology = (technology) => {
    setSelectedTechnologies({
      ...selectedTechnologies,
      [technology]: !selectedTechnologies[technology],
    });
    setShowAllProjects(true)
  };

  const filteredProjects = projects.filter(
    (project) => selectedTechnologies[project.tech]
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
                  <p>Vue</p>
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
                  <img src={GatsbyLogo} alt="" />
                  <p>Gatsby</p>
                </div>
              </div>
              <div
                className="fliter-content-angular-box"
                onClick={() => toggleTechnology("Angular")}
              >
                <div className="checkbox-img">
                  <img
                    src={selectedTechnologies["Angular"] ? Check : UnCheck}
                    alt=""
                  />
                </div>
                <div className="angular-logo-plus-name">
                  <img src={AngularLogo} alt="" />
                  <p>Angular</p>
                </div>
              </div>
              <div
                className="fliter-content-flutter-box"
                onClick={() => toggleTechnology("Flutter")}
              >
                <div className="checkbox-img">
                  <img
                    src={selectedTechnologies["Flutter"] ? Check : UnCheck}
                    alt=""
                  />
                </div>
                <div className="flutter-logo-plus-name">
                  <img src={FlutterLogo} alt="" />
                  <p>Flutter</p>
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
                      <p>{"//"} _ui-animation</p>
                    </div>
                    <div className="project-content">
                      <div className="project-thubnail" style={{ backgroundImage: `url(${project.background})` }}>
                        <img src={project.badge} alt="badge" />
                      </div>
                      <div className="project-description">
                        <p>{project.description}</p>
                        <button>View Project</button>
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

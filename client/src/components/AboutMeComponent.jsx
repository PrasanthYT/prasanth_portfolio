import React, { useEffect, useState } from "react";
import thirukkuralData from  "./Thirukural.json";

import Code from "../assets/Icons/terminal-box-fill.svg";
import Account from "../assets/Icons/account-pin-circle-fill.svg";
import DropDown from "../assets/Icons/dropdown.svg";
import CodeDropDown from "../assets/Icons/code-dropdown.svg";
import CodeDropDownOpen from "../assets/Icons/code-dropdown-open.svg";
import FolderOne from "../assets/Icons/folder-one.svg";
import FolderTwo from "../assets/Icons/folder-two.svg";
import FolderThree from "../assets/Icons/folder-three.svg";
import MarkdownFile from "../assets/Icons/markdown-file.svg";
import Email from "../assets/Icons/mail-fill.svg";
import Phone from "../assets/Icons/phone-fill.svg";

function AboutMeComponent() {
  const fileContents = {
    "personal-info": `/*
I'm Prasanth, a student with a strong desire to contribute to upcoming
technologies and open-source projects.

I'm currently pursuing my B.Tech degree in Computer Science Engineering at
VELS University. My long-term goal is to make meaningful contributions
to open-source projects and share my knowledge with the people around me.

I've taken steps toward this goal by conducting BootCamps for 12th standard
students, especially those from rural areas. Through these BootCamps, I aim
to provide educational opportunities and help students develop their skills
and confidence in the tech field. My objective is to inspire others,
particularly students from similar backgrounds, and encourage them to
pursue their goals in technology.
    
I'm passionate about using my education and experience to empower the 
next generation, bridging the gap between rural and urban educational
opportunities. By doing so, I hope to leave a lasting impact on the 
tech community and those I have the privilege to work with.
*/`,
    interests: `/*
My interests extend beyond computer science and education, reaching
into the realms of hosting events, podcasting, and politics.
Hosting events as an MC has been a rewarding experience, allowing me
to connect with audiences and develop my public speaking skills.
So far, I've hosted three official shows, and I have a podcast on
Spotify where I enjoy sharing insights and engaging with listeners
on various topics.

I'm also deeply interested in politics, inspired by the legacy of
Dr. B.R. Ambedkar. His contributions to Indian society and his pursuit
of social justice have had a profound impact on me. This interest fuels
my desire to be informed and involved in societal and political issues.
Through my diverse interests, I strive to make a meaningful impact in
various areas of my life.
*/`,
    highschool: `/*
In my high school days, I studied at Seventh Day Adventist School,
where I completed my education. It was during this time that I
discovered my passion for programming and began exploring the world
of computer science. Since then, my love for the field has only grown
stronger.

While in high school, I made an effort to go beyond the standard
curriculum and immerse myself in additional learning opportunities.
This included delving into extra subjects and activities outside of
what was required in my classes. My high school years provided the
foundation for my journey in technology and helped shape my interest
in pursuing a career in computer science.
*/`,
    university: `/*
My college journey at VELS University has been an exciting continuation
of my interest in computer science that began in high school.
I'm majoring in Computer Science and Engineering (CSE), which aligns
perfectly with my passion for technology and innovation.

During my college years, I have participated in over five
hackathons and have been fortunate enough to win first prize in more than
two of them. These hackathons have been incredible opportunities to apply
my skills, collaborate with talented peers, and solve real-world problems.
    
In addition to my technical pursuits, I've also found a passion for hosting
and emceeing events. Serving as an MC at various college events has allowed
me to hone my public speaking and leadership skills, and it's something 
I truly enjoy. It's one of the many ways I'm working towards achieving 
my dreams and becoming a well-rounded individual in my field.
*/`,
  };
  const [activeDropdown, setActiveDropdown] = useState("bio");
  const [selectedFileName, setSelectedFileName] = useState("personal-info.md");
  const [selectedFileContent, setSelectedFileContent] = useState(
    fileContents["personal-info"]
  );
  const [viewerOpen, setViewerOpen] = useState(true);
  const [selectedThirukkural, setSelectedThirukkural] = useState(null);

  // Function to generate a random Thirukkural
  const generateRandomThirukkural = () => {
    const randomIndex = Math.floor(Math.random() * thirukkuralData.length);
    setSelectedThirukkural(thirukkuralData[randomIndex]);
  };

  // Use useEffect to call generateRandomThirukkural on component mount
  useEffect(() => {
    generateRandomThirukkural();
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prevDropdown) =>
      prevDropdown === dropdown ? null : dropdown
    );
  };

  const handleFileClick = (fileName, fileContent) => {
    setSelectedFileName(fileName);
    setSelectedFileContent(fileContent);
    setViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setViewerOpen(false);
  };

  return (
    <>
      <div className="about-me-component-main-content-area">
        <div className="about-me-component-explore-area">
          <img src={Code} alt="code-icon" />
          <img src={Account} alt="personal-info-icon" />
        </div>
        <div className="about-me-component-files-and-folders-area">
          <div className="code-editor-personal-info-folder-name">
            <img src={DropDown} alt="drop-down-icon" />
            <p>personal-info</p>
          </div>
          <div className="code-editor-files-area">
            <div className="konjam-thalli-poo"></div>
            <div className="code-editor-folders-and-files-area-with-name">
              <div
                className="code-editor-bio-folder"
                onClick={() => toggleDropdown("bio")}
              >
                <img
                  src={
                    activeDropdown === "bio" ? CodeDropDownOpen : CodeDropDown
                  }
                  alt="drop-down-icon"
                />
                <div
                  className={`bio-folder${
                    activeDropdown === "bio" ? "" : " active"
                  }`}
                >
                  <img src={FolderOne} alt="folder-icon" />
                  <p>bio</p>
                </div>
              </div>
              {activeDropdown === "bio" && (
                <div className="code-editor-bio-content">
                  <div className="bio-folder-open">
                    <div
                      className="personal-info-file-with-icon"
                      onClick={() =>
                        handleFileClick(
                          "personal-info.md",
                          fileContents["personal-info"]
                        )
                      }
                    >
                      <img src={MarkdownFile} alt="markdown-file-icon" />
                      <p>personal-info</p>
                    </div>
                  </div>
                </div>
              )}
              <div
                className="code-editor-interests-folder"
                onClick={() => toggleDropdown("interests")}
              >
                <img
                  src={
                    activeDropdown === "interests"
                      ? CodeDropDownOpen
                      : CodeDropDown
                  }
                  alt="drop-down-icon"
                />
                <div
                  className={`interests-folder${
                    activeDropdown === "interests" ? "" : " active"
                  }`}
                >
                  <img src={FolderTwo} alt="folder-icon" />
                  <p>interests</p>
                </div>
              </div>
              {activeDropdown === "interests" && (
                <div className="code-editor-interests-content">
                  <div className="interests-folder-open">
                    <div
                      className="interests-file-with-icon"
                      onClick={() =>
                        handleFileClick(
                          "interests.md",
                          fileContents["interests"]
                        )
                      }
                    >
                      <img src={MarkdownFile} alt="markdown-file-icon" />
                      <p>interests</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="code-editor-education-folder">
                <div
                  className="code-editor-with-icons-and-name"
                  onClick={() => toggleDropdown("education")}
                >
                  <img
                    src={
                      activeDropdown === "education"
                        ? CodeDropDownOpen
                        : CodeDropDown
                    }
                    alt="drop-down-icon"
                  />
                  <div
                    className={`education-folder${
                      activeDropdown === "education" ? "" : " active"
                    }`}
                  >
                    <img src={FolderThree} alt="folder-icon" />
                    <p>education</p>
                  </div>
                </div>
                {activeDropdown === "education" && (
                  <div className="code-editor-education-content">
                    <div className="education-folder-open">
                      <div
                        className="high-school-file-with-icon"
                        onClick={() =>
                          handleFileClick(
                            "high-school.md",
                            fileContents["highschool"]
                          )
                        }
                      >
                        <img src={MarkdownFile} alt="markdown-file-icon" />
                        <p>high-school</p>
                      </div>
                      <div
                        className="university-file-with-icon"
                        onClick={() =>
                          handleFileClick(
                            "university.md",
                            fileContents["university"]
                          )
                        }
                      >
                        <img src={MarkdownFile} alt="markdown-file-icon" />
                        <p>university</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="about-me-component-contacts-area">
            <img src={DropDown} alt="drop-down-icon" />
            <p>Contacts</p>
          </div>
          <div className="contacts-email-and-phone-number">
            <div className="about-me-component-email">
              <img src={Email} alt="email-icon" />
              <p>jprasanth2006@gmail.com</p>
            </div>
            <div className="about-me-component-phone">
              <img src={Phone} alt="phone-icon" />
              <p>8667052857</p>
            </div>
          </div>
          <div className="dummy-area"></div>
        </div>
        {viewerOpen && (
          <div className="code-editor-file-viewer">
            <div className="code-editor-file-edit-top-area">
              <div className="code-editor-file-name">
                <p>{selectedFileName}</p>
                <p onClick={handleCloseViewer}>x</p>
              </div>
            </div>
            <div className="code-editor-file-read-and-view-area-with-progress-bar">
              <div className="file-content-view-area">
                <div className="line-numbers">
                  {/* Render line numbers here */}
                  {[...Array(25)].map((_, index) => (
                    <div key={index} className="line-number">
                      {index + 1}
                    </div>
                  ))}
                </div>
                <pre className="codeeditor-file-content">
                  {selectedFileContent}
                </pre>
              </div>
            </div>
          </div>
        )}
        {!viewerOpen && <div className="code-editor-empty-div"></div>}
        <div className="code-editor-right-side-code-snippets">
          <div className="code-editor-right-side-navbar"></div>
          <div className="code-editor-right-side-content-area-with-progress-bar">
            <div className="code-editor-content-area-snippts">
              <div className="code-editor-news-area">
              <h1>{"//"} Thirukkural</h1>
                {selectedThirukkural ? (
                  <div className="thirukural">
                    <p>{selectedThirukkural.verse}</p>
                    <p>{selectedThirukkural.englishVerse}</p>
                  </div>
                ) : (
                  <p>Loading a random Thirukkural...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMeComponent;
